# Netlify Serverless Function Setup Guide

This guide explains how to securely connect your AI Chatbot to OpenAI or Anthropic API using Netlify Serverless Functions.

## 📁 File Structure

```
amer-aizam-portfolio/
├── index.html                    # Your main website
├── netlify/
│   └── functions/
│       └── chat.js              # Secure serverless function
└── NETLIFY_SETUP.md             # This file
```

## 🔧 Step-by-Step Setup

### Step 1: Ensure File Structure is Correct

Make sure `netlify/functions/chat.js` exists in your repository. The folder structure should be:
```
netlify/functions/chat.js
```

### Step 2: Set Environment Variables in Netlify

1. Go to [Netlify Dashboard](https://app.netlify.com/)
2. Select your site: `i-setel-solutions`
3. Go to **Site Settings** (tab at the top)
4. In the left sidebar, click **Environment Variables**
5. Click **Add Variable** and add these:

#### For OpenAI (ChatGPT):
```
Key: AI_PROVIDER
Value: openai

Key: AI_API_KEY
Value: sk-your-openai-api-key-here

Key: AI_MODEL (optional)
Value: gpt-3.5-turbo
# Or use gpt-4 for better responses (more expensive)
```

#### For Anthropic (Claude):
```
Key: AI_PROVIDER
Value: anthropic

Key: AI_API_KEY
Value: sk-ant-your-anthropic-api-key-here

Key: AI_MODEL (optional)
Value: claude-3-haiku-20240307
# Or claude-3-sonnet-20240229 for better responses
```

### Step 3: Update index.html to Use Real API

In your `index.html`, find this line in the ChatbotWidget config:

```javascript
// Set to false to use real API, true for demo mode with mock responses
useMockMode: true,
```

Change it to:
```javascript
useMockMode: false,
```

### Step 4: Deploy to Netlify

1. Push your changes to GitHub/GitLab
2. Netlify will auto-deploy (if using Git integration)
3. Or manually deploy via drag-and-drop in Netlify Dashboard

### Step 5: Test the Chatbot

1. Visit your live site
2. Open the chat widget
3. Send a message
4. Check browser console (F12 → Console) for any errors

---

## 🧪 Testing Locally (Optional)

To test the serverless function locally before deploying:

### 1. Install Netlify CLI
```bash
npm install -g netlify-cli
```

### 2. Create `.env` file in project root
```
AI_PROVIDER=openai
AI_API_KEY=your-api-key-here
AI_MODEL=gpt-3.5-turbo
```

### 3. Run locally
```bash
netlify dev
```

This will start a local server at `http://localhost:8888` with your functions working.

---

## 🔒 Security Notes

- ✅ API keys are NEVER exposed in the browser
- ✅ All API calls go through Netlify's secure servers
- ✅ CORS is properly configured
- ✅ Rate limiting is handled by the API provider

---

## 🐛 Troubleshooting

### "Function not found" error
- Ensure `netlify/functions/chat.js` exists
- Check that the file deployed (check Deploy log in Netlify)

### "AI service error" in chat
- Check that environment variables are set correctly
- Verify API key is valid and has credits
- Check function logs: Netlify Dashboard → Functions → chat → Logs

### CORS errors
- The function already includes CORS headers
- If issues persist, check your browser's ad-blockers

### Chatbot not responding
- Open browser console (F12) and check for errors
- Ensure `useMockMode: false` is set
- Check Network tab to see if API calls are being made

---

## 📊 Monitoring

View function logs:
1. Netlify Dashboard → Functions
2. Click on `chat` function
3. View invocation logs

---

## 💡 Tips

1. **Start with OpenAI GPT-3.5-Turbo** - Cheaper and faster for testing
2. **Set up usage limits** on your OpenAI/Anthropic account to avoid unexpected charges
3. **Monitor function usage** in Netlify dashboard (free tier: 125k requests/month)
4. **Customize the system prompt** in `chat.js` to change the AI personality

---

## 🆘 Getting API Keys

### OpenAI:
1. Go to https://platform.openai.com/
2. Sign up/login
3. Go to API Keys → Create new secret key
4. Add billing information (required even for free tier)

### Anthropic:
1. Go to https://console.anthropic.com/
2. Sign up/login
3. Go to API Keys → Create Key
4. Add billing information

---

**Done!** Your chatbot is now securely connected to real AI. 🚀
