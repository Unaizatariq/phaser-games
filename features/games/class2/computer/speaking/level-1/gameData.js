window.GAME_DATA = {
  "grade": "class2",
  "subject": "computer",
  "skill": "speaking",
  "level": 1,
  "topic": "Parts of Computer",
  "teach": "Listen carefully, then speak the answer clearly into the microphone.",
  "examples": [
    "Keyboard",
    "Mouse",
    "Monitor"
  ],
  "questions": [
    {
      "type": "speech",
      "prompt": "Which device is used for typing?",
      "answer": "Keyboard",
      "expected": "Keyboard",
      "options": [],
      "audioText": "Which device is used for typing?",
      "evaluation": "pronunciation",
      "micMode": "word"
    },
    {
      "type": "speech",
      "prompt": "Which device moves the pointer?",
      "answer": "Mouse",
      "expected": "Mouse",
      "options": [],
      "audioText": "Which device moves the pointer?",
      "evaluation": "pronunciation",
      "micMode": "word"
    },
    {
      "type": "speech",
      "prompt": "Which device shows pictures?",
      "answer": "Monitor",
      "expected": "Monitor",
      "options": [],
      "audioText": "Which device shows pictures?",
      "evaluation": "pronunciation",
      "micMode": "word"
    },
    {
      "type": "speech",
      "prompt": "Which part is called the brain of computer?",
      "answer": "CPU",
      "expected": "CPU",
      "options": [],
      "audioText": "Which part is called the brain of computer?",
      "evaluation": "pronunciation",
      "micMode": "word",
      "acceptedAnswers": [
        "CPU",
        "C P U"
      ]
    },
    {
      "type": "speech",
      "prompt": "Which device gives output?",
      "answer": "Monitor",
      "expected": "Monitor",
      "options": [],
      "audioText": "Which device gives output?",
      "evaluation": "pronunciation",
      "micMode": "word"
    }
  ],
  "lang": "en-PK",
  "rtl": false,
  "mode": "speaking",
  "gameplayStyle": {
    "microphoneAutoActivates": true,
    "rapidAnswer": true,
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
