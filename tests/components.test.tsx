import { describe, it, expect } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { Button } from '../src/components/ui/Button';
import { Badge } from '../src/components/ui/Badge';
import { Modal } from '../src/components/ui/Modal';
import { Batch2DetailModal } from '../src/components/modals/Batch2DetailModal';
import { ProjectDetailModal } from '../src/components/modals/ProjectDetailModal';
import { PROJECTS_DATA } from '../src/data/mahreenData';

describe('UI Primitives & Modals Unit Tests', () => {
  describe('Button Component', () => {
    it('renders primary button with sharp 2px micro-radius and cobalt background', () => {
      const html = renderToStaticMarkup(<Button variant="primary">Daftar Sekarang</Button>);
      expect(html).toContain('rounded-[2px]');
      expect(html).toContain('bg-[#054FBF]');
      expect(html).toContain('text-white');
      expect(html).toContain('font-poppins');
      expect(html).toContain('Daftar Sekarang');
    });

    it('renders outline variant correctly', () => {
      const html = renderToStaticMarkup(<Button variant="outline">Pelajari Lebih Lanjut</Button>);
      expect(html).toContain('border-[#054FBF]');
      expect(html).toContain('text-[#054FBF]');
      expect(html).toContain('rounded-[2px]');
    });

    it('renders as anchor tag when href is provided', () => {
      const html = renderToStaticMarkup(
        <Button href="https://bit.ly/MII-2" target="_blank">
          Link Daftar
        </Button>
      );
      expect(html).toContain('<a ');
      expect(html).toContain('href="https://bit.ly/MII-2"');
      expect(html).toContain('target="_blank"');
      expect(html).toContain('rel="noopener noreferrer"');
    });

    it('renders dark variant with Midnight Navy background', () => {
      const html = renderToStaticMarkup(<Button variant="dark">Dark Action</Button>);
      expect(html).toContain('bg-[#002855]');
      expect(html).toContain('rounded-[2px]');
    });
  });

  describe('Badge Component', () => {
    it('renders cobalt badge with pill radius', () => {
      const html = renderToStaticMarkup(<Badge variant="cobalt">Talent Development</Badge>);
      expect(html).toContain('rounded-[17px]');
      expect(html).toContain('bg-[#054FBF]');
      expect(html).toContain('text-white');
      expect(html).toContain('Talent Development');
    });

    it('renders azure, slate, ice, outline variants', () => {
      const azureHtml = renderToStaticMarkup(<Badge variant="azure">Update</Badge>);
      expect(azureHtml).toContain('bg-[#007FE7]');

      const slateHtml = renderToStaticMarkup(<Badge variant="slate">Chip</Badge>);
      expect(slateHtml).toContain('bg-[#EDF4F9]');
      expect(slateHtml).toContain('text-[#123049]');

      const iceHtml = renderToStaticMarkup(<Badge variant="ice">Ice Pill</Badge>);
      expect(iceHtml).toContain('bg-[#F7FCFF]');
      expect(iceHtml).toContain('text-[#054FBF]');

      const outlineHtml = renderToStaticMarkup(<Badge variant="outline">Border Tag</Badge>);
      expect(outlineHtml).toContain('border-[#BBBBBB]');
      expect(outlineHtml).toContain('text-[#7686AB]');
    });
  });

  describe('Modal Component', () => {
    it('returns null when isOpen is false', () => {
      const html = renderToStaticMarkup(
        <Modal isOpen={false} onClose={() => {}} title="Test Modal">
          <p>Content</p>
        </Modal>
      );
      expect(html).toBe('');
    });

    it('renders backdrop and container when isOpen is true', () => {
      const html = renderToStaticMarkup(
        <Modal isOpen={true} onClose={() => {}} title="Test Modal">
          <p>Modal Content Body</p>
        </Modal>
      );
      expect(html).toContain('role="dialog"');
      expect(html).toContain('Test Modal');
      expect(html).toContain('Modal Content Body');
      expect(html).toContain('rounded-[8px]');
      expect(html).toContain('bg-black/60');
    });
  });

  describe('Batch2DetailModal Component', () => {
    it('renders complete verified Batch 2 data when opened', () => {
      const html = renderToStaticMarkup(
        <Batch2DetailModal isOpen={true} onClose={() => {}} />
      );
      expect(html).toContain('Mahreen Indonesia Internship - Batch 2');
      expect(html).toContain('1 Okt 2026 – 31 Jan 2027');
      expect(html).toContain('Remote WFH / WFA');
      expect(html).toContain('30% Profit Sharing');
      expect(html).toContain('Buka Form Pendaftaran');
      expect(html).toContain('Unduh Pedoman Resmi');
      expect(html).toContain('https://bit.ly/MII-2');
      expect(html).toContain('https://bit.ly/PedomanMII2');
    });
  });

  describe('ProjectDetailModal Component', () => {
    it('renders project details cleanly when project is passed', () => {
      const project = PROJECTS_DATA[0];
      const html = renderToStaticMarkup(
        <ProjectDetailModal isOpen={true} onClose={() => {}} project={project} />
      );
      expect(html).toContain(project.title);
      expect(html).toContain(project.pillar);
      expect(html).toContain(project.category);
      expect(html).toContain(project.year);
      expect(html).toContain('Ruang Lingkup &amp; Deliverables');
      expect(html).toContain(project.deliverables![0]);
    });

    it('renders null when project is null', () => {
      const html = renderToStaticMarkup(
        <ProjectDetailModal isOpen={true} onClose={() => {}} project={null} />
      );
      expect(html).toBe('');
    });
  });
});
