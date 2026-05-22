Deployment to Render

Steps:

1. Push your repository to GitHub (if not already done).
2. Open https://render.com and sign in.
3. Click "New" → "Web Service" → "Connect a repository" and pick your repo.
4. Set the following fields when creating the service:
   - Branch: `main` (or your branch)
   - Root Directory: `Backend-BlogApp`
   - Environment: `Node`
   - Build Command: `npm install`
   - Start Command: `npm start`
5. In the Render dashboard, under Environment, add these environment variables (set as _secrets_):
   - `DB_URL` → your MongoDB connection string
   - `JWT_SECRET` → a strong random secret
   - `FRONTEND_URL` → (optional) e.g. `https://blogappfrontend-nine.vercel.app`
   - `CLOUDINARY_URL` → `cloudinary://<API_KEY>:<API_SECRET>@<CLOUD_NAME>` or set `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`, `CLOUDINARY_CLOUD_NAME` separately
6. (Optional) Configure a managed DB on Render and use its connection string for `DB_URL`.
7. Deploy. Render will build and start the service using the manifest.

Notes:
- I put a placeholder `CLOUDINARY_URL` in `render.yaml`; for security, set secrets via Render dashboard rather than committing them.
- If you want, I can add a `render` GitHub Action or set the branch/PR auto-deploy rules.
