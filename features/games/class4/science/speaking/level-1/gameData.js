window.GAME_DATA = {
  "grade": "class4",
  "subject": "science",
  "skill": "speaking",
  "level": 1,
  "topic": "Human Body Organs",
  "teach": "Listen carefully, then speak the answer clearly into the microphone.",
  "examples": [
    "Heart",
    "Lungs",
    "Stomach"
  ],
  "questions": [
    {
      "type": "speech",
      "prompt": "Say the organ that pumps blood.",
      "answer": "Heart",
      "expected": "Heart",
      "options": [],
      "audioText": "Say the organ that pumps blood.",
      "evaluation": "pronunciation",
      "micMode": "word"
    },
    {
      "type": "speech",
      "prompt": "Say the organ used for breathing.",
      "answer": "Lungs",
      "expected": "Lungs",
      "options": [],
      "audioText": "Say the organ used for breathing.",
      "evaluation": "pronunciation",
      "micMode": "word"
    },
    {
      "type": "speech",
      "prompt": "Say the digestion organ name.",
      "answer": "Stomach",
      "expected": "Stomach",
      "options": [],
      "audioText": "Say the digestion organ name.",
      "evaluation": "pronunciation",
      "micMode": "word"
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
