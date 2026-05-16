window.GAME_DATA = {
  "grade": "class1",
  "subject": "maths",
  "skill": "speaking",
  "level": 1,
  "topic": "Addition and Subtraction",
  "teach": "Listen carefully, then speak the answer clearly into the microphone.",
  "examples": [
    "Eight",
    "Five",
    "Fifteen"
  ],
  "questions": [
    {
      "type": "speech",
      "prompt": "What is 5 + 3?",
      "answer": "Eight",
      "expected": "Eight",
      "options": [],
      "audioText": "What is 5 + 3?",
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
      "prompt": "What is 10 + 5?",
      "answer": "Fifteen",
      "expected": "Fifteen",
      "options": [],
      "audioText": "What is 10 + 5?",
      "evaluation": "pronunciation",
      "micMode": "word",
      "acceptedAnswers": [
        "Fifteen",
        "15"
      ]
    },
    {
      "type": "speech",
      "prompt": "What is 20 - 10?",
      "answer": "Ten",
      "expected": "Ten",
      "options": [],
      "audioText": "What is 20 - 10?",
      "evaluation": "pronunciation",
      "micMode": "word",
      "acceptedAnswers": [
        "Ten",
        "10"
      ]
    },
    {
      "type": "speech",
      "prompt": "What is 7 + 2?",
      "answer": "Nine",
      "expected": "Nine",
      "options": [],
      "audioText": "What is 7 + 2?",
      "evaluation": "pronunciation",
      "micMode": "word",
      "acceptedAnswers": [
        "Nine",
        "9"
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
