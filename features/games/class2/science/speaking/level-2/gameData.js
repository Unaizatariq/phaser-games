window.GAME_DATA = {
  "grade": "class2",
  "subject": "science",
  "skill": "speaking",
  "level": 2,
  "topic": "Plants and Water",
  "teach": "Listen carefully, then speak the answer clearly into the microphone.",
  "examples": [
    "Water",
    "Leaf",
    "Seed"
  ],
  "questions": [
    {
      "type": "speech",
      "prompt": "Say what plants need to grow.",
      "answer": "Water",
      "expected": "Water",
      "options": [],
      "audioText": "Say what plants need to grow.",
      "evaluation": "pronunciation",
      "micMode": "word"
    },
    {
      "type": "speech",
      "prompt": "Say the part of plant: Leaf",
      "answer": "Leaf",
      "expected": "Leaf",
      "options": [],
      "audioText": "Say the part of plant: Leaf",
      "evaluation": "pronunciation",
      "micMode": "word"
    },
    {
      "type": "speech",
      "prompt": "Say the word: Seed",
      "answer": "Seed",
      "expected": "Seed",
      "options": [],
      "audioText": "Say the word: Seed",
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
