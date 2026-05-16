window.GAME_DATA = {
  "grade": "class3",
  "subject": "science",
  "skill": "speaking",
  "level": 3,
  "topic": "Image Identification",
  "teach": "Listen carefully, then speak the answer clearly into the microphone.",
  "examples": [
    "Solid",
    "Lion",
    "Sun"
  ],
  "questions": [
    {
      "type": "speech",
      "prompt": "What state of matter is this?",
      "answer": "Solid",
      "expected": "Solid",
      "options": [],
      "audioText": "What state of matter is this?",
      "evaluation": "pronunciation",
      "micMode": "word",
      "image": "ice.png",
      "requiredAsset": "ice.png"
    },
    {
      "type": "speech",
      "prompt": "Identify the animal.",
      "answer": "Lion",
      "expected": "Lion",
      "options": [],
      "audioText": "Identify the animal.",
      "evaluation": "pronunciation",
      "micMode": "word",
      "image": "lion.png",
      "requiredAsset": "lion.png"
    },
    {
      "type": "speech",
      "prompt": "What is this source of light?",
      "answer": "Sun",
      "expected": "Sun",
      "options": [],
      "audioText": "What is this source of light?",
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
