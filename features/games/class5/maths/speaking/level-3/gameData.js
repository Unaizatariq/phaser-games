window.GAME_DATA = {
  "grade": "class5",
  "subject": "maths",
  "skill": "speaking",
  "level": 3,
  "topic": "Fast Mental Maths",
  "teach": "Listen carefully, then speak the answer clearly into the microphone.",
  "examples": [
    "Fifty",
    "Fifty",
    "One Hundred"
  ],
  "questions": [
    {
      "type": "speech",
      "prompt": "What is half of 100?",
      "answer": "Fifty",
      "expected": "Fifty",
      "options": [],
      "audioText": "What is half of 100?",
      "evaluation": "pronunciation",
      "micMode": "word",
      "acceptedAnswers": [
        "Fifty",
        "50"
      ]
    },
    {
      "type": "speech",
      "prompt": "What is double of 25?",
      "answer": "Fifty",
      "expected": "Fifty",
      "options": [],
      "audioText": "What is double of 25?",
      "evaluation": "pronunciation",
      "micMode": "word",
      "acceptedAnswers": [
        "Fifty",
        "50"
      ]
    },
    {
      "type": "speech",
      "prompt": "What is 99 + 1?",
      "answer": "One Hundred",
      "expected": "One Hundred",
      "options": [],
      "audioText": "What is 99 + 1?",
      "evaluation": "pronunciation",
      "micMode": "word"
    },
    {
      "type": "speech",
      "prompt": "What is 1000 - 1?",
      "answer": "Nine Ninety Nine",
      "expected": "Nine Ninety Nine",
      "options": [],
      "audioText": "What is 1000 - 1?",
      "evaluation": "semantic",
      "micMode": "extended"
    },
    {
      "type": "speech",
      "prompt": "What is 11 × 11?",
      "answer": "One Twenty One",
      "expected": "One Twenty One",
      "options": [],
      "audioText": "What is 11 × 11?",
      "evaluation": "semantic",
      "micMode": "extended"
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
