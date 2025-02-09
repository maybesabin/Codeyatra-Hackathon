import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
dotenv.config();

const openai = new OpenAIApi(
    new Configuration({ apiKey: import.meta.env.VITE_OPEN_AI_KEY })
);

async function askQuestion(question) {
    const response = await openai.createChatCompletion({
        model: "gpt-4",
        messages: [{ role: "user", content: question }],
    });

    console.log(response.data.choices[0].message.content);
}

askQuestion("What is React?");
