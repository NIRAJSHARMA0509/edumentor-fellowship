import { ClipboardCheck, Users, Award, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Initial Assessment",
    description: "Complete a small, targeted test designed to assess fundamental cognitive abilities and intellectual curiosity. Takes approximately 15 minutes.",
    highlight: "15-minute assessment"
  },
  {
    number: "02",
    icon: Users,
    title: "The Interview",
    description: "Successful candidates proceed to a formal, one-on-one interview conducted by one of our distinguished tutors. This intellectual conversation gauges motivation, potential, and fit.",
    highlight: "Personal interview"
  },
  {
    number: "03",
    icon: Award,
    title: "Final Selection",
    description: "Only candidates who demonstrate the potential for exceptional growth and meet our exacting standards will be offered a place in the Fellowship.",
    highlight: "Merit-based selection"
  }
];

const SelectionProcess = () => {
  return (
    <section className="py-20 lg:py-28 gradient-prestige relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-20 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-gold font-semibold text-sm tracking-widest uppercase mb-4">
            Commitment to Exclusivity
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
            The Selection Process
          </h2>
          <p className="text-lg text-primary-foreground/70 font-body">
            The Edumentor Fellowship upholds its prestige through a highly selective, 
            merit-based admissions process, ensuring every cohort consists of committed, high-caliber individuals.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-gold/50 to-gold/10 z-0" />
                )}
                
                <div className="relative bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300 h-full">
                  {/* Step number */}
                  <div className="absolute -top-4 left-8 bg-gold text-navy font-bold text-sm px-3 py-1 rounded-full">
                    Step {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-gold/20 flex items-center justify-center mb-6 mt-4">
                    <step.icon className="w-8 h-8 text-gold" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-display font-bold text-primary-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-primary-foreground/70 font-body text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Highlight */}
                  <div className="inline-flex items-center gap-2 text-gold text-sm font-medium">
                    <ArrowRight className="w-4 h-4" />
                    {step.highlight}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectionProcess;