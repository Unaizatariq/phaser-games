window.GAME_DATA = {
  "grade": "class3",
  "subject": "science",
  "skill": "speaking",
  "level": 2,
  "topic": "Animals",
  "teach": "Listen carefully, then speak the answer clearly into the microphone.",
  "examples": [
    "Cow",
    "Tiger",
    "Fish"
  ],
  "questions": [
    {
      "type": "speech",
      "prompt": "Say the herbivore animal name.",
      "answer": "Cow",
      "expected": "Cow",
      "options": [],
      "audioText": "Say the herbivore animal name.",
      "evaluation": "pronunciation",
      "micMode": "word"
    },
    {
      "type": "speech",
      "prompt": "Say the carnivore animal name.",
      "answer": "Tiger",
      "expected": "Tiger",
      "options": [],
      "audioText": "Say the carnivore animal name.",
      "evaluation": "pronunciation",
      "micMode": "word"
    },
    {
      "type": "speech",
      "prompt": "Say the water animal name.",
      "answer": "Fish",
      "expected": "Fish",
      "options": [],
      "audioText": "Say the water animal name.",
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
