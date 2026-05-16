window.GAME_DATA = {
  "grade": "class1",
  "subject": "science",
  "skill": "speaking",
  "level": 2,
  "topic": "Living Things Speaking",
  "teach": "Listen carefully, then speak the answer clearly into the microphone.",
  "examples": [
    "Plant",
    "Cat",
    "Flower"
  ],
  "questions": [
    {
      "type": "speech",
      "prompt": "Say the living thing name: Plant",
      "answer": "Plant",
      "expected": "Plant",
      "options": [],
      "audioText": "Say the living thing name: Plant",
      "evaluation": "pronunciation",
      "micMode": "word"
    },
    {
      "type": "speech",
      "prompt": "Say the animal name: Cat",
      "answer": "Cat",
      "expected": "Cat",
      "options": [],
      "audioText": "Say the animal name: Cat",
      "evaluation": "pronunciation",
      "micMode": "word"
    },
    {
      "type": "speech",
      "prompt": "Say the plant name: Flower",
      "answer": "Flower",
      "expected": "Flower",
      "options": [],
      "audioText": "Say the plant name: Flower",
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
