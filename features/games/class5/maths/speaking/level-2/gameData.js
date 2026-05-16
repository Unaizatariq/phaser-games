window.GAME_DATA = {
  "grade": "class5",
  "subject": "maths",
  "skill": "speaking",
  "level": 2,
  "topic": "Advanced Operators",
  "teach": "Listen carefully, then speak the answer clearly into the microphone.",
  "examples": [
    "One Fifty",
    "Two Fifty",
    "One Forty Four"
  ],
  "questions": [
    {
      "type": "speech",
      "prompt": "What is 125 + 25?",
      "answer": "One Fifty",
      "expected": "One Fifty",
      "options": [],
      "audioText": "What is 125 + 25?",
      "evaluation": "pronunciation",
      "micMode": "word"
    },
    {
      "type": "speech",
      "prompt": "What is 500 - 250?",
      "answer": "Two Fifty",
      "expected": "Two Fifty",
      "options": [],
      "audioText": "What is 500 - 250?",
      "evaluation": "pronunciation",
      "micMode": "word"
    },
    {
      "type": "speech",
      "prompt": "What is 12 × 12?",
      "answer": "One Forty Four",
      "expected": "One Forty Four",
      "options": [],
      "audioText": "What is 12 × 12?",
      "evaluation": "semantic",
      "micMode": "extended"
    },
    {
      "type": "speech",
      "prompt": "What is 144 ÷ 12?",
      "answer": "Twelve",
      "expected": "Twelve",
      "options": [],
      "audioText": "What is 144 ÷ 12?",
      "evaluation": "pronunciation",
      "micMode": "word",
      "acceptedAnswers": [
        "Twelve",
        "12"
      ]
    },
    {
      "type": "speech",
      "prompt": "What is 50 % 10?",
      "answer": "Zero",
      "expected": "Zero",
      "options": [],
      "audioText": "What is 50 % 10?",
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
