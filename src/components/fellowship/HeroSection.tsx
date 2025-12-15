import { Button } from "@/components/ui/button";
import { ArrowRight, Award, GraduationCap, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-float animation-delay-300" />
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
      </div>

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="container relative z-10 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-gold/20 border border-gold/30 backdrop-blur-sm animate-fade-up opacity-0">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-gold-light tracking-wide uppercase">Exclusive Academic Accelerator</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-primary-foreground leading-tight mb-6 animate-fade-up opacity-0 animation-delay-100">
            The Edumentor{" "}
            <span className="relative">
              Fellowship
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 10C50 4 150 4 298 10" stroke="hsl(45 93% 47%)" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/80 font-body font-light max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-up opacity-0 animation-delay-200">
            Cultivating the Next Generation of Intellectual Leaders through a unique blend of 
            <span className="font-medium text-gold-light"> timeless philosophical inquiry </span> 
            and 
            <span className="font-medium text-gold-light"> cutting-edge modern computing</span>.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 animate-fade-up opacity-0 animation-delay-300">
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <Award className="w-5 h-5 text-gold" />
              <span className="font-body text-sm">Oxford-Style Tutorials</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <GraduationCap className="w-5 h-5 text-gold" />
              <span className="font-body text-sm">Distinguished Faculty</span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0 animation-delay-400">
            <Button 
              size="lg" 
              className="bg-gold hover:bg-gold/90 text-navy font-semibold text-lg px-8 py-6 shadow-elevated transition-all duration-300 hover:scale-105 hover:shadow-glow"
            >
              Apply for the Fellowship
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-gold/50 text-gold hover:bg-gold/10 font-medium text-lg px-8 py-6 backdrop-blur-sm"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;