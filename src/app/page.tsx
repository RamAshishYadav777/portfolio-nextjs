import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ResumeSection from "@/components/ResumeSection";
import TechStack from "@/components/TechStack";
import WorkExperience from "@/components/WorkExperience";

const Home = () => {
  return (
    <div className="relative min-h-screen">
      {/* Global Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-900/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[50%] bg-slate-900/10 blur-[150px] rounded-full"></div>
      </div>

      {/* Grain/Noise Overlay */}
      <div className="noise"></div>

      <main>
        <HeroSection />
        <WorkExperience />
        <TechStack />
        <ProjectsSection />
        <ResumeSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Home;
