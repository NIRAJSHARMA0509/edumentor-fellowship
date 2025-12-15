import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-28 gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-20 w-72 h-72 bg-gold/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float animation-delay-300" />
      </div>

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-gold/20 border border-gold/30 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-gold-light tracking-wide">Limited Cohort Size</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
            Begin Your Journey to{" "}
            <span className="text-gold">Intellectual Excellence</span>
          </h2>

          <p className="text-lg md:text-xl text-primary-foreground/80 font-body font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Take the first step towards joining an elite community of scholars. 
            Book your assessment slot and discover if the Edumentor Fellowship is your path to mastery.
          </p>

          {/* Available slots info */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-primary-foreground/70 bg-primary-foreground/5 px-4 py-2 rounded-full">
              <Calendar className="w-5 h-5 text-gold" />
              <span className="font-body text-sm">Saturdays & Sundays</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/70 bg-primary-foreground/5 px-4 py-2 rounded-full">
              <Clock className="w-5 h-5 text-gold" />
              <span className="font-body text-sm">9AM, 10AM, or 3PM (UK Time)</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gold hover:bg-gold/90 text-navy font-bold text-lg px-10 py-7 shadow-elevated transition-all duration-300 hover:scale-105"
            >
              Apply for the Fellowship
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-10 border-t border-primary-foreground/10">
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-gold mb-1">14</div>
                <div className="text-sm text-primary-foreground/60">Live Tutorials</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-gold mb-1">2</div>
                <div className="text-sm text-primary-foreground/60">Expert Tutors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-gold mb-1">100%</div>
                <div className="text-sm text-primary-foreground/60">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;