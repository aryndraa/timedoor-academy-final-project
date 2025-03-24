import { useState } from "react";

export const MovieSynopsis = ({ synopsis = "" }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleReadMore = () => setIsExpanded(!isExpanded);

  const maxLength = 300; // Panjang maksimum sebelum tombol "Read More" muncul
  const shortText = synopsis.slice(0, maxLength); // Potongan teks singkat

  return (
    <div>
      <h2 className="text-xl lg:text-2xl font-medium mb-2 lg:mb-4">
        Synopsis
      </h2>
      <p className="text-sm lg:text-base text-text-400/80 font-light text-justify">
        {isExpanded ? synopsis : shortText} 
        {synopsis.length > maxLength && ( 
          <span
            className="text-primary cursor-pointer"
            onClick={toggleReadMore}
          >
            {isExpanded ? " Read Less" : "... Read More"}
          </span>
        )}
      </p>
    </div>
  );
};
