window.GAME_DATA = {
  "grade": "kg",
  "subject": "english",
  "skill": "speaking",
  "level": 6,
  "topic": "Story Speaking",
  "teach": "Listen carefully, then speak the answer clearly into the microphone.",
  "examples": [
    "We went for a picnic and played games.",
    "My favorite animal is a lion because it is strong.",
    "My school is beautiful and I love my teachers."
  ],
  "questions": [
    {
      "type": "speech",
      "prompt": "Tell a short story about your picnic day.",
      "answer": "We went for a picnic and played games.",
      "expected": "We went for a picnic and played games.",
      "options": [],
      "audioText": "Tell a short story about your picnic day.",
      "evaluation": "semantic",
      "micMode": "extended"
    },
    {
      "type": "speech",
      "prompt": "Speak about your favorite animal.",
      "answer": "My favorite animal is a lion because it is strong.",
      "expected": "My favorite animal is a lion because it is strong.",
      "options": [],
      "audioText": "Speak about your favorite animal.",
      "evaluation": "semantic",
      "micMode": "extended"
    },
    {
      "type": "speech",
      "prompt": "Tell a short story about your school.",
      "answer": "My school is beautiful and I love my teachers.",
      "expected": "My school is beautiful and I love my teachers.",
      "options": [],
      "audioText": "Tell a short story about your school.",
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
