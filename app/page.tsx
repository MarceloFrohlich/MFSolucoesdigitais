import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeBar from "@/components/MarqueeBar";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import WhyUs from "@/components/WhyUs";
import Portfolio from "@/components/Portfolio";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f1e6]">
      <Navbar />
      <Hero />
      <MarqueeBar variant="accent" />
      <Services />
      <HowItWorks />
      <WhyUs />
      <Portfolio />
      <FAQ />
      <Contact />
      <MarqueeBar variant="ink" />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
