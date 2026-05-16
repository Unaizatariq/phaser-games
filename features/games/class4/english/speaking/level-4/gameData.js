window.GAME_DATA = {
  "grade": "class4",
  "subject": "english",
  "skill": "speaking",
  "level": 4,
  "topic": "Describe the Image",
  "teach": "Listen carefully, then speak the answer clearly into the microphone.",
  "examples": [
    "Children are playing in the park.",
    "Students are studying in the classroom.",
    "People are shopping in the market."
  ],
  "questions": [
    {
      "type": "speech",
      "prompt": "Describe what you see.",
      "answer": "Children are playing in the park.",
      "expected": "Children are playing in the park.",
      "options": [],
      "audioText": "Describe what you see.",
      "evaluation": "semantic",
      "micMode": "extended",
      "image": "park.png",
      "requiredAsset": "park.png"
    },
    {
      "type": "speech",
      "prompt": "Describe what you see.",
      "answer": "Students are studying in the classroom.",
      "expected": "Students are studying in the classroom.",
      "options": [],
      "audioText": "Describe what you see.",
      "evaluation": "semantic",
      "micMode": "extended",
      "image": "classroom.png",
      "requiredAsset": "classroom.png"
    },
    {
      "type": "speech",
      "prompt": "Describe what you see.",
      "answer": "People are shopping in the market.",
      "expected": "People are shopping in the market.",
      "options": [],
      "audioText": "Describe what you see.",
      "evaluation": "semantic",
      "micMode": "extended",
      "image": "market.png",
      "requiredAsset": "market.png"
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
