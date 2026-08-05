import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const NOTIFY_EMAIL = "office@jsbfirm.com";
const FROM_EMAIL = "no-reply@jsbfirm.com";

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const { type, data } = await req.json();

    if (!type || !data) {
      return new Response(
        JSON.stringify({ error: "Missing type or data" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const table = type === "choice" ? "choice_leads" : "contact_submissions";

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const row = {
      name: data.name,
      email: data.email,
      phone: data.phone ?? null,
      company: data.company ?? null,
      message: data.message ?? null,
      submitter_type: data.submitter_type ?? "agent",
    };

    const { error } = await supabase.from(table).insert(row);

    if (error) {
      return new Response(
        JSON.stringify({ error: error.message }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    let emailResult: { ok: boolean; status: number; body: string } | null = null;

    if (RESEND_API_KEY) {
      const subject =
        type === "choice"
          ? `New CHOICE Innovate lead from ${data.name} (${data.submitter_type ?? "agent"})`
          : `New contact form submission from ${data.name} (${data.submitter_type ?? "agent"})`;

      const body = [
        `New ${type === "choice" ? "CHOICE Innovate" : "contact"} form submission:`,
        "",
        `Type: ${(data.submitter_type ?? "agent").charAt(0).toUpperCase() + (data.submitter_type ?? "agent").slice(1)}`,
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        data.phone ? `Phone: ${data.phone}` : null,
        data.company ? `Company: ${data.company}` : null,
        data.message ? `Message: ${data.message}` : null,
        "",
        `Submitted at: ${new Date().toISOString()}`,
      ]
        .filter(Boolean)
        .join("\n");

      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: FROM_EMAIL,
          to: [NOTIFY_EMAIL],
          subject,
          text: body,
        }),
      });

      const resText = await res.text();
      emailResult = { ok: res.ok, status: res.status, body: resText };
    } else {
      emailResult = { ok: false, status: 0, body: "RESEND_API_KEY not configured" };
    }

    return new Response(
      JSON.stringify({ success: true, email: emailResult }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
