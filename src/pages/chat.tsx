import { useState } from 'react';
import axios from 'axios';

const ClaudeRequest = () => {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        if (!prompt) return;

        setLoading(true);

        try {
            const res = await axios.post(
                'https://api.anthropic.com/v1/complete',
                {
                    prompt,
                    model: 'claude-1',
                    max_tokens: 100,
                    temperature: 0.7,
                },
                {
                    headers: {
                        'Authorization': `Bearer ${import.meta.env.VITE_CLAUDE_API_KEY}`,
                        'Content-Type': 'application/json',
                    },
                }
            );

            setResponse(res.data.completion); // Adjust according to Claude's response format
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Enter your prompt here"
            />
            <button onClick={handleSubmit} disabled={loading}>
                {loading ? 'Loading...' : 'Submit'}
            </button>
            <div>
                <h3>Response:</h3>
                <p>{response}</p>
            </div>
        </div>
    );
};

export default ClaudeRequest;
