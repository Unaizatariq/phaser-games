window.GAME_DATA = {
  "grade": "class5",
  "subject": "science",
  "skill": "speaking",
  "level": 5,
  "topic": "Science Story Speaking",
  "teach": "Listen carefully, then speak the answer clearly into the microphone.",
  "examples": [
    "Satellites help communication and weather forecasting.",
    "Technology helps people work faster."
  ],
  "questions": [
    {
      "type": "speech",
      "prompt": "Explain the importance of satellites.",
      "answer": "Satellites help communication and weather forecasting.",
      "expected": "Satellites help communication and weather forecasting.",
      "options": [],
      "audioText": "Explain the importance of satellites.",
      "evaluation": "semantic",
      "micMode": "extended"
    },
    {
      "type": "speech",
      "prompt": "Speak about technology in daily life.",
      "answer": "Technology helps people work faster.",
      "expected": "Technology helps people work faster.",
      "options": [],
      "audioText": "Speak about technology in daily life.",
      "evaluation": "semantic",
      "micMode": "extended"
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
