window.GAME_DATA = {
  "grade": "class5",
  "subject": "science",
  "skill": "speaking",
  "level": 2,
  "topic": "Electricity and Magnetism",
  "teach": "Listen carefully, then speak the answer clearly into the microphone.",
  "examples": [
    "Battery",
    "Metal",
    "Magnet"
  ],
  "questions": [
    {
      "type": "speech",
      "prompt": "Say the electrical component name.",
      "answer": "Battery",
      "expected": "Battery",
      "options": [],
      "audioText": "Say the electrical component name.",
      "evaluation": "pronunciation",
      "micMode": "word"
    },
    {
      "type": "speech",
      "prompt": "Say the conductor material.",
      "answer": "Metal",
      "expected": "Metal",
      "options": [],
      "audioText": "Say the conductor material.",
      "evaluation": "pronunciation",
      "micMode": "word"
    },
    {
      "type": "speech",
      "prompt": "Say the magnetic object.",
      "answer": "Magnet",
      "expected": "Magnet",
      "options": [],
      "audioText": "Say the magnetic object.",
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
