# Ask Ashish AI — deployment setup

This is a separate Gemini-backed assistant for the portfolio. The portfolio itself remains a static Next.js export; the assistant API runs as a separate Vercel project rooted at this folder.

## Files
- `api/chat.js` — server-side Gemini endpoint.
- `package.json` — isolated backend dependency on Google's official `@google/genai` SDK.

## 1. Deploy this API as a separate Vercel project

1. In Vercel, create a new project from the `DASHISH498/portfolio` repository.
2. Select branch `feature/ask-ashish-ai` for the initial preview (use the merged branch later for production).
3. Set **Root Directory** to `assistant-api`.
4. Use the Node.js runtime / Other preset. The API entry point is `api/chat.js`.
5. Add the following server-side environment variables:

| Name | Value |
| --- | --- |
| `GEMINI_API_KEY` | Your Google AI Studio API key (secret) |
| `GEMINI_MODEL` | `gemini-3.8-flash` |
| `ALLOWED_ORIGINS` | `https://dashish498.github.io,https://portfolio-ashish498.vercel.app,http://localhost:3000` |

Add any custom portfolio domain to `ALLOWED_ORIGINS` as well. Do not add a trailing slash to an origin. Never use a `NEXT_PUBLIC_*` name for the Gemini key.

6. Deploy and copy the API project's base URL, for example `https://ask-ashish-api.vercel.app`. The chat endpoint will be `https://ask-ashish-api.vercel.app/api/chat`.

## 2. Configure the portfolio frontend

The portfolio frontend reads this build-time variable:

`NEXT_PUBLIC_ASK_ASHISH_API_URL=https://ask-ashish-api.vercel.app`

Set it in:
- The existing portfolio Vercel project, for its static export deployment.
- GitHub repository Settings → Secrets and variables → Actions → Variables, with the exact name `NEXT_PUBLIC_ASK_ASHISH_API_URL`, so GitHub Pages builds embed the API URL.

For local development, create `.env.local` in the portfolio root with the same variable. Do not commit `.env.local`.

After setting the variable, redeploy the portfolio so Next.js includes the URL in its static client bundle.

## 3. Test

Try:
- Tell me about yourself.
- What is Ashish's Angular experience?
- Does Ashish have professional React experience?
- Tell me about FoodieHub.
- What are Ashish's salary expectations? (The assistant should say the public profile does not specify.)
- What is your favorite movie? (The assistant should decline unrelated questions.)

## Privacy, security, and limits

- Gemini is called only by the serverless API. The secret is never sent to the browser.
- The API only accepts POST and preflight OPTIONS requests, validates the Origin header, limits question/history lengths, and applies a basic per-instance rate limit.
- The in-memory rate limit is best-effort and is not a shared global quota. Add a persistent shared rate limiter before high-traffic public use.
- The browser speech-recognition API varies by browser and may require microphone permission. Typed questions are always available.
- Spoken answers use the visitor's browser text-to-speech engine. Voice output can be muted.
- Chat history is held in page memory only and is not persisted by this application.
- Gemini usage may consume quota or incur charges depending on the Google account and plan.
