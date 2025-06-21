
import { useEffect, useState } from "react";

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  rotation: number;
  color: string;
  size: number;
  velocityX: number;
  velocityY: number;
  rotationSpeed: number;
}

const Confetti = () => {
  const [confettiPieces, setConfettiPieces] = useState<ConfettiPiece[]>([]);

  const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', 
    '#FFEAA7', '#DDA0DD', '#98D8E8', '#F7DC6F'
  ];

  const createConfettiPiece = (id: number): ConfettiPiece => ({
    id,
    x: Math.random() * window.innerWidth,
    y: -10,
    rotation: Math.random() * 360,
    color: colors[Math.floor(Math.random() * colors.length)],
    size: Math.random() * 8 + 4,
    velocityX: (Math.random() - 0.5) * 4,
    velocityY: Math.random() * 3 + 2,
    rotationSpeed: (Math.random() - 0.5) * 10,
  });

  useEffect(() => {
    // Create initial confetti burst
    const initialConfetti = Array.from({ length: 50 }, (_, i) => 
      createConfettiPiece(i)
    );
    setConfettiPieces(initialConfetti);

    // Animation loop
    const animationInterval = setInterval(() => {
      setConfettiPieces(prev => 
        prev.map(piece => ({
          ...piece,
          x: piece.x + piece.velocityX,
          y: piece.y + piece.velocityY,
          rotation: piece.rotation + piece.rotationSpeed,
          velocityY: piece.velocityY + 0.1, // gravity
        })).filter(piece => piece.y < window.innerHeight + 100)
      );
    }, 16);

    // Clean up after 5 seconds
    const cleanupTimeout = setTimeout(() => {
      clearInterval(animationInterval);
      setConfettiPieces([]);
    }, 5000);

    return () => {
      clearInterval(animationInterval);
      clearTimeout(cleanupTimeout);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {confettiPieces.map(piece => (
        <div
          key={piece.id}
          className="absolute transition-none"
          style={{
            left: `${piece.x}px`,
            top: `${piece.y}px`,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: piece.color,
            transform: `rotate(${piece.rotation}deg)`,
            borderRadius: Math.random() > 0.5 ? '50%' : '0%',
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;
