import HeroSection from "@/components/HeroSection";
import TechStackSection from "@/components/TechStackSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <TechStackSection />
      <ProjectsSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
