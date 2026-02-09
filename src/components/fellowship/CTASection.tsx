import { Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-28 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-20 w-72 h-72 bg-gold/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float animation-delay-300" />
      </div>

      <div className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-gold/20 border border-gold/30 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-gold-light tracking-wide">Global Campus Network</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
            Join the Socratic{" "}
            <span className="text-gold">Fellowship</span>
          </h2>

          <p className="text-lg md:text-xl text-primary-foreground/80 font-body font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you're a student seeking intellectual transformation or an institution 
            looking to offer a world-class academic programme, we'd love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#partners"
              className="inline-flex items-center justify-center bg-gold hover:bg-gold/90 text-navy font-bold text-lg px-10 py-4 rounded-lg shadow-elevated transition-all duration-300 hover:scale-105"
            >
              Find a Campus
            </a>
            <a 
              href="#partner-enquiry"
              className="inline-flex items-center justify-center border-2 border-gold/50 text-gold hover:bg-gold/10 font-medium text-lg px-10 py-4 rounded-lg backdrop-blur-sm transition-all duration-300"
            >
              Become a Partner
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
