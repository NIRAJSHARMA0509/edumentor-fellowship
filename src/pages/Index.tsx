import { Helmet } from "react-helmet";
import { BookingProvider } from "@/contexts/BookingContext";
import Header from "@/components/fellowship/Header";
import HeroSection from "@/components/fellowship/HeroSection";
import WhoShouldApply from "@/components/fellowship/WhoShouldApply";
import CurriculumPillars from "@/components/fellowship/CurriculumPillars";
import SelectionProcess from "@/components/fellowship/SelectionProcess";
import BookingSection from "@/components/fellowship/BookingSection";
import Testimonials from "@/components/fellowship/Testimonials";
import GuaranteeSection from "@/components/fellowship/GuaranteeSection";
import FAQSection from "@/components/fellowship/FAQSection";
import CTASection from "@/components/fellowship/CTASection";
import Footer from "@/components/fellowship/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Edumentor Fellowship | Cultivating Intellectual Leaders</title>
        <meta 
          name="description" 
          content="The Edumentor Fellowship is an exclusive academic accelerator combining timeless philosophical inquiry with cutting-edge modern computing. Apply now for Oxford-style tutorials." 
        />
        <meta name="keywords" content="Edumentor Fellowship, academic excellence, Oxford tutorials, intellectual leadership, AI education, critical thinking" />
        <link rel="canonical" href="https://www.edumentor.io/fellowship" />
      </Helmet>

      <BookingProvider>
        <div className="min-h-screen bg-background">
          <Header />
          <main>
            <HeroSection />
            <WhoShouldApply />
            <section id="curriculum">
              <CurriculumPillars />
            </section>
            <section id="selection">
              <SelectionProcess />
            </section>
            <section id="booking">
              <BookingSection />
            </section>
            <section id="testimonials">
              <Testimonials />
            </section>
            <GuaranteeSection />
            <section id="faq">
              <FAQSection />
            </section>
            <CTASection />
          </main>
          <Footer />
        </div>
      </BookingProvider>
    </>
  );
};

export default Index;
