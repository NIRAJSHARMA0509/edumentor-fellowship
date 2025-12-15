import { Award, FileText, Shield, RefreshCcw } from "lucide-react";

const guarantees = [
  {
    icon: Award,
    title: "Prestigious Fellowship Certificate",
    description: "A formal certificate signifying successful completion of this rigorous academic program, recognized by institutions worldwide."
  },
  {
    icon: FileText,
    title: "Official Tutors' References",
    description: "Personalized letters of reference from Professor David Oakley Faulkner and Dishant Kharbanda, providing invaluable support for future applications."
  }
];

const GuaranteeSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Credentials */}
          <div>
            <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-4">
              Your Credentials
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              The Edumentor Guarantee
            </h2>
            <p className="text-lg text-muted-foreground font-body mb-10">
              Upon successful completion of the program, Fellows receive two invaluable credentials 
              that distinguish them in their academic and professional pursuits.
            </p>

            <div className="space-y-6">
              {guarantees.map((item) => (
                <div key={item.title} className="flex gap-5 p-6 bg-card rounded-xl shadow-soft border border-border/50">
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-7 h-7 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Refund Policy */}
          <div className="relative">
            <div className="bg-card rounded-2xl p-10 shadow-elevated border border-border/50">
              <div className="absolute -top-5 -right-5 w-24 h-24 bg-gold/10 rounded-full blur-2xl" />
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-xl gradient-hero flex items-center justify-center">
                  <Shield className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-foreground">Full-Refund Assurance</h3>
                  <p className="text-muted-foreground text-sm">No questions asked</p>
                </div>
              </div>

              <p className="text-muted-foreground font-body leading-relaxed mb-8">
                We are confident in the transformative quality of our program. We offer an unconditional, 
                full-refund policy after the first session, based on two criteria:
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 p-4 rounded-xl bg-secondary/70">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <RefreshCcw className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">Candidate Dissatisfaction</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      If you find the program or tutors do not meet your expectations after the first tutorial, 
                      request a full refund immediately.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-xl bg-secondary/70">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">Tutor Assessment</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      If our tutors assess that the candidate is not yet ready for the program's intensive nature, 
                      they will be fully refunded to ensure cohort integrity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;