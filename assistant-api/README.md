# Ask Ashish AI — Cloudflare Worker

This backend powers the Ask Me assistant in the portfolio. It is deployed as a Cloudflare Worker; no Vercel backend is used.

## Worker files
- `src/index.js` — Cloudflare Worker API and Gemini integration.
- `wrangler.jsonc` — Worker configuration, model, allowed website origins, and required secret declaration.
- `package.json` — Wrangler scripts.

## Deploy through Cloudflare Workers Builds

1. Open Cloudflare Dashboard → Workers & Pages → Create → Connect to Git.
2. Connect the `DASHISH498/portfolio` GitHub repository.
3. Set the root directory to `assistant-api`.
4. Set the production branch to `master` after this feature branch has been reviewed and merged.
5. Use build command `npm install` and deploy command `npm run deploy`.
6. Add the Worker secret `GEMINI_API_KEY` in Worker Settings → Variables and Secrets. Mark it as a Secret. Never add the key to GitHub, source code, or a `NEXT_PUBLIC_*` variable.
7. Deploy. Cloudflare will provide a Worker URL such as `https://ask-ashish-ai.<your-workers-subdomain>.workers.dev`.

Cloudflare Workers Builds can automatically deploy on pushes to the connected branch. You can also deploy locally from this directory with `npm install`, `npx wrangler login`, `npx wrangler secret put GEMINI_API_KEY`, and `npm run deploy`.

## Connect the portfolio frontend

Set this build-time variable to the actual Worker URL (without a trailing slash):

`NEXT_PUBLIC_ASK_ASHISH_API_URL=https://ask-ashish-ai.<your-workers-subdomain>.workers.dev`

Set it in:
- GitHub repository Settings → Secrets and variables → Actions → Variables.
- The portfolio build environment wherever the static portfolio is built.
- A local `.env.local` in the portfolio root for local development (do not commit it).

The GitHub Pages workflow already passes this variable into the Next.js static build. After setting it, rebuild and deploy the portfolio so the browser code knows the real Worker URL.

The API endpoint is `/api/chat`; the health check is `/health`.

## Test questions
- Tell me about yourself.
- What is Ashish's Angular experience?
- Does Ashish have professional React experience?
- Tell me about FoodieHub.
- What are Ashish's salary expectations? (The assistant should say that the public profile does not specify.)
- What is your favorite movie? (The assistant should decline unrelated questions.)

## Security and behavior
- Gemini is called only from the Worker. `GEMINI_API_KEY` is a Cloudflare secret and is never sent to the browser.
- The Worker validates the browser Origin, accepts POST requests only at `/api/chat`, limits question/history length, and applies a per-isolate best-effort request limit.
- Origin checks are browser isolation controls, not authentication; non-browser clients can spoof an Origin header. The in-memory rate limit is not a global quota system. Add Cloudflare rate limiting / Turnstile before high-traffic public use.
- Voice input uses browser Speech Recognition when supported. Spoken replies use the visitor's browser Speech Synthesis. Microphone permission may be required.
- Text conversation history is sent to Gemini for context but is not saved by this application.
- Gemini usage may consume quota or incur charges depending on the Google account and plan.
