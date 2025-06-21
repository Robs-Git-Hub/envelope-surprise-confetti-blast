
import { useState } from "react";
import Envelope from "@/components/Envelope";
import BirthdayCard from "@/components/BirthdayCard";
import Confetti from "@/components/Confetti";

const Index = () => {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleEnvelopeClick = () => {
    if (!isEnvelopeOpen) {
      setIsEnvelopeOpen(true);
      // Delay card appearance to sync with envelope animation
      setTimeout(() => {
        setShowCard(true);
        setShowConfetti(true);
      }, 800);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-300 flex items-center justify-center p-4 overflow-hidden">
      {showConfetti && <Confetti />}
      
      <div className="relative">
        <Envelope 
          isOpen={isEnvelopeOpen} 
          onClick={handleEnvelopeClick}
        />
        
        {showCard && (
          <BirthdayCard />
        )}
      </div>
      
      {!isEnvelopeOpen && (
        <div className="absolute bottom-8 text-center text-white/80 font-medium">
          <p className="text-lg mb-2">🎉 You have a special message!</p>
          <p className="text-sm">Click the envelope to open</p>
        </div>
      )}
    </div>
  );
};

export default Index;
