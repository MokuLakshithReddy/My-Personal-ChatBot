document.addEventListener('DOMContentLoaded', function() {
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const chatMessages = document.getElementById('chat-messages');
    const apiKey = ''; // Replace with your actual API key

    function addMessage(content, type) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', type + '-message');
        const p = document.createElement('p');
        p.textContent = content;
        messageDiv.appendChild(p);
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    async function getResponse(userMessage) {
        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    model: 'gpt-4o-mini',
                    messages: [{ role: 'user', content: userMessage }],
                    max_tokens: 150
                })
            });
            const data = await response.json();
            console.log('API Response:', data); // For debugging
            if (response.ok && data.choices && data.choices[0]) {
                return data.choices[0].message.content.trim();
            } else {
                console.error('API Error:', data.error || 'No choices in response');
                return "Sorry, I couldn't generate a response. Please check your API key or try again later.";
            }
        } catch (error) {
            console.error('Fetch Error:', error);
            return "Sorry, there was an error connecting to the AI service. Check your internet connection.";
        }
    }

    async function sendMessage() {
        const message = messageInput.value.trim();
        if (message) {
            addMessage(message, 'user');
            messageInput.value = '';
            addMessage('Thinking...', 'bot');
            const response = await getResponse(message);
            // Remove the "Thinking..." message and add the real response
            const lastMessage = chatMessages.lastElementChild;
            if (lastMessage && lastMessage.textContent === 'Thinking...') {
                chatMessages.removeChild(lastMessage);
            }
            addMessage(response, 'bot');
        }
    }

    sendButton.addEventListener('click', sendMessage);
    messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
});
