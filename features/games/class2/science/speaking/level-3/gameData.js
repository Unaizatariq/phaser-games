window.GAME_DATA = {
  "grade": "class2",
  "subject": "science",
  "skill": "speaking",
  "level": 3,
  "topic": "Image Identification",
  "teach": "Listen carefully, then speak the answer clearly into the microphone.",
  "examples": [
    "Tree",
    "Leaf",
    "Wood"
  ],
  "questions": [
    {
      "type": "speech",
      "prompt": "What is this?",
      "answer": "Tree",
      "expected": "Tree",
      "options": [],
      "audioText": "What is this?",
      "evaluation": "pronunciation",
      "micMode": "word",
      "image": "tree.png",
      "requiredAsset": "tree.png"
    },
    {
      "type": "speech",
      "prompt": "Identify this plant part.",
      "answer": "Leaf",
      "expected": "Leaf",
      "options": [],
      "audioText": "Identify this plant part.",
      "evaluation": "pronunciation",
      "micMode": "word",
      "image": "leaf.png",
      "requiredAsset": "leaf.png"
    },
    {
      "type": "speech",
      "prompt": "What material is this?",
      "answer": "Wood",
      "expected": "Wood",
      "options": [],
      "audioText": "What material is this?",
      "evaluation": "pronunciation",
      "micMode": "word",
      "image": "wood.png",
      "requiredAsset": "wood.png"
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
