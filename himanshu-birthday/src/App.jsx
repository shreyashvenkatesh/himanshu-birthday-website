import { useState } from "react";
import Landing from "./pages/Landing";
import Rules from "./pages/Rules";
import Memories from "./pages/Memories";
import CakeAndStats from "./pages/CakeAndStats";
import Letter from "./pages/Letter";
import MusicPlayer from "./components/MusicPlayer";
import PoppingBackground from "./components/PoppingBackground";

function App() {
  const [currentPage, setCurrentPage] = useState("landing");

  return (
    <main style={{ position: "relative" }}>
      <PoppingBackground />
      <MusicPlayer />

      {currentPage === "landing" && (
        <Landing onNext={() => setCurrentPage("rules")} />
      )}
      {currentPage === "rules" && (
        <Rules onNext={() => setCurrentPage("memories")} />
      )}
      {currentPage === "memories" && (
        <Memories onNext={() => setCurrentPage("cake")} />
      )}
      {currentPage === "cake" && (
        <CakeAndStats onNext={() => setCurrentPage("letter")} />
      )}
      {currentPage === "letter" && (
        <Letter onRestart={() => setCurrentPage("landing")} />
      )}
    </main>
  );
}

export default App;