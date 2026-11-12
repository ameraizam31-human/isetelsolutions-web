# Netlify Setup - AI Chat Function

The chat widget in `index.html` talks to a Netlify Function that proxies to Groq, so the API key never reaches the browser.

```
index.html                   # site + chat widget (POSTs to /.netlify/functions/chat)
netlify/functions/chat.js    # Groq proxy (model: llama-3.3-70b-versatile)
```

## Setup

1. Create an API key at https://console.groq.com/keys.
2. Netlify Dashboard -> your site -> **Site configuration -> Environment variables** -> add:

   ```
   GROQ_API_KEY = gsk_...
   ```

   This is the only variable the function reads. The model is set in `chat.js` (`MODEL`).
3. Redeploy (push to `main`, or **Deploys -> Trigger deploy**). Environment variable changes only apply to new deploys.
4. Open the live site, send a chat message, and check **Logs -> Functions -> chat** if it fails.

## How the function works

- Request: `POST /.netlify/functions/chat` with JSON `{ "message": "...", "history": [{ "role": "user" | "assistant", "content": "..." }] }`.
  `history` is the conversation *before* the current message - the widget does not repeat the current message in it.
- Response: `{ "success": true, "response": "..." }`, or `{ "success": false, "error": "...", "message": "..." }`.
- The system prompt (company facts, tap. prices, contact details) lives in `chat.js` as `SYSTEM_PROMPT`. It mirrors `index.html` - update both together when prices or services change.

## Limits and security

- **Methods:** POST only (plus OPTIONS for CORS preflight). Anything else gets 405.
- **CORS / origin:** only `https://isetelsolutions.my`, `https://www.isetelsolutions.my`, `https://*.netlify.app` (deploy previews) and `http://localhost` / `127.0.0.1` (dev). Other origins, or no `Origin` header, get 403. Adding a new domain means editing `ALLOWED_ORIGINS` in `chat.js`. Note that `*.netlify.app` matches any Netlify site, and non-browser clients can fake the header - this stops casual embedding, it is not authentication.
- **Validation:** `message` must be a non-empty string of at most 1000 characters. `history` keeps the last 10 items, only `user`/`assistant` roles (anything else, e.g. `system`, is dropped), each truncated to 1000 characters. Body over 32 KB is rejected.
- **Output:** `max_tokens` is capped at 500.
- **Rate limit:** 20 requests per 10 minutes per IP (`x-nf-client-connection-ip`), then 429 with `Retry-After`. It is kept in memory **per function instance**, so it is best-effort only: it resets on cold starts and is not shared between instances. Set a spend limit on the Groq account as the real backstop.
- **Errors:** callers only see generic messages. Upstream (Groq) details are written to the function log.

## Local testing

```bash
npm install -g netlify-cli
echo "GROQ_API_KEY=gsk_..." > .env     # do not commit this file
netlify dev                            # http://localhost:8888
```

## Troubleshooting

| Symptom | Check |
| --- | --- |
| Chat says it cannot connect / 404 | `netlify/functions/chat.js` deployed? See the deploy log. |
| 403 "Origin not allowed" | Site is served from a domain not in `ALLOWED_ORIGINS`. |
| 429 | Rate limit hit - wait 10 minutes. |
| 500 / 502 "assistant is unavailable" | `GROQ_API_KEY` missing or invalid, or Groq is down/over quota. See the function log. |
