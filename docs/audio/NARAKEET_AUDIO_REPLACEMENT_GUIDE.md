# Narakeet Urdu/English Narration Replacement Guide

Use Narakeet or another high-quality TTS tool to export narration as `.mp3` files, then connect them to each question without changing gameplay logic.

Recommended folder pattern:

```text
features/games/assets/audio/narration/<subject>/<grade>/<mode>/level-<level>/q1.mp3
```

Example:

```text
features/games/assets/audio/narration/urdu/class1/reading/level-1/q1.mp3
```

Then in the relevant `gameData.js` question object, add one of these fields:

```js
audioSrc: 'assets/audio/narration/urdu/class1/reading/level-1/q1.mp3'
```

or:

```js
audioFile: 'q1.mp3'
```

`audioFile` is automatically resolved by the shared engine using subject, grade, mode, and level.

The engine still falls back to browser TTS when no narration file exists, but real MP3 files provide the best Urdu quality.
