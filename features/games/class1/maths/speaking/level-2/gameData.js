window.GAME_DATA = {
  "grade": "class1",
  "subject": "maths",
  "skill": "speaking",
  "level": 2,
  "topic": "Multiplication and Division",
  "teach": "Listen carefully, then speak the answer clearly into the microphone.",
  "examples": [
    "Six",
    "Three",
    "Ten"
  ],
  "questions": [
    {
      "type": "speech",
      "prompt": "What is 2 × 3?",
      "answer": "Six",
      "expected": "Six",
      "options": [],
      "audioText": "What is 2 × 3?",
      "evaluation": "pronunciation",
      "micMode": "word",
      "acceptedAnswers": [
        "Six",
        "6"
      ]
    },
    {
      "type": "speech",
      "prompt": "What is 12 ÷ 4?",
      "answer": "Three",
      "expected": "Three",
      "options": [],
      "audioText": "What is 12 ÷ 4?",
      "evaluation": "pronunciation",
      "micMode": "word",
      "acceptedAnswers": [
        "Three",
        "3"
      ]
    },
    {
      "type": "speech",
      "prompt": "What is 5 × 2?",
      "answer": "Ten",
      "expected": "Ten",
      "options": [],
      "audioText": "What is 5 × 2?",
      "evaluation": "pronunciation",
      "micMode": "word",
      "acceptedAnswers": [
        "Ten",
        "10"
      ]
    },
    {
      "type": "speech",
      "prompt": "What is 16 ÷ 2?",
      "answer": "Eight",
      "expected": "Eight",
      "options": [],
      "audioText": "What is 16 ÷ 2?",
      "evaluation": "pronunciation",
      "micMode": "word",
      "acceptedAnswers": [
        "Eight",
        "8"
      ]
    },
    {
      "type": "speech",
      "prompt": "What is 3 × 4?",
      "answer": "Twelve",
      "expected": "Twelve",
      "options": [],
      "audioText": "What is 3 × 4?",
      "evaluation": "pronunciation",
      "micMode": "word",
      "acceptedAnswers": [
        "Twelve",
        "12"
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
