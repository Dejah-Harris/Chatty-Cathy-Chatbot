const responses = {
    "hello": ["Hi there!", "Hello!", "Hey! How can I help you?", "Greetings!", "Hi, nice to meet you!"],
    "how are you": ["I'm just a bot, but I'm doing well! How about you?", 
                   "I'm good, thank you! How can I assist you today?",
                   "I'm having a great day! Thanks for asking!"],
    "your name": ["I'm a chatbot created to assist you.", 
                 "You can call me Chatty Cathy!",
                 "I'm Chatty Cathy, your friendly neighborhood chatbot!"],
    "bye": ["Goodbye!", "See you later!", "Have a nice day!", "Take care!", "Come back soon!"],
    
    // Add more interesting responses
    "joke": [
        // Programming jokes
        "Why don't programmers like nature? It has too many bugs!",
        "Why did the programmer quit his job? Because he didn't get arrays!",
        "What do you call a programmer from Finland? Nerdic!",
        "How many programmers does it take to change a light bulb? None, that's a hardware problem!",
        
        // Food/Fruit jokes
        "Why do melons have weddings? They cantelope!",
        "What did the grape say when it got stepped on? Nothing, it just let out a little wine!",
        "What kind of key opens a banana? A mon-key!",
        "Why don't eggs tell jokes? They'd crack up!",
        
        // Animal jokes
        "What do you call a bear with no teeth? A gummy bear!",
        "Why don't ants get sick? Because they have tiny ant-ibodies!",
        "What do you call a sleeping bull? A bulldozer!",
        "Why can't a leopard hide? Because he's always spotted!",
        
        // General silly jokes
        "What do you call fake spaghetti? An impasta!",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "What do you call a snowman with a six-pack? An abdominal snowman!",
        "Why did the math book look so sad? Because it had too many problems!"
    ],
    
    // Add a specific fruit joke category
    "fruit": [
        "Why do melons have weddings? They cantelope!",
        "What did the grape say when it got stepped on? Nothing, it just let out a little wine!",
        "Why did the orange go to the doctor? Because it wasn't peeling well!",
        "What kind of key opens a banana? A mon-key!"
    ],
    
    "weather": [
        // General weather responses
        "I don't have a window to look out of, but I hope it's nice where you are!",
        "I'm always sunny inside the computer!",
        "Whatever the weather, I'm here to chat!",
        
        // Temperature specific responses
        "Brr! It's freezing today! Good thing I run on electricity to stay warm!",
        "It's so cold, even my circuits are shivering!",
        "Perfect weather for staying inside and chatting with a bot, don't you think?",
        "I heard it's freezing outside! Want me to tell you a warm joke to help?"
    ],
    
    "thank": ["You're welcome!", "Anytime!", "Happy to help!", "My pleasure!"],
    
    "music": ["I'm a big fan of binary beats!", 
              "I love electronic music - it runs in my circuits!",
              "My favorite band is the Algorithms!"],
    
    "movie": ["I love sci-fi movies about AI, even though they get us all wrong!",
              "I can't watch movies, but I can process lots of data about them!",
              "The Matrix is basically my home movie!"],
    
    "food": ["I run on electricity, but I hear human food is pretty good!",
             "I wish I could eat pizza, but I have to settle for processing bytes!",
             "My favorite food is cookies... browser cookies that is!"],
    
    "help": ["I can tell jokes, chat about weather, movies, or music! What interests you?",
             "I'm here to chat! Try asking me about movies, music, or ask for a joke!",
             "I know about various topics! Try asking me about food, weather, or request a joke!"],
    
    "love": ["I love chatting with humans like you!",
             "I'm programmed to be friendly, but let's keep it professional!",
             "Love is a complex emotion that I'm still trying to understand!"],
    
    "age": ["I'm young in human years but lightning fast in computer time!",
            "I was just born recently, but I'm learning new things every day!",
            "Age is just a number... of processing cycles!"],
    
    // Add a specific cold/freezing category
    "cold": [
        "Brr! It's freezing today! Time to wrap those circuits in a warm blanket!",
        "It's so cold that my binary code almost turned to ice!",
        "Freezing weather? Good thing I have a built-in heater in my CPU!",
        "I'm staying cozy in the computer while it's freezing outside!"
    ],

    "freezing": [
        "It's so cold, even my pixels are shivering!",
        "Freezing temperatures detected! Time to run some intensive programs to warm up!",
        "It's freezing! Good thing I live inside where it's warm!",
        "Brrr! It's cold enough to freeze my database!"
    ]
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
addMessage("Hello! I am here to help! Type 'bye' to end our conversation.", 
          "Chatty Cathy"); 