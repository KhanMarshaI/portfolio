import Navbar from '@/components/Navbar';
import Introduction from '@/components/Introduction';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <div>
    <Navbar />
      <main>
        <Introduction />
        <Projects />
        <Skills />
      </main>
    </div>
  );
}