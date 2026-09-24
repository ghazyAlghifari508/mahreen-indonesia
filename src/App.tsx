import { useState } from 'react';
import TopAnnouncementStrip from './components/layout/TopAnnouncementStrip';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import PartnerMarqueeSection from './components/sections/PartnerMarqueeSection';
import WhoWeAreSection from './components/sections/WhoWeAreSection';
import PathfinderSection from './components/sections/PathfinderSection';
import EcosystemSection from './components/sections/EcosystemSection';
import InternshipJourneySection from './components/sections/InternshipJourneySection';
import PortfolioSection from './components/sections/PortfolioSection';
import TrustAndPartnersSection from './components/sections/TrustAndPartnersSection';
import CallToActionSection from './components/sections/CallToActionSection';
import Batch2DetailModal from './components/modals/Batch2DetailModal';
import ProjectDetailModal from './components/modals/ProjectDetailModal';
import { ProjectItem } from './types/mahreen';

export function App() {
  const [isBatch2ModalOpen, setIsBatch2ModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activePillarId, setActivePillarId] = useState<string>('internship');

  const handleOpenBatch2Modal = () => {
    setIsBatch2ModalOpen(true);
  };

  const handleCloseBatch2Modal = () => {
    setIsBatch2ModalOpen(false);
  };

  const handleSelectPillar = (pillarId: string) => {
    setActivePillarId(pillarId);
  };

  const handleExplorePathfinder = () => {
    const el = document.getElementById('pathfinder');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-midtrans-slate flex flex-col font-sans selection:bg-midtrans-blue selection:text-white">
      {/* 01. Top Announcement Strip */}
      <TopAnnouncementStrip onOpenBatch2Modal={handleOpenBatch2Modal} />

      {/* 02. Header Navbar */}
      <Navbar onOpenBatch2Modal={handleOpenBatch2Modal} />

      <main className="flex-1">
        {/* 03. Hero Section: Editorial Split */}
        <HeroSection 
          onExplorePathfinder={handleExplorePathfinder}
          onOpenBatch2Modal={handleOpenBatch2Modal}
        />

        {/* 03b. Midtrans-style Client/Partner Logo Marquee */}
        <PartnerMarqueeSection />

        {/* 03c. Who We Are & Visi Misi */}
        <WhoWeAreSection onSelectPillar={handleSelectPillar} />

        {/* 04. Centerpiece: Pathfinder Two-Panel Experience */}
        <PathfinderSection 
          onSelectPillar={handleSelectPillar}
          onOpenBatch2Modal={handleOpenBatch2Modal}
        />

        {/* 05. The 5 Ecosystem Pillars (Segmented Tabs) */}
        <EcosystemSection 
          activePillarId={activePillarId}
          onSelectPillar={handleSelectPillar}
          onOpenBatch2Modal={handleOpenBatch2Modal}
        />

        {/* 06. Internship Journey: ADAPT to IMPACT */}
        <InternshipJourneySection 
          onOpenBatch2Modal={handleOpenBatch2Modal}
        />

        {/* 07. Real Work & Verified Impact: Portfolio & Alumni */}
        <PortfolioSection 
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* 08. Institutional Trust & Legal Records */}
        <TrustAndPartnersSection />

        {/* 09. Final Conversion Section */}
        <CallToActionSection 
          onOpenBatch2Modal={handleOpenBatch2Modal}
        />
      </main>

      {/* 10. Institutional Footer */}
      <Footer 
        onOpenBatch2Modal={handleOpenBatch2Modal}
        onSelectPillar={handleSelectPillar}
      />

      {/* Modals */}
      <Batch2DetailModal 
        isOpen={isBatch2ModalOpen}
        onClose={handleCloseBatch2Modal}
      />

      <ProjectDetailModal 
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default App;
