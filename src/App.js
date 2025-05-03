import React from "react";
import  HeroSection  from "./components/HeroSection.js";
import { Navbar } from "./components/navbar.js";
import { ToolsSection } from "./components/tools-section.js";
import { ResourcesSection } from "./components/resources-section.js";
import { LearningSection } from "./components/learning-section.js";
import { CommunitySection } from "./components/community-section.js";
import { ApiToolsSection } from "./components/api-tools-section.js";
import { DeploymentSection } from "./components/deployment-section.js";
import { Footer } from "./components/footer.js";
import { ParticlesBackground } from "./components/particles-background.js";
import { ScrollToSection } from "./components/scroll-to-section.js";

function App() {
  return (
    <ScrollToSection>
      <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white overflow-hidden">
        <ParticlesBackground />
        <Navbar />
        <main>
          <HeroSection />
          <div id="tools" className="scroll-mt-24">
            <ToolsSection />
          </div>
          <div id="api-tools" className="scroll-mt-24">
            <ApiToolsSection />
          </div>
          <div id="deployment" className="scroll-mt-24">
            <DeploymentSection />
          </div>
          <div id="resources" className="scroll-mt-24">
            <ResourcesSection />
          </div>
          <div id="learning" className="scroll-mt-24">
            <LearningSection />
          </div>
          <div id="community" className="scroll-mt-24">
            <CommunitySection />
          </div>
        </main>
        <Footer />
      </div>
    </ScrollToSection>
  );
}

export default App;
