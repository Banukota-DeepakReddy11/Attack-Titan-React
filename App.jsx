
// Project: Attack on Titan Character Gallery
// Created by: Deepak
// Purpose: Display six characters using a reusable Image component.

import Image from "./Image";
import "./App.css";

import erenImage from "./assets/eren.jpg";
import mikasaImage from "./assets/mikasa.jpg";
import erwinImage from "./assets/erwin.jpg";
import leviImage from "./assets/levi.jpg";
import flochImage from "./assets/floch.jpg";
import arminImage from "./assets/armin.jpg";

// Character information
const characters = [
  {
    id: 1,
    name: "Eren Yeager",
    role: "The Attack Titan",
    description: "A determined fighter who wants freedom.",
    image: erenImage,
  },
  {
    id: 2,
    name: "Mikasa Ackerman",
    role: "The Strongest Soldier",
    description: "A skilled soldier who always protects her friends.",
    image: mikasaImage,
  },
  {
    id: 3,
    name: "Erwin Smith",
    role: "The Commander",
    description: "A brave leader who sacrifices everything for humanity.",
    image: erwinImage,
  },
  {
    id: 4,
    name: "Levi Ackerman",
    role: "Humanity's Strongest",
    description: "A powerful fighter known for his speed and skills.",
    image: leviImage,
  },
  {
    id: 5,
    name: "Floch Forster",
    role: "The Yeagerist",
    description: "A soldier with strong beliefs and determination.",
    image: flochImage,
  },
  {
    id: 6,
    name: "Armin Arlert",
    role: "The Strategist",
    description: "A smart thinker who finds solutions in difficult situations.",
    image: arminImage,
  },
];

function App() {
  return (
    <div className="app">
      <header className="header">
        <p className="small-heading">BEYOND THE WALLS</p>
        <h1>ATTACK ON TITAN</h1>
        <p className="subtitle">The Characters Who Changed Humanity</p>
      </header>

      <main>
        <div className="section-heading">
          <h2>Meet the Characters</h2>
          <span>01 — 06</span>
        </div>

        <div className="character-grid">
          {characters.map((character) => (
            <div className="character-card" key={character.id}>
              <div className="image-container">
                <Image
                  src={character.image}
                  width="155px"
                  alt={character.name}
                />
              </div>

              <div className="character-info">
                <p className="character-role">{character.role}</p>
                <h3>{character.name}</h3>
                <p className="character-description">
                  {character.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer>
        <p>SHINZOU WO SASAGEYO.</p>
        <span>Attack on Titan Character Gallery | Created by Deepak</span>
      </footer>
    </div>
  );
}

export default App;
