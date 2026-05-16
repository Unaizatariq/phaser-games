window.GAME_DATA = {
  "grade": "class5",
  "subject": "maths",
  "skill": "speaking",
  "level": 1,
  "topic": "Factors and Multiples",
  "teach": "Listen carefully, then speak the answer clearly into the microphone.",
  "examples": [
    "Three",
    "Fifteen",
    "Two and Five"
  ],
  "questions": [
    {
      "type": "speech",
      "prompt": "Say a factor of 12.",
      "answer": "Three",
      "expected": "Three",
      "options": [],
      "audioText": "Say a factor of 12.",
      "evaluation": "pronunciation",
      "micMode": "word",
      "acceptedAnswers": [
        "Three",
        "3"
      ]
    },
    {
      "type": "speech",
      "prompt": "Say a multiple of 5.",
      "answer": "Fifteen",
      "expected": "Fifteen",
      "options": [],
      "audioText": "Say a multiple of 5.",
      "evaluation": "pronunciation",
      "micMode": "word",
      "acceptedAnswers": [
        "Fifteen",
        "15"
      ]
    },
    {
      "type": "speech",
      "prompt": "What are the factors of 10?",
      "answer": "Two and Five",
      "expected": "Two and Five",
      "options": [],
      "audioText": "What are the factors of 10?",
      "evaluation": "semantic",
      "micMode": "extended"
    },
    {
      "type": "speech",
      "prompt": "Say a multiple of 8.",
      "answer": "Sixteen",
      "expected": "Sixteen",
      "options": [],
      "audioText": "Say a multiple of 8.",
      "evaluation": "pronunciation",
      "micMode": "word",
      "acceptedAnswers": [
        "Sixteen",
        "16"
      ]
    },
    {
      "type": "speech",
      "prompt": "Say a factor of 20.",
      "answer": "Four",
      "expected": "Four",
      "options": [],
      "audioText": "Say a factor of 20.",
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
