const responses = {
    "hello": ["Hi there!", "Hello!", "Hey! How can I help you?"],
    "how are you": ["I'm just a bot, but I'm doing well! How about you?", 
                   "I'm good, thank you! How can I assist you today?"],
    "your name": ["I'm a chatbot created to assist you.", 
                 "You can call me Chatty Cathy!"],
    "bye": ["Goodbye!", "See you later!", "Have a nice day!"],
};

function getRandomResponse(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function getResponse(userInput) {
    userInput = userInput.toLowerCase();
    for (const [pattern, respList] of Object.entries(responses)) {
        if (userInput.includes(pattern)) {
            return getRandomResponse(respList);
        }
    }
    return "I'm sorry, I don't understand that. Can you rephrase?";
}

function addMessage(message, sender) {
    const chatMessages = document.querySelector("#chat-messages");
    const newMessage = document.createElement('div');
    newMessage.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatMessages.appendChild(newMessage);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function sendMessage() {
    const inputElement = document.querySelector("#user-input");
    const userMessage = inputElement.value;
    
    if (!userMessage.trim()) {
        return;
    }
    
    // Display user message
    addMessage(userMessage, "You");
    
    // Get and display bot response
    const response = getResponse(userMessage);
    addMessage(response, "Chatty Cathy");
    
    // Clear input
    inputElement.value = "";
}

function handleKeypress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

// Set up event listeners
document.querySelector("#user-input").addEventListener("keypress", handleKeypress);
document.querySelector("#send-button").addEventListener("click", sendMessage);

// Initial greeting
addMessage("Hello! I am here to help! You can type 'bye' at any point to end our convo.", 
          "Chatty Cathy") 