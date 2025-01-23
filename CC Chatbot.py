import random
import arrr
from pyscript import document

# Responses
responses = {
    "hello": ["Hi there!", "Hello!", "Hey! How can I help you?"],
    "how are you": ["I'm just a bot, but I'm doing well! How about you?", 
                   "I'm good, thank you! How can I assist you today?"],
    "your name": ["I'm a chatbot created to assist you.", 
                 "You can call me Chatty Cathy!"],
    "bye": ["Goodbye!", "See you later!", "Have a nice day!"],
}

def get_response(user_input):
    user_input = user_input.lower()  # Normalize input to lowercase
    for pattern, resp_list in responses.items():
        if pattern in user_input:  # Match user input with a pattern
            return random.choice(resp_list)
    return "I'm sorry, I don't understand that. Can you rephrase?"

def add_message(message, sender):
    chat_messages = document.querySelector("#chat-messages")
    new_message = f"<div><strong>{sender}:</strong> {message}</div>"
    chat_messages.innerHTML += new_message

def send_message(*args, **kwargs):
    input_element = document.querySelector("#user-input")
    user_message = input_element.value
    
    if not user_message.strip():
        return
    
    # Display user message
    add_message(user_message, "You")
    
    # Get and display bot response
    response = get_response(user_message)
    add_message(response, "Chatty Cathy")
    
    # Clear input
    input_element.value = ""

def handle_keypress(event):
    if event.key == "Enter":
        send_message()

# Set up event listener for Enter key when the page loads
def setup():
    input_element = document.querySelector("#user-input")
    input_element.addEventListener("keypress", handle_keypress)
    # Initial greeting
    add_message("Hello! I am here to help! Type 'bye' to end our conversation.", 
               "Chatty Cathy")

# Call setup when the page loads
setup()
