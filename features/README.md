# DIYAA Phaser Curriculum Games

Fresh Phaser build generated from the curriculum game data.

## Structure
`features/games/{grade}/{subject}/{skill}/level-{number}/index.html`

## Integration
Copy `features/games` into `frontend/public/games`, then use paths like:
`/games/class1/english/reading/level-1/index.html`

For speaking games in an iframe, use:
`<iframe src={game.path} allow="microphone; autoplay" />`

## Notes
- Uses Phaser 3.80.1 CDN.
- Sound effects use `right.mp3`, `wrong.mp3`, and `level-complete.mp3` with absolute + relative path support.
- Reading mode uses teacher voice and word-by-word highlighting.
- Browser TTS voice quality depends on installed browser/OS voices. Chrome/Edge on localhost or HTTPS is required for speech recognition.

Total levels: 1404
