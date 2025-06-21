
import { useState } from "react";
import Envelope from "./Envelope";
import BirthdayCard from "./BirthdayCard";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const handleOpen = () => {
    // This function will only run once to prevent re-triggering the animation.
    if (isOpen) return; 
    
    setIsOpen(true);

    // We'll delay the card's appearance to sync with the envelope flap opening.
    setTimeout(() => {
      setShowCard(true);
    }, 500); 
  };

  return (
    // We use a flex container to center the entire scene. 
    // The padding-top gives it some space from the top of the page.
    <div className="flex justify-center items-start pt-24 w-full min-h-screen">
      {/* 
        This relative container is the "stage" for our animation. 
        It holds both the envelope and the card, creating a local coordinate system
        so they are positioned relative to each other.
      */}
      <div className="relative w-80 h-56">
        <Envelope isOpen={isOpen} onClick={handleOpen} />
        <BirthdayCard isVisible={showCard} />
      </div>
    </div>
  );
};

export default Layout;