window.GAME_DATA = {
  "grade": "class4",
  "subject": "science",
  "skill": "speaking",
  "level": 3,
  "topic": "Image Identification",
  "teach": "Listen carefully, then speak the answer clearly into the microphone.",
  "examples": [
    "Earth",
    "Heart",
    "Sun"
  ],
  "questions": [
    {
      "type": "speech",
      "prompt": "Identify this planet.",
      "answer": "Earth",
      "expected": "Earth",
      "options": [],
      "audioText": "Identify this planet.",
      "evaluation": "pronunciation",
      "micMode": "word",
      "image": "earth.png",
      "requiredAsset": "earth.png"
    },
    {
      "type": "speech",
      "prompt": "What organ is this?",
      "answer": "Heart",
      "expected": "Heart",
      "options": [],
      "audioText": "What organ is this?",
      "evaluation": "pronunciation",
      "micMode": "word",
      "image": "heart.png",
      "requiredAsset": "heart.png"
    },
    {
      "type": "speech",
      "prompt": "What energy source is this?",
      "answer": "Sun",
      "expected": "Sun",
      "options": [],
      "audioText": "What energy source is this?",
      "evaluation": "pronunciation",
      "micMode": "word",
      "image": "sun.png",
      "requiredAsset": "sun.png"
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
