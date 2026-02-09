import { Helmet } from "react-helmet";
import Header from "@/components/fellowship/Header";
import HeroSection from "@/components/fellowship/HeroSection";
import WhoShouldApply from "@/components/fellowship/WhoShouldApply";
import CurriculumPillars from "@/components/fellowship/CurriculumPillars";
import FellowshipTiers from "@/components/fellowship/FellowshipTiers";
import Testimonials from "@/components/fellowship/Testimonials";
import PartnerEnquiry from "@/components/fellowship/PartnerEnquiry";
import FAQSection from "@/components/fellowship/FAQSection";
import CTASection from "@/components/fellowship/CTASection";
import Footer from "@/components/fellowship/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Socratic Fellowship | Cultivating Intellectual Leaders</title>
        <meta 
          name="description" 
          content="The Socratic Fellowship is a prestigious three-week academic programme combining timeless philosophical inquiry with advanced modern computing, delivered through global campus partners." 
        />
        <meta name="keywords" content="Socratic Fellowship, academic programme, Oxford tutorials, intellectual leadership, AI education, critical thinking, summer programme" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <section id="partners">
            <WhoShouldApply />
          </section>
          <section id="curriculum">
            <CurriculumPillars />
          </section>
          <FellowshipTiers />
          <section id="testimonials">
            <Testimonials />
          </section>
          <PartnerEnquiry />
          <section id="faq">
            <FAQSection />
          </section>
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
