# Ask Ashish AI — Cloudflare Worker

This backend powers the floating Ask Me assistant in the portfolio. It runs on Cloudflare Workers and uses Google's Gemini API. There is no Vercel backend.

## Files
- `src/index.js` — Cloudflare Worker API and Gemini integration.
- `wrangler.jsonc` — Worker name, Gemini model, allowed origins, and required secret declaration.
- `package.json` — Wrangler scripts.

## Automatic deployment

The repository includes `.github/workflows/deploy-ask-ashish-worker.yml`. After this feature branch is merged into `master`, every change under `assistant-api/**` automatically deploys the Worker.

Add these three GitHub Actions secrets under repository Settings → Secrets and variables → Actions → Repository secrets:

| Secret name | Value |
| --- | --- |
| `CLOUDFLARE_API_TOKEN` | Cloudflare API token with permission to edit Workers scripts |
| `CLOUDFLARE_ACCOUNT_ID` | Your Cloudflare account ID |
| `GEMINI_API_KEY` | Google AI Studio API key |

The workflow installs Wrangler, pipes the Gemini key directly into `wrangler secret put`, then deploys the Worker. The key is never written into the repository or frontend bundle.

Cloudflare will provide a URL similar to:

`https://ask-ashish-ai.<your-workers-subdomain>.workers.dev`

The Worker exposes:
- `GET /health` — health check.
- `POST /api/chat` — Gemini-backed chat endpoint.

## Connect the portfolio frontend

Set the GitHub Actions repository variable (not a secret) under Settings → Secrets and variables → Actions → Variables:

`NEXT_PUBLIC_ASK_ASHISH_API_URL=https://ask-ashish-ai.<your-workers-subdomain>.workers.dev`

Use the actual URL Cloudflare displays after the first successful Worker deployment. The GitHub Pages build workflow already passes this variable into the Next.js static build. Once configured, the next portfolio build will connect the Ask Me UI to the Worker.

## Model and allowed origins

Configured in `wrangler.jsonc`:
- Model: `gemini-3.8-flash`.
- Allowed website origins: `https://dashish498.github.io` and `http://localhost:3000`.

Add your own portfolio's exact origin to `ALLOWED_ORIGINS` if you use a different custom domain. Do not include URL paths or trailing slashes.

## Test questions

- Tell me about yourself.
- What is Ashish's Angular experience?
- Does Ashish have professional React experience?
- Tell me about FoodieHub.
- What are Ashish's salary expectations? (The assistant should say the public profile does not specify.)
- What is your favorite movie? (The assistant should decline unrelated questions.)

## Security and behavior

- Gemini is called only from the Worker. `GEMINI_API_KEY` is a Cloudflare Worker secret.
- The Worker validates the browser Origin, accepts POST requests at `/api/chat`, limits question/history length, and applies a per-isolate best-effort request limit.
- Origin checks are browser isolation controls, not authentication; non-browser clients can spoof an Origin header. The in-memory rate limit is not a global quota system. Add Cloudflare rate limiting or Turnstile before high-traffic public use.
- Voice input uses browser Speech Recognition when supported; spoken replies use browser Speech Synthesis. Microphone permission may be required.
- Chat history is sent to Gemini for context but is not stored by this application.
- Gemini usage may consume quota or incur charges depending on the Google account and plan.
