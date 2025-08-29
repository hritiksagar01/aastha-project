-- Supabase Storage Policies for Raksha Guard Plus
-- Run these SQL commands in your Supabase SQL Editor

-- 1. Create the suraksha bucket if it doesn't exist
INSERT INTO storage.buckets (id, name, public)
VALUES ('suraksha', 'suraksha', false)
ON CONFLICT (id) DO NOTHING;

-- 2. Drop existing policies to avoid conflicts
DROP POLICY IF EXISTS "Allow authenticated uploads" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated reads" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated updates" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated deletes" ON storage.objects;

-- 3. Allow authenticated users to upload files to the suraksha bucket with proper folder structure
CREATE POLICY "Allow authenticated uploads"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'suraksha' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

-- 4. Allow authenticated users to read their own files
CREATE POLICY "Allow authenticated reads"
ON storage.objects
FOR SELECT
TO authenticated
USING (
  bucket_id = 'suraksha' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

-- 5. Allow authenticated users to update their own files
CREATE POLICY "Allow authenticated updates"
ON storage.objects
FOR UPDATE
TO authenticated
USING (
  bucket_id = 'suraksha' AND
  auth.uid()::text = (storage.foldername(name))[1]
)
WITH CHECK (
  bucket_id = 'suraksha' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

-- 6. Allow authenticated users to delete their own files
CREATE POLICY "Allow authenticated deletes"
ON storage.objects
FOR DELETE
TO authenticated
USING (
  bucket_id = 'suraksha' AND
  auth.uid()::text = (storage.foldername(name))[1]
);
