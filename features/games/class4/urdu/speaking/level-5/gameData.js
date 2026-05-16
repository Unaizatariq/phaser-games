window.GAME_DATA = {
  "grade": "class4",
  "subject": "urdu",
  "skill": "speaking",
  "level": 5,
  "topic": "گرامر درستگی",
  "teach": "سنیں، پھر مائیکروفون میں واضح جواب بولیں۔",
  "examples": [
    "میں اسکول جاتا ہوں۔",
    "وہ کتاب پڑھتا ہے۔",
    "بچے کھیل رہے ہیں۔"
  ],
  "questions": [
    {
      "type": "speech",
      "prompt": "غلط جملہ :میں اسکول جاتا ہے۔",
      "answer": "میں اسکول جاتا ہوں۔",
      "expected": "میں اسکول جاتا ہوں۔",
      "options": [],
      "audioText": "غلط جملہ :میں اسکول جاتا ہے۔",
      "evaluation": "semantic",
      "micMode": "extended"
    },
    {
      "type": "speech",
      "prompt": "غلط جملہ :وہ کتاب پڑھتا ہیں۔",
      "answer": "وہ کتاب پڑھتا ہے۔",
      "expected": "وہ کتاب پڑھتا ہے۔",
      "options": [],
      "audioText": "غلط جملہ :وہ کتاب پڑھتا ہیں۔",
      "evaluation": "semantic",
      "micMode": "extended"
    },
    {
      "type": "speech",
      "prompt": "غلط جملہ :بچے کھیل رہا ہے۔",
      "answer": "بچے کھیل رہے ہیں۔",
      "expected": "بچے کھیل رہے ہیں۔",
      "options": [],
      "audioText": "غلط جملہ :بچے کھیل رہا ہے۔",
      "evaluation": "semantic",
      "micMode": "extended"
    },
    {
      "type": "speech",
      "prompt": "غلط جملہ :سارہ پانی پیتا ہے۔",
      "answer": "سارہ پانی پیتی ہے۔",
      "expected": "سارہ پانی پیتی ہے۔",
      "options": [],
      "audioText": "غلط جملہ :سارہ پانی پیتا ہے۔",
      "evaluation": "semantic",
      "micMode": "extended"
    },
    {
      "type": "speech",
      "prompt": "غلط جملہ :ہم بازار گیا۔",
      "answer": "ہم بازار گئے۔",
      "expected": "ہم بازار گئے۔",
      "options": [],
      "audioText": "غلط جملہ :ہم بازار گیا۔",
      "evaluation": "semantic",
      "micMode": "extended"
    }
  ],
  "lang": "ur-PK",
  "rtl": true,
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
