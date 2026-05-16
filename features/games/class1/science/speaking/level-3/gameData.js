window.GAME_DATA = {
  "grade": "class1",
  "subject": "science",
  "skill": "speaking",
  "level": 3,
  "topic": "Image Identification",
  "teach": "Listen carefully, then speak the answer clearly into the microphone.",
  "examples": [
    "Eyes",
    "Dog",
    "Flower"
  ],
  "questions": [
    {
      "type": "speech",
      "prompt": "What is this body part?",
      "answer": "Eyes",
      "expected": "Eyes",
      "options": [],
      "audioText": "What is this body part?",
      "evaluation": "pronunciation",
      "micMode": "word",
      "image": "eyes.png",
      "requiredAsset": "eyes.png"
    },
    {
      "type": "speech",
      "prompt": "What animal is this?",
      "answer": "Dog",
      "expected": "Dog",
      "options": [],
      "audioText": "What animal is this?",
      "evaluation": "pronunciation",
      "micMode": "word",
      "image": "dog.png",
      "requiredAsset": "dog.png"
    },
    {
      "type": "speech",
      "prompt": "What plant is this?",
      "answer": "Flower",
      "expected": "Flower",
      "options": [],
      "audioText": "What plant is this?",
      "evaluation": "pronunciation",
      "micMode": "word",
      "image": "flower.png",
      "requiredAsset": "flower.png"
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
