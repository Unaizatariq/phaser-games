# React Iframe Integration Setup & Class 1 Showcase

This guide provides the complete reusable setup for integrating the standalone Phaser curriculum games into your separate React (Vite/Next.js) frontend repository, complete with a realistic **Class 1 Showcase Component** spanning all 5 subjects across Reading, Listening, Speaking, and Writing.

---

## 1. Environment Configuration (`.env`)

In your React frontend root directory, add the following environment variable to your `.env` file:

```env
VITE_GAMES_URL=http://localhost:5500
```

---

## 2. Reusable Game Iframe Component (`components/GameIframe.tsx`)

Create a reusable component `GameIframe.tsx` that handles iframe rendering, URL parameters, and secure `postMessage` communication.

```tsx
import React, { useEffect, useRef, useState } from 'react';

export interface GameCompletedPayload {
  score: number;
  stars: number;
  correct: number;
  wrong: number;
  completed: boolean;
  level: number;
}

export interface GameIframeProps {
  gamePath: string;
  studentId: string | number;
  grade: string;
  subject: string;
  skill: string;
  level: number;
  token: string;
  onGameComplete: (payload: GameCompletedPayload) => void;
  onClose?: () => void;
}

export const GameIframe: React.FC<GameIframeProps> = ({
  gamePath,
  studentId,
  grade,
  subject,
  skill,
  level,
  token,
  onGameComplete,
  onClose,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Retrieve base games server URL from environment variables
  const gamesBaseUrl = import.meta.env.VITE_GAMES_URL || 'http://localhost:5500';

  // Construct secure iframe source URL with query parameters
  const cleanPath = gamePath.startsWith('/') ? gamePath.slice(1) : gamePath;
  const iframeSrc = `${gamesBaseUrl}/${cleanPath}?studentId=${encodeURIComponent(studentId)}&grade=${encodeURIComponent(grade)}&subject=${encodeURIComponent(subject)}&skill=${encodeURIComponent(skill)}&level=${encodeURIComponent(level)}&token=${encodeURIComponent(token)}&origin=${encodeURIComponent(window.location.origin)}`;

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Security Validation: Verify origin matches games server URL
      if (event.origin !== gamesBaseUrl) {
        return;
      }

      try {
        const data = event.data;

        // Handle Game Completed Message
        if (data && data.type === 'GAME_COMPLETED' && data.payload) {
          onGameComplete(data.payload as GameCompletedPayload);
        }

        // Handle Home / Close Message from Phaser Game HUD
        if (data && (data.type === 'DIYAA_GAME_HOME' || data.type === 'GAME_HOME')) {
          onClose && onClose();
        }
      } catch (error) {
        console.error('Error handling game iframe postMessage:', error);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [gamesBaseUrl, onGameComplete, onClose]);

  return (
    <div className="relative w-screen h-screen bg-[#0f172a] flex items-center justify-center overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0f172a] text-white z-20">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-lg font-bold tracking-wide animate-pulse">Loading DIYAA Game Level...</p>
        </div>
      )}

      <iframe
        ref={iframeRef}
        src={iframeSrc}
        onLoad={() => setIsLoading(false)}
        allow="microphone; autoplay; fullscreen"
        className="w-full h-full border-none block"
        style={{ width: '100vw', height: '100vh', aspectRatio: '16/9' }}
      />

      {/* Floating Exit Button for safety */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 left-4 z-30 bg-slate-800/80 hover:bg-red-600 text-white font-bold px-4 py-2 rounded-full shadow-lg transition-all backdrop-blur-md border border-white/20 flex items-center justify-center space-x-2"
          title="Exit Game"
        >
          <span>✕ Exit Game</span>
        </button>
      )}
    </div>
  );
};
```

---

## 3. Class 1 Full Subject Showcase (`components/Class1Showcase.tsx`)

Here is an out-of-the-box React component containing real catalog paths for **Grade 1 (Class 1)** across all 5 subjects (`English`, `Urdu`, `Maths`, `Science`, `Computer`) and all 4 skills (`Reading`, `Listening`, `Speaking`, `Writing`).

