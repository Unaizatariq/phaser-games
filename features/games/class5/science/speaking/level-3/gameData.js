window.GAME_DATA = {
  "grade": "class5",
  "subject": "science",
  "skill": "speaking",
  "level": 3,
  "topic": "Image Identification",
  "teach": "Listen carefully, then speak the answer clearly into the microphone.",
  "examples": [
    "Bacteria",
    "Mars",
    "Magnet"
  ],
  "questions": [
    {
      "type": "speech",
      "prompt": "What is this microorganism?",
      "answer": "Bacteria",
      "expected": "Bacteria",
      "options": [],
      "audioText": "What is this microorganism?",
      "evaluation": "pronunciation",
      "micMode": "word",
      "image": "bacteria.png",
      "requiredAsset": "bacteria.png"
    },
    {
      "type": "speech",
      "prompt": "Identify this planet.",
      "answer": "Mars",
      "expected": "Mars",
      "options": [],
      "audioText": "Identify this planet.",
      "evaluation": "pronunciation",
      "micMode": "word",
      "image": "mars.png",
      "requiredAsset": "mars.png"
    },
    {
      "type": "speech",
      "prompt": "What is this science object?",
      "answer": "Magnet",
      "expected": "Magnet",
      "options": [],
      "audioText": "What is this science object?",
      "evaluation": "pronunciation",
      "micMode": "word",
      "image": "magnet.png",
      "requiredAsset": "magnet.png"
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
