window.GAME_DATA = {
  "grade": "class5",
  "subject": "computer",
  "skill": "speaking",
  "level": 1,
  "topic": "MS Word and Excel",
  "teach": "Listen carefully, then speak the answer clearly into the microphone.",
  "examples": [
    "MS Word",
    "MS Excel",
    "SUM"
  ],
  "questions": [
    {
      "type": "speech",
      "prompt": "Which software is used for documents?",
      "answer": "MS Word",
      "expected": "MS Word",
      "options": [],
      "audioText": "Which software is used for documents?",
      "evaluation": "pronunciation",
      "micMode": "word"
    },
    {
      "type": "speech",
      "prompt": "Which software uses formulas?",
      "answer": "MS Excel",
      "expected": "MS Excel",
      "options": [],
      "audioText": "Which software uses formulas?",
      "evaluation": "pronunciation",
      "micMode": "word"
    },
    {
      "type": "speech",
      "prompt": "Which formula adds numbers?",
      "answer": "SUM",
      "expected": "SUM",
      "options": [],
      "audioText": "Which formula adds numbers?",
      "evaluation": "pronunciation",
      "micMode": "word",
      "acceptedAnswers": [
        "SUM",
        "S U M"
      ]
    },
    {
      "type": "speech",
      "prompt": "Which formula finds average?",
      "answer": "AVERAGE",
      "expected": "AVERAGE",
      "options": [],
      "audioText": "Which formula finds average?",
      "evaluation": "pronunciation",
      "micMode": "word"
    },
    {
      "type": "speech",
      "prompt": "Which software creates slides?",
      "answer": "PowerPoint",
      "expected": "PowerPoint",
      "options": [],
      "audioText": "Which software creates slides?",
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
