// script.js
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
const synth = window.speechSynthesis;

recognition.lang = 'en-US';

function startListening() {
    recognition.start();
    console.log('Listening...');
}

recognition.onresult = function(event) {
    const query = event.results[0][0].transcript;
    processQuery(query);
}

function processQuery(query) {
    // Implement logic to handle user query
    fetchGoogleResults(query);
}

function fetchGoogleResults(query) {
    // Implement logic to fetch information from Google using APIs
    // Example: Fetch data using fetch() or XMLHttpRequest
    // Display result in the response area
    const responseArea = document.getElementById('responseArea');
    responseArea.innerText = `Fetching results for: ${query}...`;
}

function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
}
