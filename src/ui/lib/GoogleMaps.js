import { useState, useEffect } from "react";
import SecondaryCTA from "./SecondaryCTA";

const GoogleMaps = () => {
  const [consentGiven, setConsentGiven] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedConsent = localStorage.getItem("yoga-consent-gmap");
    if (storedConsent === "true") {
      setConsentGiven(true);
    } else {
      setConsentGiven(false);
    }
  }, []);

  const handleConsent = (e) => {
    e.preventDefault();
    localStorage.setItem("yoga-consent-gmap", "true");
    setConsentGiven(true);
  };

  return (
    <div className="w-full h-100 relative">
      {consentGiven === null ? null : !consentGiven ? (
        <div className="w-full flex flex-col items-center justify-center 
          bg-gray-100 text-center p-10
          rounded-lg shadow-xl">
          <p className="text-gray-700 mb-2">
            Um die Karte zu laden, musst du der Nutzung von Google Maps zustimmen.
          </p>
          <SecondaryCTA name="Karte laden" href="#" onClickOverride={handleConsent} />
        </div>
      ) : (
        <div className="w-full h-full relative">
          {isLoading && (
            <div className="absolute inset-0 bg-gray-200 
            animate-pulse 
            flex items-center justify-center">
              <p className="text-gray-500">Lädt Google Maps...</p>
            </div>
          )}        
          <iframe
            title="Google Maps"
            className="w-full h-full rounded-lg shadow-xl"
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5221.149816774657!2d9.3673638!3d49.132708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479830918084a007%3A0x493ac73d2fd9c765!2sYoga%20Center%20Obersulm!5e0!3m2!1sde!2sde!4v1743242301514!5m2!1sde!2sde`}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ height: 500 }}
            onLoad={() => setIsLoading(false)}
          />
        </div>
      )}
    </div>
  );
};

export default GoogleMaps;
