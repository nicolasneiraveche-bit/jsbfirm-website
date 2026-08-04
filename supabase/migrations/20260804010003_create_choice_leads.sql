/*
# Create choice_leads table

Stores contact information from visitors who fill out the "Book a Meeting"
interest form on the CHOICE Innovate section of the website.

1. New Tables
  - `choice_leads`
    - `id` (uuid, primary key)
    - `name` (text, not null) — full name
    - `email` (text, not null) — email address
    - `phone` (text) — phone number (optional)
    - `company` (text) — agency or company name (optional)
    - `message` (text) — any additional notes (optional)
    - `created_at` (timestamptz) — submission timestamp

2. Security
  - RLS enabled.
  - Anon + authenticated INSERT allowed (public form, no login).
  - No SELECT policy for anon — submissions are write-only from the public.
*/

CREATE TABLE IF NOT EXISTS choice_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE choice_leads ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_choice_leads" ON choice_leads;
CREATE POLICY "anon_insert_choice_leads" ON choice_leads FOR INSERT
  TO anon, authenticated WITH CHECK (true);
