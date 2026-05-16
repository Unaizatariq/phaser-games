window.GAME_DATA = {
  "grade": "class2",
  "subject": "science",
  "skill": "speaking",
  "level": 4,
  "topic": "Sentence Speaking",
  "teach": "Listen carefully, then speak the answer clearly into the microphone.",
  "examples": [
    "Water is important for life.",
    "Plants need sunlight and water.",
    "Rainy weather brings water."
  ],
  "questions": [
    {
      "type": "speech",
      "prompt": "Speak one sentence about water.",
      "answer": "Water is important for life.",
      "expected": "Water is important for life.",
      "options": [],
      "audioText": "Speak one sentence about water.",
      "evaluation": "semantic",
      "micMode": "extended"
    },
    {
      "type": "speech",
      "prompt": "Speak one sentence about plants.",
      "answer": "Plants need sunlight and water.",
      "expected": "Plants need sunlight and water.",
      "options": [],
      "audioText": "Speak one sentence about plants.",
      "evaluation": "semantic",
      "micMode": "extended"
    },
    {
      "type": "speech",
      "prompt": "Speak one sentence about weather.",
      "answer": "Rainy weather brings water.",
      "expected": "Rainy weather brings water.",
      "options": [],
      "audioText": "Speak one sentence about weather.",
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
