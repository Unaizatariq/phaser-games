window.GAME_DATA = {
  "grade": "class4",
  "subject": "maths",
  "skill": "speaking",
  "level": 3,
  "topic": "Rapid Maths",
  "teach": "Listen carefully, then speak the answer clearly into the microphone.",
  "examples": [
    "One Fifty",
    "One Twenty Five",
    "One Hundred"
  ],
  "questions": [
    {
      "type": "speech",
      "prompt": "What is 120 + 30?",
      "answer": "One Fifty",
      "expected": "One Fifty",
      "options": [],
      "audioText": "What is 120 + 30?",
      "evaluation": "pronunciation",
      "micMode": "word"
    },
    {
      "type": "speech",
      "prompt": "What is 200 - 75?",
      "answer": "One Twenty Five",
      "expected": "One Twenty Five",
      "options": [],
      "audioText": "What is 200 - 75?",
      "evaluation": "semantic",
      "micMode": "extended"
    },
    {
      "type": "speech",
      "prompt": "What is 25 × 4?",
      "answer": "One Hundred",
      "expected": "One Hundred",
      "options": [],
      "audioText": "What is 25 × 4?",
      "evaluation": "pronunciation",
      "micMode": "word"
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
      "prompt": "What is 100 % 25?",
      "answer": "Zero",
      "expected": "Zero",
      "options": [],
      "audioText": "What is 100 % 25?",
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
