window.GAME_DATA = {
  "grade": "class4",
  "subject": "science",
  "skill": "speaking",
  "level": 5,
  "topic": "Story Speaking",
  "teach": "Listen carefully, then speak the answer clearly into the microphone.",
  "examples": [
    "We should save water to protect nature.",
    "Exercise keeps our body healthy.",
    "Earth rotation causes day and night."
  ],
  "questions": [
    {
      "type": "speech",
      "prompt": "Tell a short story about saving water.",
      "answer": "We should save water to protect nature.",
      "expected": "We should save water to protect nature.",
      "options": [],
      "audioText": "Tell a short story about saving water.",
      "evaluation": "semantic",
      "micMode": "extended"
    },
    {
      "type": "speech",
      "prompt": "Speak about the importance of exercise.",
      "answer": "Exercise keeps our body healthy.",
      "expected": "Exercise keeps our body healthy.",
      "options": [],
      "audioText": "Speak about the importance of exercise.",
      "evaluation": "semantic",
      "micMode": "extended"
    },
    {
      "type": "speech",
      "prompt": "Tell a short story about day and night.",
      "answer": "Earth rotation causes day and night.",
      "expected": "Earth rotation causes day and night.",
      "options": [],
      "audioText": "Tell a short story about day and night.",
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
