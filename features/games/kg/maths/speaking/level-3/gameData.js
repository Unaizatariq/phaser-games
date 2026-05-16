window.GAME_DATA = {
  "grade": "kg",
  "subject": "maths",
  "skill": "speaking",
  "level": 3,
  "topic": "Fast Maths",
  "teach": "Listen carefully, then speak the answer clearly into the microphone.",
  "examples": [
    "Eight",
    "Eight",
    "Five"
  ],
  "questions": [
    {
      "type": "speech",
      "prompt": "What comes next? 2, 4, 6",
      "answer": "Eight",
      "expected": "Eight",
      "options": [],
      "audioText": "What comes next? 2, 4, 6",
      "evaluation": "pronunciation",
      "micMode": "word",
      "acceptedAnswers": [
        "Eight",
        "8"
      ]
    },
    {
      "type": "speech",
      "prompt": "What is 7 + 1?",
      "answer": "Eight",
      "expected": "Eight",
      "options": [],
      "audioText": "What is 7 + 1?",
      "evaluation": "pronunciation",
      "micMode": "word",
      "acceptedAnswers": [
        "Eight",
        "8"
      ]
    },
    {
      "type": "speech",
      "prompt": "What is 9 - 4?",
      "answer": "Five",
      "expected": "Five",
      "options": [],
      "audioText": "What is 9 - 4?",
      "evaluation": "pronunciation",
      "micMode": "word",
      "acceptedAnswers": [
        "Five",
        "5"
      ]
    },
    {
      "type": "speech",
      "prompt": "What is 2 × 5?",
      "answer": "Ten",
      "expected": "Ten",
      "options": [],
      "audioText": "What is 2 × 5?",
      "evaluation": "pronunciation",
      "micMode": "word",
      "acceptedAnswers": [
        "Ten",
        "10"
      ]
    },
    {
      "type": "speech",
      "prompt": "What is 12 ÷ 3?",
      "answer": "Four",
      "expected": "Four",
      "options": [],
      "audioText": "What is 12 ÷ 3?",
      "evaluation": "pronunciation",
      "micMode": "word",
      "acceptedAnswers": [
        "Four",
        "4"
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
