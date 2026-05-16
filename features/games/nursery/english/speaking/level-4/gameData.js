window.GAME_DATA = {
  "grade": "nursery",
  "subject": "english",
  "skill": "speaking",
  "level": 4,
  "topic": "Image Identification",
  "teach": "Listen carefully, then speak the answer clearly into the microphone.",
  "examples": [
    "Apple",
    "Banana",
    "Cat"
  ],
  "questions": [
    {
      "type": "speech",
      "prompt": "What is this?",
      "answer": "Apple",
      "expected": "Apple",
      "options": [],
      "audioText": "What is this?",
      "evaluation": "pronunciation",
      "micMode": "word",
      "image": "apple.png",
      "requiredAsset": "apple.png"
    },
    {
      "type": "speech",
      "prompt": "What is this?",
      "answer": "Banana",
      "expected": "Banana",
      "options": [],
      "audioText": "What is this?",
      "evaluation": "pronunciation",
      "micMode": "word",
      "image": "banana.png",
      "requiredAsset": "banana.png"
    },
    {
      "type": "speech",
      "prompt": "What is this?",
      "answer": "Cat",
      "expected": "Cat",
      "options": [],
      "audioText": "What is this?",
      "evaluation": "pronunciation",
      "micMode": "word",
      "image": "cat.png",
      "requiredAsset": "cat.png"
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
