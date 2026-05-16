window.GAME_DATA = {
  "grade": "class3",
  "subject": "maths",
  "skill": "speaking",
  "level": 3,
  "topic": "Mental Maths",
  "teach": "Listen carefully, then speak the answer clearly into the microphone.",
  "examples": [
    "Fifty",
    "Forty Five",
    "Eighty One"
  ],
  "questions": [
    {
      "type": "speech",
      "prompt": "What is 25 + 25?",
      "answer": "Fifty",
      "expected": "Fifty",
      "options": [],
      "audioText": "What is 25 + 25?",
      "evaluation": "pronunciation",
      "micMode": "word",
      "acceptedAnswers": [
        "Fifty",
        "50"
      ]
    },
    {
      "type": "speech",
      "prompt": "What is 90 - 45?",
      "answer": "Forty Five",
      "expected": "Forty Five",
      "options": [],
      "audioText": "What is 90 - 45?",
      "evaluation": "pronunciation",
      "micMode": "word"
    },
    {
      "type": "speech",
      "prompt": "What is 9 × 9?",
      "answer": "Eighty One",
      "expected": "Eighty One",
      "options": [],
      "audioText": "What is 9 × 9?",
      "evaluation": "pronunciation",
      "micMode": "word"
    },
    {
      "type": "speech",
      "prompt": "What is 64 ÷ 8?",
      "answer": "Eight",
      "expected": "Eight",
      "options": [],
      "audioText": "What is 64 ÷ 8?",
      "evaluation": "pronunciation",
      "micMode": "word",
      "acceptedAnswers": [
        "Eight",
        "8"
      ]
    },
    {
      "type": "speech",
      "prompt": "What is 50 % 25?",
      "answer": "Zero",
      "expected": "Zero",
      "options": [],
      "audioText": "What is 50 % 25?",
      "evaluation": "pronunciation",
      "micMode": "word",
      "acceptedAnswers": [
        "Zero",
        "0"
      ]
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
