const fs = require('fs');
const path = require('path');

const grades = ['nursery', 'kg', 'class1', 'class2', 'class3', 'class4', 'class5'];
const skills = ['reading', 'writing', 'listening', 'speaking'];
const baseDir = path.join(__dirname, '..', 'features', 'games');

const catalog = [];

grades.forEach(grade => {
  const gradePath = path.join(baseDir, grade);
  if (!fs.existsSync(gradePath)) return;

  const subjects = fs.readdirSync(gradePath).filter(f => {
    return fs.statSync(path.join(gradePath, f)).isDirectory() && f !== 'shared' && f !== 'assets';
  });

  subjects.forEach(subject => {
    const subjectPath = path.join(gradePath, subject);
    
    skills.forEach(skill => {
      const skillPath = path.join(subjectPath, skill);
      if (!fs.existsSync(skillPath)) return;

      // We only take levels 1, 2, and 3
      [1, 2, 3].forEach(levelNum => {
        const levelDir = `level-${levelNum}`;
        const levelPath = path.join(skillPath, levelDir);
        if (!fs.existsSync(levelPath)) return;

        const gameDataPath = path.join(levelPath, 'gameData.js');
        if (!fs.existsSync(gameDataPath)) return;

        try {
          const content = fs.readFileSync(gameDataPath, 'utf8');
          // Match the topic from window.GAME_DATA = { ... "topic": "..." }
          const topicMatch = content.match(/"topic"\s*:\s*"([^"]+)"/);
          const topic = topicMatch ? topicMatch[1] : `Level ${levelNum}`;

          catalog.push({
            id: `${grade}-${subject}-${skill}-l${levelNum}`,
            grade: grade,
            subject: subject,
            skill: skill,
            level: levelNum,
            topic: topic,
            path: `games/${grade}/${subject}/${skill}/${levelDir}/index.html`
          });
        } catch (err) {
          console.error(`Error reading ${gameDataPath}:`, err);
        }
      });
    });
  });
});

const outputPath = path.join(__dirname, '..', 'features', 'games_catalog.json');
fs.writeFileSync(outputPath, JSON.stringify(catalog, null, 2), 'utf8');
console.log(`Successfully generated catalog with ${catalog.length} games at ${outputPath}`);
