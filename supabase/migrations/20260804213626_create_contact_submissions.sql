/*
# Create contact_submissions table

Stores submissions from the main Contact page form.
Mirrors the choice_leads table structure.

1. New Tables
  - `contact_submissions`
    - `id` (uuid, primary key)
    - `name` (text, not null) — full name
    - `email` (text, not null) — email address
    - `phone` (text) — phone number (optional)
    - `company` (text) — agency or company name (optional)
    - `message` (text, — additional notes (optional)
    - `created_at` (timestamptz) — submission timestamp

2. Security
  - RLS enabled.
  - Anon + authenticated INSERT allowed (public form, no login).
  - No SELECT/UPDATE/DELETE for anon — submissions are write-only from the public.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_submissions" ON contact_submissions;
CREATE POLICY "anon_insert_contact_submissions" ON contact_submissions FOR INSERT
  TO anon, authenticated WITH CHECK (true);
