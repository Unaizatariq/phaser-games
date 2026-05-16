window.GAME_DATA = {
  "grade": "class4",
  "subject": "maths",
  "skill": "speaking",
  "level": 2,
  "topic": "Geometry",
  "teach": "Listen carefully, then speak the answer clearly into the microphone.",
  "examples": [
    "Three",
    "Four",
    "Circle"
  ],
  "questions": [
    {
      "type": "speech",
      "prompt": "How many sides does a triangle have?",
      "answer": "Three",
      "expected": "Three",
      "options": [],
      "audioText": "How many sides does a triangle have?",
      "evaluation": "pronunciation",
      "micMode": "word",
      "acceptedAnswers": [
        "Three",
        "3"
      ]
    },
    {
      "type": "speech",
      "prompt": "How many sides does a square have?",
      "answer": "Four",
      "expected": "Four",
      "options": [],
      "audioText": "How many sides does a square have?",
      "evaluation": "pronunciation",
      "micMode": "word",
      "acceptedAnswers": [
        "Four",
        "4"
      ]
    },
    {
      "type": "speech",
      "prompt": "What shape has no corners?",
      "answer": "Circle",
      "expected": "Circle",
      "options": [],
      "audioText": "What shape has no corners?",
      "evaluation": "pronunciation",
      "micMode": "word"
    },
    {
      "type": "speech",
      "prompt": "What shape has 4 equal sides?",
      "answer": "Square",
      "expected": "Square",
      "options": [],
      "audioText": "What shape has 4 equal sides?",
      "evaluation": "pronunciation",
      "micMode": "word"
    },
    {
      "type": "speech",
      "prompt": "What shape has 3 sides?",
      "answer": "Triangle",
      "expected": "Triangle",
      "options": [],
      "audioText": "What shape has 3 sides?",
      "evaluation": "pronunciation",
      "micMode": "word"
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
