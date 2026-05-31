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
  gamePath: string; // e.g. "games/class1/english/reading/level-1/index.html"
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

  // Retrieve base games server URL from environment variables or fallback to port 5500
  // In production, this can be your hosted server domain or empty string if copied to public folder
  const gamesBaseUrl = ((import.meta as any).env?.VITE_GAMES_URL) || 'http://localhost:5500';

  // Construct iframe source URL
  // If the path starts with "games/", and we are serving locally from public folder,
  // we can use a relative path, otherwise we prefix with gamesBaseUrl
  const isLocalStatic = gamesBaseUrl === 'local' || gamesBaseUrl === '/';
  const baseUrl = isLocalStatic ? window.location.origin : gamesBaseUrl;
  
  const cleanPath = gamePath.startsWith('/') ? gamePath.slice(1) : gamePath;
  const iframeSrc = `${baseUrl}/${cleanPath}?studentId=${encodeURIComponent(studentId)}&grade=${encodeURIComponent(grade)}&subject=${encodeURIComponent(subject)}&skill=${encodeURIComponent(skill)}&level=${encodeURIComponent(level)}&token=${encodeURIComponent(token)}&origin=${encodeURIComponent(window.location.origin)}`;

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Security Validation: Verify origin matches games server URL if not local
      if (!isLocalStatic && event.origin !== gamesBaseUrl) {
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
  }, [gamesBaseUrl, isLocalStatic, onGameComplete, onClose]);

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#0f172a',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        width: '100vw',
        height: '100vh',
      }}
    >
      {isLoading && (
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0f172a',
            color: '#ffffff',
            zIndex: 10,
            fontFamily: 'sans-serif',
          }}
        >
          {/* Animated Spinner */}
          <div 
            style={{
              width: '64px',
              height: '64px',
              border: '4px solid #3b82f6',
              borderTopColor: 'transparent',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              marginBottom: '16px',
            }}
          />
          <p style={{ fontSize: '18px', fontWeight: 'bold', letterSpacing: '0.05em' }}>
            Loading DIYAA Game Level...
          </p>
          <style>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      )}

      <iframe
        ref={iframeRef}
        src={iframeSrc}
        onLoad={() => setIsLoading(false)}
        allow="microphone; autoplay; fullscreen"
        style={{
          width: '100vw',
          height: '100vh',
          border: 'none',
          display: 'block',
        }}
      />

      {/* Floating Exit Button */}
      {onClose && (
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            left: '16px',
            zIndex: 20,
            backgroundColor: 'rgba(30, 41, 59, 0.8)',
            color: '#ffffff',
            fontWeight: 'bold',
            padding: '8px 16px',
            borderRadius: '9999px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            cursor: 'pointer',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            transition: 'background-color 0.2s',
            fontFamily: 'sans-serif',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#dc2626')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(30, 41, 59, 0.8)')}
          title="Exit Game"
        >
          ✕ Exit Game
        </button>
      )}
    </div>
  );
};
