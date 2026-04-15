import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MatchSection from "@/components/MatchSection";
import FirstStepSection from "@/components/FirstStepSection";
import GrowthSection from "@/components/GrowthSection";
import ProtocolSection from "@/components/ProtocolSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <MatchSection />
    <FirstStepSection />
    <GrowthSection />
    <ProtocolSection />
    <Footer />
  </div>
);

export default Index;
