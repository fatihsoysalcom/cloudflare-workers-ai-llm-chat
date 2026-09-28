# Cloudflare Workers AI LLM Chat

This example demonstrates how to use Cloudflare Workers AI to interact with a Large Language Model (LLM) from its free tier. It deploys a serverless function that takes a user prompt via a GET query parameter and returns a generated response from an LLM like Llama 2, leveraging Cloudflare's global edge network.

## Language

`javascript`

## How to Run

1. Create a new Cloudflare Worker project (e.g., `npx wrangler generate my-worker`).
2. Replace the content of `src/index.js` with the provided code.
3. In your `wrangler.toml` file, add an AI binding: `ai = { binding = "AI" }`.
4. Deploy the Worker using `npx wrangler deploy`. Then, make a GET request to your Worker's URL with a `?prompt=Your%20question%20here` query parameter.

## Original Article

This example accompanies the Turkish article: [Cloudflare Workers AI Ücretsiz Katmanını İnceledim: Bugün Kullanabileceğiniz 24 Güçlü LLM](https://fatihsoysal.com/blog/cloudflare-workers-ai-ucretsiz-katmanini-inceledim-bugun-kullanabileceginiz-24-guclu-llm/).

## License

MIT — see [LICENSE](LICENSE).
