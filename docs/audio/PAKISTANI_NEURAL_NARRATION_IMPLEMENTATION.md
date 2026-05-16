# Pakistani Neural Narration Implementation

Implemented without changing the finalized UI.

## What changed

The shared Phaser engine now supports a hybrid narration system:

1. First priority: pre-generated studio MP3 files, suitable for ElevenLabs/neural TTS Pakistani voices.
2. Fallback: browser SpeechSynthesis with PK-English/PK-Urdu preference.

This means the game can run today, and later you can add real Pakistani child/teacher narration files without changing game code.

## Exact audio lookup path

For every narration line, the engine checks:

```text
features/games/assets/audio/narration/<subject>/<grade>/<mode>/level-<level>/<mode>-01.mp3
features/games/assets/audio/narration/<subject>/<grade>/<mode>/level-<level>/<mode>-02.mp3
...
```

Example:

```text
features/games/assets/audio/narration/english/class1/reading/level-1/reading-01.mp3
```

## Word highlighting

- Browser TTS uses `SpeechSynthesisUtterance.onboundary` when available.
- Pre-generated MP3 narration uses estimated word timing by default.
- For exact studio-audio sync later, add `wordTimings` to the relevant question object.

Example:

```js
wordTimings: [
  { startMs: 0, endMs: 300 },
  { startMs: 310, endMs: 650 }
]
```

## Feedback sounds untouched

The following files are not changed:

- `right.mp3`
- `wrong.mp3`
- `level-complete.mp3`

## How to test

1. Run the game normally.
2. Open any Reading level.
3. Tap READ.
4. If the MP3 exists, it plays.
5. If the MP3 does not exist, browser TTS plays.
6. Current word still highlights green.

## Important limitation

I cannot generate or embed real ElevenLabs studio voices without your ElevenLabs API key or the generated MP3 files. This update prepares the project to use those realistic Pakistani voices immediately once the audio files are generated and placed in the manifest paths.
