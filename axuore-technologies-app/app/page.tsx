import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import DigitalMarketingSection from "@/components/digital-marketing-section";
import LandingPage from "@/components/landingPage";
import ServicesSection from "@/components/services-section";
import TestimonialsContact from "@/components/testmonials-contact";
export default function Axuore() {
  return (
    <div className="no-scrollbar h-screen">
      <LandingPage />
      <ServicesSection />
      <DigitalMarketingSection />
      <AboutSection />
      <TestimonialsContact />
      <ContactSection />
    </div>
  );
}
