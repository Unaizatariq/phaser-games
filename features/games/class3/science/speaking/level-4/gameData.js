window.GAME_DATA = {
  "grade": "class3",
  "subject": "science",
  "skill": "speaking",
  "level": 4,
  "topic": "Explain the Picture",
  "teach": "Listen carefully, then speak the answer clearly into the microphone.",
  "examples": [
    "It is raining heavily.",
    "People are cleaning the park.",
    "Healthy food keeps us strong."
  ],
  "questions": [
    {
      "type": "speech",
      "prompt": "Describe the weather in the picture.",
      "answer": "It is raining heavily.",
      "expected": "It is raining heavily.",
      "options": [],
      "audioText": "Describe the weather in the picture.",
      "evaluation": "semantic",
      "micMode": "extended",
      "image": "rainy_weather.png",
      "requiredAsset": "rainy_weather.png"
    },
    {
      "type": "speech",
      "prompt": "Explain the clean environment picture.",
      "answer": "People are cleaning the park.",
      "expected": "People are cleaning the park.",
      "options": [],
      "audioText": "Explain the clean environment picture.",
      "evaluation": "semantic",
      "micMode": "extended",
      "image": "clean_park.png",
      "requiredAsset": "clean_park.png"
    },
    {
      "type": "speech",
      "prompt": "Describe the healthy food picture.",
      "answer": "Healthy food keeps us strong.",
      "expected": "Healthy food keeps us strong.",
      "options": [],
      "audioText": "Describe the healthy food picture.",
      "evaluation": "semantic",
      "micMode": "extended",
      "image": "healthy_food.png",
      "requiredAsset": "healthy_food.png"
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
