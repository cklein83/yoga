This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash

nvm use 18.17.0

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



## Changelog

### 08/02/2024

- Adressen (Eingang über Kolpingstraße)

- Whatsapp + Telefon




## maps

Wenn du mehrere Inhalte hast, die eine **Cookie Consent Zustimmung** benötigen (z. B. **Google Maps, YouTube, Facebook Pixel, Google Analytics**), solltest du eine **zentrale Consent-Verwaltung** nutzen.  

## **🚀 Lösung: Zentrale Consent-Verwaltung für Next.js**
Hier ist der **beste Ansatz**, um mehrere Dienste individuell zu steuern.  

---

### **1️⃣ Installation von `react-cookie-consent` (falls noch nicht installiert)**  
Falls du es noch nicht hast, installiere:  
```sh
npm install react-cookie-consent
```

---

### **2️⃣ Globale Consent-Verwaltung (`ConsentContext.tsx`)**  
Wir speichern die Zustimmung der Nutzer für verschiedene Dienste in einem **React Context**.  

```tsx
import { createContext, useContext, useEffect, useState } from "react";
import Cookie from "js-cookie";

type ConsentState = {
  googleMaps: boolean;
  youtube: boolean;
  analytics: boolean;
  setConsent: (service: keyof ConsentState, value: boolean) => void;
};

const ConsentContext = createContext<ConsentState | undefined>(undefined);

export const ConsentProvider = ({ children }) => {
  const [consent, setConsentState] = useState<ConsentState>({
    googleMaps: false,
    youtube: false,
    analytics: false,
    setConsent: () => {},
  });

  useEffect(() => {
    // Beim Laden prüfen, ob es bereits gespeicherte Einwilligungen gibt
    const storedConsent = {
      googleMaps: Cookie.get("consent_googleMaps") === "true",
      youtube: Cookie.get("consent_youtube") === "true",
      analytics: Cookie.get("consent_analytics") === "true",
    };
    setConsentState((prev) => ({ ...prev, ...storedConsent }));
  }, []);

  const setConsent = (service: keyof ConsentState, value: boolean) => {
    setConsentState((prev) => ({ ...prev, [service]: value }));
    Cookie.set(`consent_${service}`, String(value), { expires: 365 });
  };

  return (
    <ConsentContext.Provider value={{ ...consent, setConsent }}>
      {children}
    </ConsentContext.Provider>
  );
};

export const useConsent = () => {
  const context = useContext(ConsentContext);
  if (!context) {
    throw new Error("useConsent must be used within a ConsentProvider");
  }
  return context;
};
```

---

### **3️⃣ Cookie-Banner mit individuellen Optionen (`CookieBanner.tsx`)**  
Hier kann der Nutzer entscheiden, welche Dienste er akzeptiert.  

```tsx
import { useConsent } from "../context/ConsentContext";
import { useState } from "react";

const CookieBanner = () => {
  const { setConsent } = useConsent();
  const [isOpen, setIsOpen] = useState(true);

  const handleAccept = (service: keyof typeof setConsent) => {
    setConsent(service, true);
  };

  const handleDecline = (service: keyof typeof setConsent) => {
    setConsent(service, false);
  };

  return (
    isOpen && (
      <div className="cookie-banner">
        <p>Diese Website verwendet Cookies für verschiedene Dienste. Bitte wählen Sie, welche Sie erlauben möchten.</p>
        <div>
          <label>
            <input type="checkbox" onChange={(e) => setConsent("googleMaps", e.target.checked)} /> Google Maps
          </label>
          <label>
            <input type="checkbox" onChange={(e) => setConsent("youtube", e.target.checked)} /> YouTube
          </label>
          <label>
            <input type="checkbox" onChange={(e) => setConsent("analytics", e.target.checked)} /> Google Analytics
          </label>
        </div>
        <button onClick={() => setIsOpen(false)}>Speichern</button>
      </div>
    )
  );
};

export default CookieBanner;
```

---

### **4️⃣ Google Maps erst nach Zustimmung laden (`GoogleMap.tsx`)**  
Jetzt prüfen wir, ob Google Maps erlaubt wurde, bevor es geladen wird:  

```tsx
import { useConsent } from "../context/ConsentContext";
import { useState } from "react";

const GoogleMap = () => {
  const { googleMaps } = useConsent();
  const [mapLoaded, setMapLoaded] = useState(false);

  const handleLoadMap = () => {
    setMapLoaded(true);
  };

  return (
    <div>
      {!googleMaps && !mapLoaded ? (
        <div className="map-placeholder">
          <p>Google Maps wurde blockiert. Klicken Sie, um die Karte zu laden.</p>
          <button onClick={handleLoadMap}>Karte laden</button>
        </div>
      ) : (
        <iframe
          src="https://www.google.com/maps/embed?pb=YOUR_MAP_EMBED_URL"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      )}
    </div>
  );
};

export default GoogleMap;
```

---

### **5️⃣ YouTube nur nach Zustimmung anzeigen (`YouTubeEmbed.tsx`)**
Ein weiteres Beispiel für YouTube-Videos:  

```tsx
import { useConsent } from "../context/ConsentContext";

const YouTubeEmbed = ({ videoId }) => {
  const { youtube } = useConsent();

  return (
    <div>
      {!youtube ? (
        <div className="video-placeholder">
          <p>YouTube wurde blockiert. Klicken Sie, um das Video zu laden.</p>
          <button onClick={() => window.location.reload()}>Video laden</button>
        </div>
      ) : (
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default YouTubeEmbed;
```

---

### **6️⃣ Consent-Provider in `_app.tsx` hinzufügen**
Damit die Einwilligungen in der ganzen App verfügbar sind:  

```tsx
import { ConsentProvider } from "../context/ConsentContext";
import CookieBanner from "../components/CookieBanner";

function MyApp({ Component, pageProps }) {
  return (
    <ConsentProvider>
      <CookieBanner />
      <Component {...pageProps} />
    </ConsentProvider>
  );
}

export default MyApp;
```

---

## **✅ Vorteile dieser Lösung**
✔ **Alle Dienste individuell steuerbar**  
✔ **DSGVO-konform** (Google Maps, YouTube, Analytics, etc.)  
✔ **Automatische Speicherung der Zustimmung**  
✔ **Verbessert die Performance (kein unnötiges Laden von Skripten)**  

👉 **Möchtest du eine elegante UI für das Consent-Banner oder reicht dir diese Lösung?** 😊