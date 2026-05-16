window.GAME_DATA = {
  "grade": "kg",
  "subject": "english",
  "skill": "speaking",
  "level": 3,
  "topic": "Image Identification",
  "teach": "Listen carefully, then speak the answer clearly into the microphone.",
  "examples": [
    "Clock",
    "Horse",
    "School"
  ],
  "questions": [
    {
      "type": "speech",
      "prompt": "What is this?",
      "answer": "Clock",
      "expected": "Clock",
      "options": [],
      "audioText": "What is this?",
      "evaluation": "pronunciation",
      "micMode": "word",
      "image": "clock.png",
      "requiredAsset": "clock.png"
    },
    {
      "type": "speech",
      "prompt": "What animal is this?",
      "answer": "Horse",
      "expected": "Horse",
      "options": [],
      "audioText": "What animal is this?",
      "evaluation": "pronunciation",
      "micMode": "word",
      "image": "horse.png",
      "requiredAsset": "horse.png"
    },
    {
      "type": "speech",
      "prompt": "What place is this?",
      "answer": "School",
      "expected": "School",
      "options": [],
      "audioText": "What place is this?",
      "evaluation": "pronunciation",
      "micMode": "word",
      "image": "school.png",
      "requiredAsset": "school.png"
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
