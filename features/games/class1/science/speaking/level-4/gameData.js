window.GAME_DATA = {
  "grade": "class1",
  "subject": "science",
  "skill": "speaking",
  "level": 4,
  "topic": "Weather Speaking",
  "teach": "Listen carefully, then speak the answer clearly into the microphone.",
  "examples": [
    "Sunny",
    "Rainy",
    "Windy"
  ],
  "questions": [
    {
      "type": "speech",
      "prompt": "Say the weather type: Sunny",
      "answer": "Sunny",
      "expected": "Sunny",
      "options": [],
      "audioText": "Say the weather type: Sunny",
      "evaluation": "pronunciation",
      "micMode": "word"
    },
    {
      "type": "speech",
      "prompt": "Say the weather type: Rainy",
      "answer": "Rainy",
      "expected": "Rainy",
      "options": [],
      "audioText": "Say the weather type: Rainy",
      "evaluation": "pronunciation",
      "micMode": "word"
    },
    {
      "type": "speech",
      "prompt": "Say the weather type: Windy",
      "answer": "Windy",
      "expected": "Windy",
      "options": [],
      "audioText": "Say the weather type: Windy",
      "evaluation": "pronunciation",
      "micMode": "word"
    }
  ],
  "lang": "en-PK",
  "rtl": false,
  "mode": "speaking",
  "gameplayStyle": {
    "microphoneAutoActivates": true,
    "rapidAnswer": false,
    "semanticEvaluation": true,
    "grammarSupport": true,
    "clearStartStopMicState": true,
    "feedbackSounds": [
      "right.mp3",
      "wrong.mp3",
      "level-complete.mp3"
    ]
  }
};
