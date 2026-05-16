window.GAME_DATA = {
  "grade": "class3",
  "subject": "maths",
  "skill": "speaking",
  "level": 1,
  "topic": "Fractions",
  "teach": "Listen carefully, then speak the answer clearly into the microphone.",
  "examples": [
    "One Half",
    "One Fourth",
    "Three Fourths"
  ],
  "questions": [
    {
      "type": "speech",
      "prompt": "Say the fraction 1/2",
      "answer": "One Half",
      "expected": "One Half",
      "options": [],
      "audioText": "Say the fraction 1/2",
      "evaluation": "pronunciation",
      "micMode": "word"
    },
    {
      "type": "speech",
      "prompt": "Say the fraction 1/4",
      "answer": "One Fourth",
      "expected": "One Fourth",
      "options": [],
      "audioText": "Say the fraction 1/4",
      "evaluation": "pronunciation",
      "micMode": "word"
    },
    {
      "type": "speech",
      "prompt": "Say the fraction 3/4",
      "answer": "Three Fourths",
      "expected": "Three Fourths",
      "options": [],
      "audioText": "Say the fraction 3/4",
      "evaluation": "pronunciation",
      "micMode": "word"
    },
    {
      "type": "speech",
      "prompt": "Which fraction is bigger: 1/2 or 1/4?",
      "answer": "One Half",
      "expected": "One Half",
      "options": [],
      "audioText": "Which fraction is bigger: 1/2 or 1/4?",
      "evaluation": "pronunciation",
      "micMode": "word"
    },
    {
      "type": "speech",
      "prompt": "What is half of 10?",
      "answer": "Five",
      "expected": "Five",
      "options": [],
      "audioText": "What is half of 10?",
      "evaluation": "pronunciation",
      "micMode": "word",
      "acceptedAnswers": [
        "Five",
        "5"
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
