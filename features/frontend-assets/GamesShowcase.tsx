import React, { useState, useEffect } from 'react';
import { GameIframe, GameCompletedPayload } from './GameIframe';
import rawGamesCatalog from './games_catalog.json';

interface GameItem {
  id: string;
  grade: string;
  subject: string;
  skill: string;
  level: number;
  topic: string;
  path: string;
}

export const GamesShowcase: React.FC = () => {
  const gamesCatalog = rawGamesCatalog as GameItem[];

  // State Management
  const [selectedGrade, setSelectedGrade] = useState<string>('class1');
  const [selectedSubject, setSelectedSubject] = useState<string>('english');
  const [selectedSkill, setSelectedSkill] = useState<string>('all');
  const [selectedGame, setSelectedGame] = useState<GameItem | null>(null);
  const [completedGames, setCompletedGames] = useState<Record<string, GameCompletedPayload>>({});
  const [stats, setStats] = useState({ score: 0, stars: 0, completedCount: 0 });

  // Load completed levels progress from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('diyaa_phaser_completed_games');
      if (stored) {
        const parsed = JSON.parse(stored);
        setCompletedGames(parsed);
        calculateStats(parsed);
      }
    } catch (e) {
      console.error('Error loading progress from localStorage:', e);
    }
  }, []);

  const calculateStats = (completed: Record<string, GameCompletedPayload>) => {
    let totalScore = 0;
    let totalStars = 0;
    const ids = Object.keys(completed);
    ids.forEach((id) => {
      totalScore += completed[id].score || 0;
      totalStars += completed[id].stars || 0;
    });
    setStats({
      score: totalScore,
      stars: totalStars,
      completedCount: ids.length,
    });
  };

  // Handle Game Completion Callback
  const handleGameComplete = (payload: GameCompletedPayload) => {
    if (selectedGame) {
      const updated = {
        ...completedGames,
        [selectedGame.id]: payload,
      };
      setCompletedGames(updated);
      calculateStats(updated);
      localStorage.setItem('diyaa_phaser_completed_games', JSON.stringify(updated));

      // Quick visual completion notification
      setTimeout(() => {
        alert(`🏆 Congratulations! You completed "${selectedGame.topic}"!\nStars: ${'⭐'.repeat(payload.stars)} | Score: ${payload.score} XP`);
        setSelectedGame(null);
      }, 800);
    }
  };

  // Get available subjects for the currently selected grade
  const availableSubjects = Array.from(
    new Set(
      gamesCatalog
        .filter((game) => game.grade === selectedGrade)
        .map((game) => game.subject)
    )
  );

  // If selected subject is not available in the new grade, reset it to the first available subject
  useEffect(() => {
    if (availableSubjects.length > 0 && !availableSubjects.includes(selectedSubject)) {
      setSelectedSubject(availableSubjects[0]);
    }
  }, [selectedGrade]);

  // Filter games based on Grade, Subject and Skill
  const filteredGames = gamesCatalog.filter((game) => {
    const matchesGrade = game.grade === selectedGrade;
    const matchesSubject = game.subject === selectedSubject;
    const matchesSkill = selectedSkill === 'all' ? true : game.skill === selectedSkill;
    return matchesGrade && matchesSubject && matchesSkill;
  });

  // Display Helper maps
  const gradeLabels: Record<string, string> = {
    nursery: '👶 Nursery',
    kg: '🧸 KG / Prep',
    class1: '🎒 Class 1',
    class2: '🏫 Class 2',
    class3: '📖 Class 3',
    class4: '🔬 Class 4',
    class5: '🚀 Class 5',
  };

  const subjectMeta: Record<string, { label: string; color: string; icon: string }> = {
    english: { label: 'English', color: 'linear-gradient(135deg, #3b82f6, #1d4ed8)', icon: '🇬🇧' },
    urdu: { label: 'Urdu', color: 'linear-gradient(135deg, #10b981, #047857)', icon: '🇵🇰' },
    maths: { label: 'Mathematics', color: 'linear-gradient(135deg, #f59e0b, #d97706)', icon: '🔢' },
    science: { label: 'Science', color: 'linear-gradient(135deg, #8b5cf6, #6d28d9)', icon: '🧪' },
    computer: { label: 'Computer Studies', color: 'linear-gradient(135deg, #06b6d4, #0891b2)', icon: '💻' },
  };

  const skillLabels: Record<string, { label: string; icon: string; badgeColor: string }> = {
    reading: { label: 'Reading', icon: '📖', badgeColor: '#ebf5ff' },
    listening: { label: 'Listening', icon: '🎧', badgeColor: '#fef3c7' },
    speaking: { label: 'Speaking', icon: '🗣️', badgeColor: '#ecfdf5' },
    writing: { label: 'Writing', icon: '✏️', badgeColor: '#f5f3ff' },
  };

  return (
    <div style={styles.container}>
      {/* Header Profile Dashboard */}
      <header style={styles.header}>
        <div>
          <h1 style={styles.title}>DIYAA Games Hub</h1>
          <p style={styles.subtitle}>Play, Learn, and Master reading, listening, speaking & writing skills!</p>
        </div>
        
        {/* Progress Tracker Widget */}
        <div style={styles.statsCard}>
          <div style={styles.statItem}>
            <span style={styles.statIcon}>🏆</span>
            <div>
              <div style={styles.statValue}>{stats.score} XP</div>
              <div style={styles.statLabel}>Total Score</div>
            </div>
          </div>
          <div style={styles.statItem}>
            <span style={styles.statIcon}>⭐</span>
            <div>
              <div style={styles.statValue}>{stats.stars}</div>
              <div style={styles.statLabel}>Stars Earned</div>
            </div>
          </div>
          <div style={styles.statItem}>
            <span style={styles.statIcon}>🎮</span>
            <div>
              <div style={styles.statValue}>{stats.completedCount}</div>
              <div style={styles.statLabel}>Games Completed</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Filter Toolbar */}
      <div style={styles.toolbar}>
        {/* Grade Filters */}
        <div style={styles.btnGroup}>
          {Object.entries(gradeLabels).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setSelectedGrade(key)}
              style={{
                ...styles.gradeButton,
                ...(selectedGrade === key ? styles.gradeActiveButton : {}),
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Skill Filter Dropdown */}
        <div style={styles.skillSelector}>
          <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#64748b' }}>Filter Skill:</span>
          <select
            value={selectedSkill}
            onChange={(e) => setSelectedSkill(e.target.value)}
            style={styles.dropdown}
          >
            <option value="all">⚡ All Skills</option>
            <option value="reading">📖 Reading</option>
            <option value="listening">🎧 Listening</option>
            <option value="speaking">🗣️ Speaking</option>
            <option value="writing">✏️ Writing</option>
          </select>
        </div>
      </div>

      {/* Dynamic Subjects Tab Navigation */}
      <div style={styles.subjectNavbar}>
        {availableSubjects.map((subKey) => {
          const meta = subjectMeta[subKey] || { label: subKey, color: '#64748b', icon: '📚' };
          const isActive = selectedSubject === subKey;
          return (
            <button
              key={subKey}
              onClick={() => setSelectedSubject(subKey)}
              style={{
                ...styles.subjectTab,
                ...(isActive
                  ? {
                      background: meta.color,
                      color: '#ffffff',
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                      transform: 'translateY(-2px)',
                    }
                  : {}),
              }}
            >
              <span style={{ marginRight: '8px', fontSize: '20px' }}>{meta.icon}</span>
              {meta.label}
            </button>
          );
        })}
      </div>

      {/* Games Catalog Grid */}
      <main style={styles.gridSection}>
        <h3 style={styles.sectionHeader}>
          {gradeLabels[selectedGrade]} &gt; {subjectMeta[selectedSubject]?.label || selectedSubject} Games ({filteredGames.length})
        </h3>
        
        {filteredGames.length === 0 ? (
          <div style={styles.noGames}>
            <span style={{ fontSize: '48px', marginBottom: '12px' }}>🔍</span>
            <h3>No games found</h3>
            <p>Try changing the selected skill or grade filters above.</p>
          </div>
        ) : (
          <div style={styles.grid}>
            {filteredGames.map((game) => {
              const isCompleted = !!completedGames[game.id];
              const result = completedGames[game.id];
              const skillInfo = skillLabels[game.skill] || { label: game.skill, icon: '🎮', badgeColor: '#f1f5f9' };
              const subMeta = subjectMeta[game.subject] || { color: '#3b82f6' };

              return (
                <div
                  key={game.id}
                  style={{
                    ...styles.card,
                    ...(isCompleted ? styles.cardCompleted : {}),
                  }}
                >
                  <div style={styles.cardHeader}>
                    <span style={{ ...styles.badge, backgroundColor: skillInfo.badgeColor }}>
                      <span style={{ marginRight: '4px' }}>{skillInfo.icon}</span>
                      {skillInfo.label}
                    </span>
                    {isCompleted ? (
                      <span style={styles.completedBadge}>
                        {'⭐'.repeat(result?.stars || 3)}
                      </span>
                    ) : (
                      <span style={styles.levelBadge}>Lvl {game.level}</span>
                    )}
                  </div>

                  <div style={styles.cardBody}>
                    <h4 style={styles.cardTopic}>{game.topic}</h4>
                    <p style={styles.cardPath}>{game.path}</p>
                  </div>

                  <div style={styles.cardFooter}>
                    <button
                      onClick={() => setSelectedGame(game)}
                      style={{
                        ...styles.playButton,
                        background: subMeta.color,
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.filter = 'brightness(1.15)')}
                      onMouseLeave={(e) => (e.currentTarget.style.filter = 'none')}
                    >
                      {isCompleted ? '🔄 Replay Game' : '🚀 Play Level'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      {/* Render Iframe when playing */}
      {selectedGame && (
        <GameIframe
          gamePath={selectedGame.path}
          studentId="student-777"
          grade={selectedGame.grade}
          subject={selectedGame.subject}
          skill={selectedGame.skill}
          level={selectedGame.level}
          token="diyaa-secure-jwt-authentication-token"
          onGameComplete={handleGameComplete}
          onClose={() => setSelectedGame(null)}
        />
      )}
    </div>
  );
};

// Vanilla React Inline Styles for seamless zero-dependency deployment
const styles: Record<string, React.CSSProperties> = {
  container: {
    fontFamily: '"Outfit", "Inter", sans-serif',
    padding: '24px',
    backgroundColor: '#f8fafc',
    minHeight: '100vh',
    color: '#1e293b',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '20px',
    borderBottom: '1px solid #e2e8f0',
    paddingBottom: '20px',
    marginBottom: '24px',
  },
  title: {
    fontSize: '32px',
    fontWeight: 900,
    background: 'linear-gradient(to right, #1e293b, #3b82f6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    margin: 0,
  },
  subtitle: {
    fontSize: '16px',
    color: '#64748b',
    margin: '4px 0 0 0',
  },
  statsCard: {
    display: 'flex',
    gap: '16px',
    backgroundColor: '#ffffff',
    padding: '16px 24px',
    borderRadius: '16px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
    border: '1px solid #e2e8f0',
  },
  statItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  statIcon: {
    fontSize: '28px',
  },
  statValue: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#1e293b',
  },
  statLabel: {
    fontSize: '11px',
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '16px',
    marginBottom: '20px',
  },
  btnGroup: {
    display: 'flex',
    backgroundColor: '#e2e8f0',
    padding: '4px',
    borderRadius: '12px',
    gap: '4px',
  },
  gradeButton: {
    border: 'none',
    backgroundColor: 'transparent',
    padding: '8px 16px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    color: '#475569',
    transition: 'all 0.2s',
  },
  gradeActiveButton: {
    backgroundColor: '#ffffff',
    color: '#1e293b',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  },
  skillSelector: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  dropdown: {
    padding: '8px 16px',
    borderRadius: '10px',
    border: '1px solid #cbd5e1',
    backgroundColor: '#ffffff',
    cursor: 'pointer',
    fontWeight: 'bold',
    color: '#334155',
    outline: 'none',
  },
  subjectNavbar: {
    display: 'flex',
    gap: '12px',
    overflowX: 'auto',
    paddingBottom: '8px',
    marginBottom: '24px',
  },
  subjectTab: {
    border: 'none',
    backgroundColor: '#ffffff',
    color: '#475569',
    padding: '12px 24px',
    borderRadius: '12px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '15px',
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)',
    border: '1px solid #e2e8f0',
    transition: 'all 0.2s',
    whiteSpace: 'nowrap',
  },
  gridSection: {
    marginTop: '16px',
  },
  sectionHeader: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#334155',
    marginBottom: '16px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '20px',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '20px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
    border: '1px solid #e2e8f0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'transform 0.2s, box-shadow 0.2s',
    minHeight: '200px',
  },
  cardCompleted: {
    border: '2px solid #10b981',
    backgroundColor: 'rgba(16, 185, 129, 0.02)',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '14px',
  },
  badge: {
    fontSize: '11px',
    fontWeight: 'bold',
    padding: '4px 10px',
    borderRadius: '9999px',
    textTransform: 'uppercase',
    color: '#1e293b',
  },
  levelBadge: {
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#64748b',
    backgroundColor: '#f1f5f9',
    padding: '2px 8px',
    borderRadius: '4px',
  },
  completedBadge: {
    fontSize: '12px',
    fontWeight: 'bold',
    backgroundColor: '#d1fae5',
    color: '#065f46',
    padding: '2px 8px',
    borderRadius: '4px',
  },
  cardBody: {
    flexGrow: 1,
    marginBottom: '16px',
  },
  cardTopic: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#1e293b',
    margin: '0 0 8px 0',
    lineHeight: 1.3,
  },
  cardPath: {
    fontSize: '10px',
    fontFamily: 'monospace',
    color: '#94a3b8',
    margin: 0,
    wordBreak: 'break-all',
  },
  cardFooter: {
    marginTop: 'auto',
  },
  playButton: {
    border: 'none',
    color: '#ffffff',
    width: '100%',
    padding: '12px 16px',
    borderRadius: '12px',
    fontWeight: 'bold',
    fontSize: '14px',
    cursor: 'pointer',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.2s',
  },
  noGames: {
    textAlign: 'center',
    padding: '48px 24px',
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    border: '1px dashed #cbd5e1',
    color: '#64748b',
  },
};
