window.GAME_DATA = {
  "grade": "class4",
  "subject": "science",
  "skill": "speaking",
  "level": 4,
  "topic": "Sentence Speaking",
  "teach": "Listen carefully, then speak the answer clearly into the microphone.",
  "examples": [
    "Healthy food gives us energy.",
    "We should keep our environment clean."
  ],
  "questions": [
    {
      "type": "speech",
      "prompt": "Speak a sentence about healthy eating.",
      "answer": "Healthy food gives us energy.",
      "expected": "Healthy food gives us energy.",
      "options": [],
      "audioText": "Speak a sentence about healthy eating.",
      "evaluation": "semantic",
      "micMode": "extended"
    },
    {
      "type": "speech",
      "prompt": "Speak a sentence about the environment.",
      "answer": "We should keep our environment clean.",
      "expected": "We should keep our environment clean.",
      "options": [],
      "audioText": "Speak a sentence about the environment.",
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
