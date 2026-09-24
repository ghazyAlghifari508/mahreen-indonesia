import { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import InternshipPage from './pages/InternshipPage';
import EcosystemPage from './pages/EcosystemPage';
import PortfolioPage from './pages/PortfolioPage';
import Batch2DetailModal from './components/modals/Batch2DetailModal';
import ProjectDetailModal from './components/modals/ProjectDetailModal';
import type { ProjectItem } from './types/mahreen';

export function App() {
  const [currentRoute, setCurrentRoute] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (['/tentang', '/internship', '/ekosistem', '/portofolio'].includes(path)) {
        return path;
      }
    }
    return '/';
  });

  const [isBatch2ModalOpen, setIsBatch2ModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (['/', '/tentang', '/internship', '/ekosistem', '/portofolio'].includes(path)) {
        setCurrentRoute(path);
      } else {
        setCurrentRoute('/');
      }
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (route: string) => {
    setCurrentRoute(route);
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', route);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  const handleOpenBatch2Modal = () => {
    setIsBatch2ModalOpen(true);
  };

  const handleCloseBatch2Modal = () => {
    setIsBatch2ModalOpen(false);
  };

  const handleSelectProject = (project: ProjectItem) => {
    setSelectedProject(project);
  };

  const handleCloseProjectModal = () => {
    setSelectedProject(null);
  };

  // Render appropriate page based on current route
  const renderCurrentPage = () => {
    switch (currentRoute) {
      case '/tentang':
        return (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenBatch2Modal={handleOpenBatch2Modal}
          />
        );
      case '/internship':
        return (
          <InternshipPage
            onNavigate={handleNavigate}
            onOpenBatch2Modal={handleOpenBatch2Modal}
          />
        );
      case '/ekosistem':
        return (
          <EcosystemPage
            onNavigate={handleNavigate}
            onOpenBatch2Modal={handleOpenBatch2Modal}
          />
        );
      case '/portofolio':
        return (
          <PortfolioPage
            onNavigate={handleNavigate}
            onOpenBatch2Modal={handleOpenBatch2Modal}
            onSelectProject={handleSelectProject}
          />
        );
      case '/':
      default:
        return (
          <HomePage
            onNavigate={handleNavigate}
            onOpenBatch2Modal={handleOpenBatch2Modal}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#123049] flex flex-col font-sans selection:bg-[#054FBF] selection:text-white">
      {/* 01. Header Navbar with Multi-Page Navigation */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        onOpenBatch2Modal={handleOpenBatch2Modal}
      />

      {/* 02. Active Page Dynamic View */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* 03. Institutional Footer with Cimahi Headquarters and SK Kemenkumham */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBatch2Modal={handleOpenBatch2Modal}
      />

      {/* Modals */}
      <Batch2DetailModal
        isOpen={isBatch2ModalOpen}
        onClose={handleCloseBatch2Modal}
      />

      <ProjectDetailModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={handleCloseProjectModal}
      />
    </div>
  );
}

export default App;
