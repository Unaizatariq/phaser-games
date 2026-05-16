window.GAME_DATA = {
  "grade": "class1",
  "subject": "computer",
  "skill": "speaking",
  "level": 2,
  "topic": "Device Identification",
  "teach": "Listen carefully, then speak the answer clearly into the microphone.",
  "examples": [
    "Monitor",
    "Mouse",
    "Keyboard"
  ],
  "questions": [
    {
      "type": "speech",
      "prompt": "What device is this?",
      "answer": "Monitor",
      "expected": "Monitor",
      "options": [],
      "audioText": "What device is this?",
      "evaluation": "pronunciation",
      "micMode": "word",
      "image": "monitor.png",
      "requiredAsset": "monitor.png"
    },
    {
      "type": "speech",
      "prompt": "What device is this?",
      "answer": "Mouse",
      "expected": "Mouse",
      "options": [],
      "audioText": "What device is this?",
      "evaluation": "pronunciation",
      "micMode": "word",
      "image": "mouse.png",
      "requiredAsset": "mouse.png"
    },
    {
      "type": "speech",
      "prompt": "What device is this?",
      "answer": "Keyboard",
      "expected": "Keyboard",
      "options": [],
      "audioText": "What device is this?",
      "evaluation": "pronunciation",
      "micMode": "word",
      "image": "keyboard.png",
      "requiredAsset": "keyboard.png"
    },
    {
      "type": "speech",
      "prompt": "What device is this?",
      "answer": "CPU",
      "expected": "CPU",
      "options": [],
      "audioText": "What device is this?",
      "evaluation": "pronunciation",
      "micMode": "word",
      "image": "cpu.png",
      "requiredAsset": "cpu.png",
      "acceptedAnswers": [
        "CPU",
        "C P U"
      ]
    },
    {
      "type": "speech",
      "prompt": "What device is this?",
      "answer": "Computer",
      "expected": "Computer",
      "options": [],
      "audioText": "What device is this?",
      "evaluation": "pronunciation",
      "micMode": "word",
      "image": "computer.png",
      "requiredAsset": "computer.png"
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
