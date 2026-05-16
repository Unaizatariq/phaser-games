window.GAME_DATA = {
  "grade": "class2",
  "subject": "computer",
  "skill": "speaking",
  "level": 2,
  "topic": "Mouse Actions",
  "teach": "Listen carefully, then speak the answer clearly into the microphone.",
  "examples": [
    "Double Click",
    "Drag and Drop",
    "Single Click"
  ],
  "questions": [
    {
      "type": "speech",
      "prompt": "Which action opens a file quickly?",
      "answer": "Double Click",
      "expected": "Double Click",
      "options": [],
      "audioText": "Which action opens a file quickly?",
      "evaluation": "pronunciation",
      "micMode": "word"
    },
    {
      "type": "speech",
      "prompt": "Which action moves items?",
      "answer": "Drag and Drop",
      "expected": "Drag and Drop",
      "options": [],
      "audioText": "Which action moves items?",
      "evaluation": "semantic",
      "micMode": "extended"
    },
    {
      "type": "speech",
      "prompt": "Which action selects an item?",
      "answer": "Single Click",
      "expected": "Single Click",
      "options": [],
      "audioText": "Which action selects an item?",
      "evaluation": "pronunciation",
      "micMode": "word"
    },
    {
      "type": "speech",
      "prompt": "Which action opens menu options?",
      "answer": "Right Click",
      "expected": "Right Click",
      "options": [],
      "audioText": "Which action opens menu options?",
      "evaluation": "pronunciation",
      "micMode": "word"
    },
    {
      "type": "speech",
      "prompt": "Which action scrolls the page?",
      "answer": "Scroll",
      "expected": "Scroll",
      "options": [],
      "audioText": "Which action scrolls the page?",
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
