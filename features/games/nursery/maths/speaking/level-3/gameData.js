window.GAME_DATA = {
  "grade": "nursery",
  "subject": "maths",
  "skill": "speaking",
  "level": 3,
  "topic": "Mental Maths",
  "teach": "Listen carefully, then speak the answer clearly into the microphone.",
  "examples": [
    "Five",
    "Seven",
    "Three"
  ],
  "questions": [
    {
      "type": "speech",
      "prompt": "What comes after 4?",
      "answer": "Five",
      "expected": "Five",
      "options": [],
      "audioText": "What comes after 4?",
      "evaluation": "pronunciation",
      "micMode": "word",
      "acceptedAnswers": [
        "Five",
        "5"
      ]
    },
    {
      "type": "speech",
      "prompt": "What comes before 8?",
      "answer": "Seven",
      "expected": "Seven",
      "options": [],
      "audioText": "What comes before 8?",
      "evaluation": "pronunciation",
      "micMode": "word",
      "acceptedAnswers": [
        "Seven",
        "7"
      ]
    },
    {
      "type": "speech",
      "prompt": "What is 2 + 1?",
      "answer": "Three",
      "expected": "Three",
      "options": [],
      "audioText": "What is 2 + 1?",
      "evaluation": "pronunciation",
      "micMode": "word",
      "acceptedAnswers": [
        "Three",
        "3"
      ]
    },
    {
      "type": "speech",
      "prompt": "What is 5 - 2?",
      "answer": "Three",
      "expected": "Three",
      "options": [],
      "audioText": "What is 5 - 2?",
      "evaluation": "pronunciation",
      "micMode": "word",
      "acceptedAnswers": [
        "Three",
        "3"
      ]
    },
    {
      "type": "speech",
      "prompt": "What is 3 + 3?",
      "answer": "Six",
      "expected": "Six",
      "options": [],
      "audioText": "What is 3 + 3?",
      "evaluation": "pronunciation",
      "micMode": "word",
      "acceptedAnswers": [
        "Six",
        "6"
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
