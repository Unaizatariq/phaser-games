window.GAME_DATA = {
  "grade": "nursery",
  "subject": "english",
  "skill": "speaking",
  "level": 5,
  "topic": "Speak After Seeing Image",
  "teach": "Listen carefully, then speak the answer clearly into the microphone.",
  "examples": [
    "Mango",
    "Ball",
    "Dog"
  ],
  "questions": [
    {
      "type": "speech",
      "prompt": "Speak the fruit name.",
      "answer": "Mango",
      "expected": "Mango",
      "options": [],
      "audioText": "Speak the fruit name.",
      "evaluation": "pronunciation",
      "micMode": "word",
      "image": "mango.png",
      "requiredAsset": "mango.png"
    },
    {
      "type": "speech",
      "prompt": "Speak the object name.",
      "answer": "Ball",
      "expected": "Ball",
      "options": [],
      "audioText": "Speak the object name.",
      "evaluation": "pronunciation",
      "micMode": "word",
      "image": "ball.png",
      "requiredAsset": "ball.png"
    },
    {
      "type": "speech",
      "prompt": "Speak the animal name.",
      "answer": "Dog",
      "expected": "Dog",
      "options": [],
      "audioText": "Speak the animal name.",
      "evaluation": "pronunciation",
      "micMode": "word",
      "image": "dog.png",
      "requiredAsset": "dog.png"
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
