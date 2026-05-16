window.GAME_DATA = {
  "grade": "class5",
  "subject": "urdu",
  "skill": "speaking",
  "level": 5,
  "topic": "غلط جملہ درست کریں",
  "teach": "سنیں، پھر مائیکروفون میں واضح جواب بولیں۔",
  "examples": [
    "ہم نے کتاب پڑھی ہے۔",
    "میں کل بازار گیا تھا۔",
    "وہ اچھی لڑکی ہے۔"
  ],
  "questions": [
    {
      "type": "speech",
      "prompt": "غلط جملہ :ہم نے کتاب پڑھتا ہے۔",
      "answer": "ہم نے کتاب پڑھی ہے۔",
      "expected": "ہم نے کتاب پڑھی ہے۔",
      "options": [],
      "audioText": "غلط جملہ :ہم نے کتاب پڑھتا ہے۔",
      "evaluation": "semantic",
      "micMode": "extended"
    },
    {
      "type": "speech",
      "prompt": "غلط جملہ :میں کل بازار جاتا تھا۔",
      "answer": "میں کل بازار گیا تھا۔",
      "expected": "میں کل بازار گیا تھا۔",
      "options": [],
      "audioText": "غلط جملہ :میں کل بازار جاتا تھا۔",
      "evaluation": "semantic",
      "micMode": "extended"
    },
    {
      "type": "speech",
      "prompt": "غلط جملہ :وہ اچھے لڑکی ہے۔",
      "answer": "وہ اچھی لڑکی ہے۔",
      "expected": "وہ اچھی لڑکی ہے۔",
      "options": [],
      "audioText": "غلط جملہ :وہ اچھے لڑکی ہے۔",
      "evaluation": "semantic",
      "micMode": "extended"
    },
    {
      "type": "speech",
      "prompt": "غلط جملہ :بچے اسکول جا رہا ہے۔",
      "answer": "بچے اسکول جا رہے ہیں۔",
      "expected": "بچے اسکول جا رہے ہیں۔",
      "options": [],
      "audioText": "غلط جملہ :بچے اسکول جا رہا ہے۔",
      "evaluation": "semantic",
      "micMode": "extended"
    },
    {
      "type": "speech",
      "prompt": "غلط جملہ :پاکستان خوبصورت ملک ہیں۔",
      "answer": "پاکستان خوبصورت ملک ہے۔",
      "expected": "پاکستان خوبصورت ملک ہے۔",
      "options": [],
      "audioText": "غلط جملہ :پاکستان خوبصورت ملک ہیں۔",
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
