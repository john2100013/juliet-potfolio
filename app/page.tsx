import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MaintenanceSection from "@/components/MaintenanceSection";
import NetworkingSection from "@/components/NetworkingSection";
import CablesSection from "@/components/CablesSection";
import TimelineSection from "@/components/TimelineSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MaintenanceSection />
      <NetworkingSection />
      <CablesSection />
      <TimelineSection />
      <GallerySection />
      <Footer />
    </main>
  );
}
