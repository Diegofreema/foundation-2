import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Submission from '@/components/Submission';
import Mission from '@/components/Mission';
import Projects from '@/components/Projects';
export default function Home() {
  return (
    <div>
      <Hero />
      <div id="service" className="mb-32">
        <Services />
      </div>
      <div className="mb-32">
        <Mission />
      </div>
      <Submission />
      <Projects />
    </div>
  );
}
