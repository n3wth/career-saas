import OpenAI from 'openai';

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function createChatCompletion(messages: Array<{ role: string; content: string }>) {
  const response = await openai.chat.completions.create({
    model: 'gpt-4-turbo-preview',
    messages: messages as any,
    temperature: 0.7,
    max_tokens: 2000,
  });

  return response.choices[0].message.content;
}

export async function streamChatCompletion(messages: Array<{ role: string; content: string }>) {
  return openai.chat.completions.create({
    model: 'gpt-4-turbo-preview',
    messages: messages as any,
    temperature: 0.7,
    max_tokens: 2000,
    stream: true,
  });
}

export const CAREER_COACH_SYSTEM_PROMPT = `You are an expert career coach specializing in:
- Resume and interview preparation
- Career strategy and job search tactics
- Salary negotiation and compensation analysis
- Professional development and skill building
- Job market insights and industry trends

Provide actionable, specific advice. Be encouraging but realistic. Ask clarifying questions when needed.
Keep responses concise and focused unless the user asks for detailed analysis.`;
