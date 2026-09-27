export const site = {
  name: "Computer Zimmerer",
  owner: "Bernd Zimmerer",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://computer-zimmerer.vercel.app",
  description:
    "Bernd Zimmerer, Computer Zimmerer in Hannesried 37, 93464 Tiefenbach (Oberpfalz): Computer, Notebook, Handy, Netzwerke, Internet, Software, Multimedia und EDV-Dienstleistungen. Termine nach telefonischer Vereinbarung.",
  street: "Hannesried 37",
  zip: "93464",
  city: "Tiefenbach",
  district: "Hannesried",
  region: "Bayern",
  landkreis: "Landkreis Cham",
  countryCode: "DE",
  phone: "+499673913311",
  phoneDisplay: "09673 913311",
  faxDisplay: "09673 913312",
  email: "info@computer-zimmerer.de",
};

export const serviceNames = [
  "Computer",
  "Notebook",
  "Handy",
  "Netzwerke",
  "EDV-Dienstleistungen",
  "Multimedia",
  "Internet",
  "Software",
] as const;

export const concerns = [
  "Computer oder Notebook startet nicht mehr.",
  "Das WLAN reicht nicht bis ins obere Stockwerk.",
  "Ein neues Handy einrichten und die Daten übertragen.",
  "Drucker oder Netzwerk im Büro.",
  "Software installieren.",
  "Beim Multimedia stimmt etwas mit Bild oder Ton nicht.",
] as const;