```tsx
import React, { useState } from 'react';
import { GameIframe, GameCompletedPayload } from './GameIframe';

interface LevelItem {
  id: string;
  grade: string;
  subject: string;
  skill: string;
  level: number;
  topic: string;
  path: string;
  color: string;
}

export const Class1Showcase: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<LevelItem | null>(null);
  const [completedGames, setCompletedGames] = useState<Record<string, GameCompletedPayload>>({});

  const class1Games: LevelItem[] = [
    // ----------------- ENGLISH -----------------
    { id: 'en-read', grade: 'class1', subject: 'english', skill: 'reading', level: 1, topic: 'Pronouns', path: 'games/class1/english/reading/level-1/index.html', color: 'from-blue-600 to-indigo-600' },
    { id: 'en-list', grade: 'class1', subject: 'english', skill: 'listening', level: 1, topic: 'Verbs', path: 'games/class1/english/listening/level-1/index.html', color: 'from-blue-600 to-indigo-600' },
    { id: 'en-spea', grade: 'class1', subject: 'english', skill: 'speaking', level: 1, topic: 'Vocabulary Speaking', path: 'games/class1/english/speaking/level-1/index.html', color: 'from-blue-600 to-indigo-600' },
    { id: 'en-writ', grade: 'class1', subject: 'english', skill: 'writing', level: 1, topic: 'Keyboard Typing', path: 'games/class1/english/writing/level-1/index.html', color: 'from-blue-600 to-indigo-600' },

    // ----------------- URDU -----------------
    { id: 'ur-read', grade: 'class1', subject: 'urdu', skill: 'reading', level: 1, topic: 'حروف تہجی', path: 'games/class1/urdu/reading/level-1/index.html', color: 'from-emerald-600 to-teal-600' },
    { id: 'ur-list', grade: 'class1', subject: 'urdu', skill: 'listening', level: 1, topic: 'حروف اور الفاظ کی پہچان', path: 'games/class1/urdu/listening/level-1/index.html', color: 'from-emerald-600 to-teal-600' },
    { id: 'ur-spea', grade: 'class1', subject: 'urdu', skill: 'speaking', level: 1, topic: 'الفاظ کی ادائیگی', path: 'games/class1/urdu/speaking/level-1/index.html', color: 'from-emerald-600 to-teal-600' },
    { id: 'ur-writ', grade: 'class1', subject: 'urdu', skill: 'writing', level: 1, topic: 'لفظ ٹائپنگ', path: 'games/class1/urdu/writing/level-1/index.html', color: 'from-emerald-600 to-teal-600' },

    // ----------------- MATHS -----------------
    { id: 'ma-read', grade: 'class1', subject: 'maths', skill: 'reading', level: 1, topic: 'Counting Numbers', path: 'games/class1/maths/reading/level-1/index.html', color: 'from-amber-500 to-orange-600' },
    { id: 'ma-list', grade: 'class1', subject: 'maths', skill: 'listening', level: 1, topic: 'Addition', path: 'games/class1/maths/listening/level-1/index.html', color: 'from-amber-500 to-orange-600' },
    { id: 'ma-spea', grade: 'class1', subject: 'maths', skill: 'speaking', level: 1, topic: 'Addition and Subtraction', path: 'games/class1/maths/speaking/level-1/index.html', color: 'from-amber-500 to-orange-600' },
    { id: 'ma-writ', grade: 'class1', subject: 'maths', skill: 'writing', level: 1, topic: 'Addition Writing', path: 'games/class1/maths/writing/level-1/index.html', color: 'from-amber-500 to-orange-600' },

    // ----------------- SCIENCE -----------------
    { id: 'sc-read', grade: 'class1', subject: 'science', skill: 'reading', level: 1, topic: 'My Body', path: 'games/class1/science/reading/level-1/index.html', color: 'from-purple-600 to-fuchsia-600' },
    { id: 'sc-list', grade: 'class1', subject: 'science', skill: 'listening', level: 1, topic: 'Body Parts Listening', path: 'games/class1/science/listening/level-1/index.html', color: 'from-purple-600 to-fuchsia-600' },
    { id: 'sc-spea', grade: 'class1', subject: 'science', skill: 'speaking', level: 1, topic: 'Speak Body Parts', path: 'games/class1/science/speaking/level-1/index.html', color: 'from-purple-600 to-fuchsia-600' },
    { id: 'sc-writ', grade: 'class1', subject: 'science', skill: 'writing', level: 1, topic: 'Body Parts Writing', path: 'games/class1/science/writing/level-1/index.html', color: 'from-purple-600 to-fuchsia-600' },

    // ----------------- COMPUTER -----------------
    { id: 'co-read', grade: 'class1', subject: 'computer', skill: 'reading', level: 1, topic: 'What is a Computer?', path: 'games/class1/computer/reading/level-1/index.html', color: 'from-cyan-600 to-blue-700' },
    { id: 'co-list', grade: 'class1', subject: 'computer', skill: 'listening', level: 1, topic: 'Introduction to Computer', path: 'games/class1/computer/listening/level-1/index.html', color: 'from-cyan-600 to-blue-700' },
    { id: 'co-spea', grade: 'class1', subject: 'computer', skill: 'speaking', level: 1, topic: 'Computer Vocabulary', path: 'games/class1/computer/speaking/level-1/index.html', color: 'from-cyan-600 to-blue-700' },
    { id: 'co-writ', grade: 'class1', subject: 'computer', skill: 'writing', level: 1, topic: 'Vocabulary Typing', path: 'games/class1/computer/writing/level-1/index.html', color: 'from-cyan-600 to-blue-700' },
  ];

  const handleGameComplete = (payload: GameCompletedPayload) => {
    if (selectedGame) {
      setCompletedGames((prev) => ({
        ...prev,
        [selectedGame.id]: payload,
      }));
      setTimeout(() => {
        alert(`🎉 Level Completed! XP: ${payload.score} | Stars: {'★'.repeat(payload.stars)}`);
        setSelectedGame(null);
      }, 600);
    }
  };

  const groupedGames = class1Games.reduce((acc, game) => {
    if (!acc[game.subject]) acc[game.subject] = [];
    acc[game.subject].push(game);
    return acc;
  }, {} as Record<string, LevelItem[]>);

  return (
    <div className="p-8 max-w-6xl mx-auto bg-slate-50 min-h-screen text-slate-800 font-sans">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
          🎓 DIYAA Grade 1 (Class 1) Curriculum Map
        </h1>
        <p className="text-lg text-slate-600">
          Select any subject and skill below to test the live iframe integration
        </p>
      </header>

      {Object.entries(groupedGames).map(([subject, games]) => (
        <section key={subject} className="mb-12">
          <h2 className="text-2xl font-bold uppercase tracking-wider text-slate-800 mb-6 flex items-center space-x-2 border-b pb-2">
            <span>📚 Subject: {subject}</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {games.map((game) => {
              const isCompleted = !!completedGames[game.id];
              const result = completedGames[game.id];

              return (
                <div
                  key={game.id}
                  className={`bg-white rounded-2xl p-6 shadow-md border transition-all duration-200 hover:shadow-xl flex flex-col justify-between ${
                    isCompleted ? 'border-green-500 bg-green-50/20' : 'border-slate-200'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-700">
                        {game.skill}
                      </span>
                      {isCompleted && (
                        <span className="px-2 py-0.5 rounded text-xs font-bold bg-green-600 text-white">
                          {'★'.repeat(result?.stars || 3)}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{game.topic}</h3>
                    <p className="text-xs text-slate-500 font-mono break-all">{game.path}</p>
                  </div>

                  <button
                    onClick={() => setSelectedGame(game)}
                    className={`mt-6 w-full py-3 px-4 rounded-xl font-black text-white shadow-md transition-all transform active:scale-95 bg-gradient-to-r ${game.color}`}
                  >
                    {isCompleted ? '🔄 REPLAY LEVEL' : '🚀 PLAY LEVEL'}
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      ))}

      {/* Fullscreen Iframe Modal */}
      {selectedGame && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center">
          <GameIframe
            gamePath={selectedGame.path}
            studentId="std-1001"
            grade={selectedGame.grade}
            subject={selectedGame.subject}
            skill={selectedGame.skill}
            level={selectedGame.level}
            token="sample-diyaa-jwt-auth-token"
            onGameComplete={handleGameComplete}
            onClose={() => setSelectedGame(null)}
          />
        </div>
      )}
    </div>
  );
};
```
