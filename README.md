# Vercel Deployment Guide

This project is a TanStack Start app backed by Lovable Cloud (Supabase). To deploy it on Vercel without the blank white screen, you must add all required environment variables to your Vercel project before building.

## Why a blank screen happens

The `.env` file is ignored by Git, so it is not included when you push to GitHub or download a ZIP. Vercel builds the app without these values, the Supabase client throws on startup, and the page renders completely white with no visible text or images.

## Required Vercel Environment Variables

Add all of the following variables to **Vercel Dashboard → Your Project → Settings → Environment Variables**. Apply them to **Production**, **Preview**, and **Development** environments.

### Browser variables (VITE_ prefix)

These are embedded in the built frontend bundle by Vite. They must be public and are safe to expose in client code.

| Variable Name | Example Value | Purpose |
|---------------|---------------|---------|
| `VITE_SUPABASE_URL` | `https://tqyxgvsgqnzqdykbbysq.supabase.co` | Supabase project URL. Used by the browser client. |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | `sb_publishable_...` | Anonymous/public API key for the browser client. |
| `VITE_SUPABASE_PROJECT_ID` | `tqyxgvsgqnzqdykbbysq` | Supabase project identifier. |

### Server variables (no prefix)

These are used by server functions and SSR. They are never sent to the browser.

| Variable Name | Example Value | Purpose |
|---------------|---------------|---------|
| `SUPABASE_URL` | `https://tqyxgvsgqnzqdykbbysq.supabase.co` | Same project URL, used by server-side code. |
| `SUPABASE_PUBLISHABLE_KEY` | `sb_publishable_...` | Same public key, used by server publishable client. |
| `SUPABASE_SERVICE_ROLE_KEY` | `sb_service_...` | Service role key for admin server operations. |

> **Note:** `SUPABASE_SERVICE_ROLE_KEY` is required if any server function or route uses `supabaseAdmin` (service role). It bypasses Row Level Security, so never expose it in the browser or frontend code.

## Where to get the values

1. Open your Lovable project in the editor.
2. Go to **Backend** (Lovable Cloud) → API / Settings.
3. Copy the **Project URL** and **Publishable key**.
4. For the service role key, use Lovable Cloud's secret management or the backend credentials area. If you do not have access to it, you may not need it unless the app uses admin server functions.

You can also copy the values from the local `.env` file in your Lovable editor. That file is not committed to Git, so you must paste them manually into Vercel.

## Step-by-step setup in Vercel

1. Push the project to GitHub and import it into Vercel.
2. In Vercel, go to **Project → Settings → Environment Variables**.
3. Add each variable from the tables above.
4. Make sure **Production**, **Preview**, and **Development** checkboxes are all selected for every variable.
5. Click **Save**.
6. Go to **Deployments** and click the latest deployment → **Redeploy** (or push a new commit).
7. After redeploy, open the live site and check the browser console if anything still looks broken.

## Important notes

- Do not rename `SUPABASE_SERVICE_ROLE_KEY` to `VITE_SUPABASE_SERVICE_ROLE_KEY`. Service role keys must stay server-only.
- Do not add the publishable key to `README.md` or frontend code in a public repository unless you are okay with it being visible. The publishable key is designed to be public, but keep the project tidy.
- If you only deploy static frontend pages and never use authenticated server functions, you may only need the `VITE_SUPABASE_*` variables. However, adding all server variables upfront prevents future crashes.

## After redeploying

If the page is still blank:

1. Open the browser console.
2. Look for an error like: `Missing Supabase environment variable(s): ...`.
3. Add the missing variable in Vercel and redeploy again.
