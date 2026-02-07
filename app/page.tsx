import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Achievements } from "@/components/Achievements";
import { KeyboardShortcuts } from "@/components/KeyboardShortcuts";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Hero />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <KeyboardShortcuts />
    </main>
  );
}
