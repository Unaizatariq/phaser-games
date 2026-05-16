window.GAME_DATA = {
  "grade": "class1",
  "subject": "maths",
  "skill": "speaking",
  "level": 3,
  "topic": "Mental Maths Challenge",
  "teach": "Listen carefully, then speak the answer clearly into the microphone.",
  "examples": [
    "Twenty",
    "Fifteen",
    "Sixteen"
  ],
  "questions": [
    {
      "type": "speech",
      "prompt": "What is 15 + 5?",
      "answer": "Twenty",
      "expected": "Twenty",
      "options": [],
      "audioText": "What is 15 + 5?",
      "evaluation": "pronunciation",
      "micMode": "word",
      "acceptedAnswers": [
        "Twenty",
        "20"
      ]
    },
    {
      "type": "speech",
      "prompt": "What is 25 - 10?",
      "answer": "Fifteen",
      "expected": "Fifteen",
      "options": [],
      "audioText": "What is 25 - 10?",
      "evaluation": "pronunciation",
      "micMode": "word",
      "acceptedAnswers": [
        "Fifteen",
        "15"
      ]
    },
    {
      "type": "speech",
      "prompt": "What is 8 × 2?",
      "answer": "Sixteen",
      "expected": "Sixteen",
      "options": [],
      "audioText": "What is 8 × 2?",
      "evaluation": "pronunciation",
      "micMode": "word",
      "acceptedAnswers": [
        "Sixteen",
        "16"
      ]
    },
    {
      "type": "speech",
      "prompt": "What is 18 ÷ 3?",
      "answer": "Six",
      "expected": "Six",
      "options": [],
      "audioText": "What is 18 ÷ 3?",
      "evaluation": "pronunciation",
      "micMode": "word",
      "acceptedAnswers": [
        "Six",
        "6"
      ]
    },
    {
      "type": "speech",
      "prompt": "What is 100 % 50?",
      "answer": "Zero",
      "expected": "Zero",
      "options": [],
      "audioText": "What is 100 % 50?",
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
