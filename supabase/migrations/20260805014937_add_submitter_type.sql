/* Add submitter_type to contact_submissions and choice_leads */

ALTER TABLE contact_submissions
  ADD COLUMN IF NOT EXISTS submitter_type text NOT NULL DEFAULT 'agent';

ALTER TABLE choice_leads
  ADD COLUMN IF NOT EXISTS submitter_type text NOT NULL DEFAULT 'agent';
