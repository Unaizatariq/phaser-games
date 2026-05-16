window.GAME_DATA = {
  "grade": "class4",
  "subject": "computer",
  "skill": "speaking",
  "level": 3,
  "topic": "Programming Logic",
  "teach": "Listen carefully, then speak the answer clearly into the microphone.",
  "examples": [
    "Forward",
    "Left",
    "Right"
  ],
  "questions": [
    {
      "type": "speech",
      "prompt": "Which command moves turtle forward?",
      "answer": "Forward",
      "expected": "Forward",
      "options": [],
      "audioText": "Which command moves turtle forward?",
      "evaluation": "pronunciation",
      "micMode": "word"
    },
    {
      "type": "speech",
      "prompt": "Which command turns turtle left?",
      "answer": "Left",
      "expected": "Left",
      "options": [],
      "audioText": "Which command turns turtle left?",
      "evaluation": "pronunciation",
      "micMode": "word"
    },
    {
      "type": "speech",
      "prompt": "Which command turns turtle right?",
      "answer": "Right",
      "expected": "Right",
      "options": [],
      "audioText": "Which command turns turtle right?",
      "evaluation": "pronunciation",
      "micMode": "word"
    },
    {
      "type": "speech",
      "prompt": "Programming follows what kind of steps?",
      "answer": "Step by Step",
      "expected": "Step by Step",
      "options": [],
      "audioText": "Programming follows what kind of steps?",
      "evaluation": "semantic",
      "micMode": "extended"
    },
    {
      "type": "speech",
      "prompt": "What do we call solving problems using logic?",
      "answer": "Programming",
      "expected": "Programming",
      "options": [],
      "audioText": "What do we call solving problems using logic?",
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
