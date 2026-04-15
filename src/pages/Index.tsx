import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProtocolSection from "@/components/ProtocolSection";
import RoadmapSection from "@/components/RoadmapSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <ProtocolSection />
    <RoadmapSection />
    <Footer />
  </div>
);

export default Index;
