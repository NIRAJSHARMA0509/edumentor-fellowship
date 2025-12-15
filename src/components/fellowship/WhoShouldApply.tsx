import { GraduationCap, BookOpen, Briefcase, CheckCircle } from "lucide-react";

const candidates = [
  {
    icon: GraduationCap,
    title: "Young Learners",
    subtitle: "High School / Pre-University",
    description: "Forge an impeccable academic profile and cultivate the intellectual depth necessary for successful application and performance at the world's top-tier universities.",
    highlights: ["Top University Preparation", "Academic Excellence", "Critical Thinking"]
  },
  {
    icon: BookOpen,
    title: "University Students",
    subtitle: "Current Undergraduates & Graduates",
    description: "Significantly enhance your performance in demanding degree programs, master the highest levels of academic rigor, and distinguish yourself within your field of study.",
    highlights: ["Enhanced Performance", "Academic Mastery", "Career Distinction"]
  },
  {
    icon: Briefcase,
    title: "Mature & Professional Students",
    subtitle: "Working Professionals",
    description: "Facilitate profound unconditioning, sharpen critical thinking and analytical skills, and significantly boost creativity and cognitive efficiency in complex professional environments.",
    highlights: ["Critical Thinking", "Cognitive Enhancement", "Professional Growth"]
  }
];

const WhoShouldApply = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-4">
            Ideal Candidates
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Who Should Apply?
          </h2>
          <p className="text-lg text-muted-foreground font-body">
            The Fellowship is age-agnostic and application-agnostic, designed for high-potential individuals 
            at critical junctures in their academic journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {candidates.map((candidate, index) => (
            <div 
              key={candidate.title}
              className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 border border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <candidate.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-bold text-foreground mb-1">
                {candidate.title}
              </h3>
              <p className="text-primary font-medium text-sm mb-4">
                {candidate.subtitle}
              </p>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
                {candidate.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2">
                {candidate.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-foreground/80">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-gold rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoShouldApply;