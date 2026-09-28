export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const prompt = url.searchParams.get("prompt");

    if (!prompt) {
      return new Response("Please provide a 'prompt' query parameter. Example: /?prompt=Hello%20LLM", { status: 400 });
    }

    // Define the LLM model to use. This is one of the 24+ models mentioned in the article.
    // @cf/meta/llama-2-7b-chat-int8 is a good general-purpose model available on Workers AI.
    const model = "@cf/meta/llama-2-7b-chat-int8";

    try {
      // Use the Workers AI binding to run the LLM.
      // The 'env.AI' object is automatically provided by Cloudflare Workers AI when configured.
      const response = await env.AI.run(
        model,
        {
          messages: [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: prompt }
          ]
        }
      );

      // Extract the generated text from the LLM response.
      const llmOutput = response.response;

      // Return the LLM's response as JSON.
      return new Response(JSON.stringify({ prompt: prompt, response: llmOutput }), {
        headers: { "Content-Type": "application/json" }
      });

    } catch (error) {
      console.error("Workers AI error:", error);
      return new Response(`Error interacting with Workers AI: ${error.message}`, { status: 500 });
    }
  },
};
