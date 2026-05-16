window.GAME_DATA = {
  "grade": "class5",
  "subject": "english",
  "skill": "speaking",
  "level": 5,
  "topic": "Sentence Speaking",
  "teach": "Listen carefully, then speak the answer clearly into the microphone.",
  "examples": [
    "I go to school every day.",
    "I use a computer to study.",
    "My best friend is very kind."
  ],
  "questions": [
    {
      "type": "speech",
      "prompt": "Speak a sentence using the word 'school'.",
      "answer": "I go to school every day.",
      "expected": "I go to school every day.",
      "options": [],
      "audioText": "Speak a sentence using the word 'school'.",
      "evaluation": "semantic",
      "micMode": "extended"
    },
    {
      "type": "speech",
      "prompt": "Speak a sentence using the word 'computer'.",
      "answer": "I use a computer to study.",
      "expected": "I use a computer to study.",
      "options": [],
      "audioText": "Speak a sentence using the word 'computer'.",
      "evaluation": "semantic",
      "micMode": "extended"
    },
    {
      "type": "speech",
      "prompt": "Speak a sentence about your best friend.",
      "answer": "My best friend is very kind.",
      "expected": "My best friend is very kind.",
      "options": [],
      "audioText": "Speak a sentence about your best friend.",
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
