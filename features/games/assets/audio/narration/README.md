# DIYAA Neural Narration Audio

This folder is ready for realistic Pakistani child/teacher narration MP3 files.

The game now checks for MP3 narration first. If the MP3 is present, it plays the studio-quality audio. If the MP3 is missing, it falls back to browser SpeechSynthesis using PK-English/PK-Urdu voice preferences.

## Folder format

Place generated narration files like this:

```text
features/games/assets/audio/narration/<subject>/<grade>/<mode>/level-<level>/<mode>-<questionNumber>.mp3
```

Examples:

```text
features/games/assets/audio/narration/english/class1/reading/level-1/reading-01.mp3
features/games/assets/audio/narration/urdu/class1/reading/level-1/reading-01.mp3
features/games/assets/audio/narration/science/class3/reading/level-4/reading-02.mp3
```

## Manifest

`diyaa-narration-manifest.json` lists every narration line found in the game data and the exact `targetAudio` path where its generated MP3 should be saved.

## Voice profile goal

- Reading: Pakistani school child voice, age 8-12, clear, innocent, energetic, slightly slow.
- Instructions/dialogue: warm Pakistani classroom teacher / friendly game narrator.
- Urdu: natural Pakistani Urdu pronunciation and intonation.
- English: soft Pakistani English accent, easy for local students.

## Fallback behavior

If an audio file is missing or blocked, the game automatically uses browser TTS. This keeps every level playable while production narration is being generated.
