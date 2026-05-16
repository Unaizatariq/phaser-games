window.GAME_DATA = {
  "grade": "class5",
  "subject": "science",
  "skill": "speaking",
  "level": 4,
  "topic": "Advanced Sentence Speaking",
  "teach": "Listen carefully, then speak the answer clearly into the microphone.",
  "examples": [
    "Electricity powers machines.",
    "Noise pollution harms health."
  ],
  "questions": [
    {
      "type": "speech",
      "prompt": "Speak one sentence about electricity.",
      "answer": "Electricity powers machines.",
      "expected": "Electricity powers machines.",
      "options": [],
      "audioText": "Speak one sentence about electricity.",
      "evaluation": "semantic",
      "micMode": "extended"
    },
    {
      "type": "speech",
      "prompt": "Speak one sentence about sound pollution.",
      "answer": "Noise pollution harms health.",
      "expected": "Noise pollution harms health.",
      "options": [],
      "audioText": "Speak one sentence about sound pollution.",
      "evaluation": "semantic",
      "micMode": "extended"
    }
  ],
  "lang": "en-PK",
  "rtl": false,
  "mode": "speaking",
  "gameplayStyle": {
    "microphoneAutoActivates": true,
    "rapidAnswer": false,
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
