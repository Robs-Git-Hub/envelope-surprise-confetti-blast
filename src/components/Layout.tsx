
import { useState, useEffect } from "react";
import Envelope from "./Envelope";
import BirthdayCard from "./BirthdayCard";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => setIsVisible(true), 700); // match flap open timing
  };

  return (
    <div className="relative w-80 mx-auto mt-24 overflow-visible">
      {/* Envelope */}
      <Envelope isOpen={isOpen} onClick={handleOpen} />

      {/* Clipping zone to simulate card rising from envelope */}
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 z-30 overflow-hidden h-48 w-full">
        <div className={`
          transition-all duration-2000 ease-out transform 
          ${isVisible ? '-translate-y-40 opacity-100' : 'translate-y-full opacity-0'}
        `}>
          <BirthdayCard />
        </div>
      </div>
    </div>
  );
};

export default Layout;