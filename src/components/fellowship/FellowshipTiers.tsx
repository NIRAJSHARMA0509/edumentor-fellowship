import { Award, FileText, ArrowRight, BookOpen } from "lucide-react";

const FellowshipTiers = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-4">
            Two Pathways
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Fellowship Credentials
          </h2>
          <p className="text-lg text-muted-foreground font-body">
            Participants can earn recognition at two distinct levels, 
            each reflecting a different depth of academic commitment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Summer Programme Certificate */}
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/50" />
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <FileText className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-display font-bold text-foreground mb-2">
              Socratic Fellowship Certificate
            </h3>
            <p className="text-primary font-medium text-sm mb-4">Two-Week Intensive</p>
            <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
              Awarded upon successful completion of the two-week intensive programme at your 
              chosen campus. Participants receive a formal certificate and a personal reference 
              letter from their tutor.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-foreground/80">Formal programme completion certificate</span>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-foreground/80">Personal tutor reference letter</span>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-foreground/80">No selection process required</span>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-foreground/80">Minimum age: 15 years</span>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-foreground/80">English proficiency: Good</span>
              </div>
            </div>
          </div>

          {/* Full Fellowship */}
          <div className="bg-card rounded-2xl p-8 shadow-card border-2 border-gold/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold to-gold/50" />
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gold/20 text-gold text-xs font-semibold">
              Prestigious
            </div>
            <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
              <Award className="w-7 h-7 text-gold" />
            </div>
            <h3 className="text-2xl font-display font-bold text-foreground mb-2">
              Socratic Fellowship Award
            </h3>
            <p className="text-gold font-medium text-sm mb-4">Academic Submission Required · Earn the Title of Fellow</p>
            <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
              For participants seeking the highest distinction. After completing the two-week programme, 
              Fellows are paired with a dedicated PhD scholar for one-to-one personalised tutorials to produce 
              a publication-ready academic article — earn the prestigious title of Fellow.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <ArrowRight className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-sm text-foreground/80">1,500-word journalistic article + ~3,000-word academic explanation</span>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-sm text-foreground/80">12 months to complete at your own pace</span>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-sm text-foreground/80">Dedicated PhD scholar with personalised 1-to-1 tutorials</span>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-sm text-foreground/80">Published on Fellowship website and partner platforms upon selection</span>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-sm text-foreground/80">US $2,000 for the entire year of supervision</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FellowshipTiers;
