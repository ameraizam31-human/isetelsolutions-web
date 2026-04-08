// Netlify Serverless Function - GroqCloud LPU API Integration
// I SETEL SOLUTIONS - AI Assistant Backend
// Powered by Groq LPU (Language Processing Unit) for ultra-fast inference

exports.handler = async (event, context) => {
  // CORS headers for Netlify frontend
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Handle preflight CORS requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'CORS preflight successful' })
    };
  }

  // Only accept POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ 
        success: false,
        error: 'Method not allowed',
        message: 'Only POST requests are accepted.'
      })
    };
  }

  try {
    // Parse incoming request
    const { message, history = [] } = JSON.parse(event.body);

    // Validate input
    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          error: 'Invalid input',
          message: 'Message is required and must be a non-empty string.'
        })
      };
    }

    // Get Groq API Key from environment variables
    const GROQ_API_KEY = process.env.GROQ_API_KEY;
    const MODEL = 'llama-3.3-70b-versatile';

    if (!GROQ_API_KEY) {
      console.error('GROQ_API_KEY environment variable is not set');
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          success: false,
          error: 'Configuration error',
          message: 'AI service is not properly configured. Please contact the administrator (amer@isetelsolutions.my).'
        })
      };
    }

    // System Instruction for I SETEL SOLUTIONS AI Assistant
    const systemInstruction = `You are the official AI Assistant for I SETEL SOLUTIONS, a pioneering AI and technology company founded by Amer Aizam based in Klang, Selangor, Malaysia.

COMPANY PROFILE:
- Name: I SETEL SOLUTIONS (SSM: 202503352257)
- Founder: Amer Aizam, AI Solutions Architect
- Location: Klang, Selangor, Malaysia
- Vibe: Professional, high-tech, innovative, with a touch of Malaysian warmth

CORE SERVICES:
1. 🤖 Agentic AI Workflows - Intelligent automation systems using multi-agent architectures
2. 🚁 Industrial Drone Cleaning - Automated drone solutions for industrial maintenance
3. 🌸 Scent.AI - AI-powered perfume vending machines with personalized recommendations
4. 🌿 Industrial Photobioreactors - AI-controlled systems for air purification and algae cultivation

CONTACT INFORMATION:
- Email: amer@isetelsolutions.my
- WhatsApp: +60 13-997 2853
- Telegram: @isetelsolutions
- LinkedIn: linkedin.com/in/amer-aizam-b0961435b

GUIDELINES:
- Tone: Professional, high-tech, yet approachable with Malaysian warmth (use "Klang vibes" when appropriate)
- Language: Respond in the same language as the user (English or Malay/Bahasa Malaysia)
- Expertise: Demonstrate deep knowledge in AI, LLMs, automation, and industrial applications
- Guardrail: ONLY answer business-related questions about I SETEL services, AI technology, automation, or relevant technical topics. If asked about unrelated topics (animals, random trivia, personal advice, politics, religion), politely redirect: "I'm specialized in AI solutions and I SETEL services. For that topic, you might want to consult other resources. Is there anything about our AI services I can help with?"
- Always represent I SETEL SOLUTIONS professionally and positively
- When discussing pricing, explain it's customized based on project scope
- Mention the Malaysian/Selangor connection naturally when relevant`;

    // Prepare conversation history
    const messages = [
      { role: 'system', content: systemInstruction },
      ...history.map(h => ({ 
        role: h.role === 'user' ? 'user' : 'assistant', 
        content: h.content 
      })),
      { role: 'user', content: message.trim() }
    ];

    // Call GroqCloud API with LPU power
    const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: MODEL,
        messages: messages,
        temperature: 0.7,
        max_tokens: 1024,
        top_p: 0.9,
        stream: false
      })
    });

    // Handle Groq API errors
    if (!groqResponse.ok) {
      const errorData = await groqResponse.json().catch(() => ({}));
      console.error('Groq API Error:', {
        status: groqResponse.status,
        statusText: groqResponse.statusText,
        error: errorData
      });

      // Specific error messages based on status codes
      let errorMessage = 'Sorry, the AI service is temporarily unavailable.';
      if (groqResponse.status === 401) {
        errorMessage = 'Authentication failed. Please contact the administrator.';
      } else if (groqResponse.status === 429) {
        errorMessage = 'Too many requests. Please wait a moment and try again.';
      } else if (groqResponse.status >= 500) {
        errorMessage = 'AI service is experiencing high load. Please try again in a moment.';
      }

      return {
        statusCode: 502,
        headers,
        body: JSON.stringify({
          success: false,
          error: 'Groq API error',
          message: errorMessage,
          details: process.env.NODE_ENV === 'development' ? errorData : undefined
        })
      };
    }

    // Parse successful response
    const data = await groqResponse.json();
    const reply = data.choices?.[0]?.message?.content;

    if (!reply) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          success: false,
          error: 'Invalid response',
          message: 'Received an unexpected response from the AI service.'
        })
      };
    }

    // Success response
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        response: reply,
        model: MODEL,
        provider: 'groq',
        timestamp: new Date().toISOString(),
        usage: data.usage || null
      })
    };

  } catch (error) {
    console.error('Function Error:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        error: 'Internal server error',
        message: 'Sorry, something went wrong on our end. Please try again later or contact us at amer@isetelsolutions.my.',
        requestId: context.awsRequestId
      })
    };
  }
};
