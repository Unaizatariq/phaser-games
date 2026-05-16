window.GAME_DATA = {
  "grade": "class2",
  "subject": "maths",
  "skill": "speaking",
  "level": 3,
  "topic": "Fast Answer Challenge",
  "teach": "Listen carefully, then speak the answer clearly into the microphone.",
  "examples": [
    "Fifty",
    "Twenty Four",
    "Nine"
  ],
  "questions": [
    {
      "type": "speech",
      "prompt": "What is 100 - 50?",
      "answer": "Fifty",
      "expected": "Fifty",
      "options": [],
      "audioText": "What is 100 - 50?",
      "evaluation": "pronunciation",
      "micMode": "word",
      "acceptedAnswers": [
        "Fifty",
        "50"
      ]
    },
    {
      "type": "speech",
      "prompt": "What is 12 × 2?",
      "answer": "Twenty Four",
      "expected": "Twenty Four",
      "options": [],
      "audioText": "What is 12 × 2?",
      "evaluation": "pronunciation",
      "micMode": "word"
    },
    {
      "type": "speech",
      "prompt": "What is 81 ÷ 9?",
      "answer": "Nine",
      "expected": "Nine",
      "options": [],
      "audioText": "What is 81 ÷ 9?",
      "evaluation": "pronunciation",
      "micMode": "word",
      "acceptedAnswers": [
        "Nine",
        "9"
      ]
    },
    {
      "type": "speech",
      "prompt": "What is 14 + 6?",
      "answer": "Twenty",
      "expected": "Twenty",
      "options": [],
      "audioText": "What is 14 + 6?",
      "evaluation": "pronunciation",
      "micMode": "word",
      "acceptedAnswers": [
        "Twenty",
        "20"
      ]
    },
    {
      "type": "speech",
      "prompt": "What is 33 - 3?",
      "answer": "Thirty",
      "expected": "Thirty",
      "options": [],
      "audioText": "What is 33 - 3?",
      "evaluation": "pronunciation",
      "micMode": "word",
      "acceptedAnswers": [
        "Thirty",
        "30"
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
