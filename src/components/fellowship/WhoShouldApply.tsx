import { GraduationCap, BookOpen, Sun, CheckCircle } from "lucide-react";

const partners = [
  {
    icon: Sun,
    title: "Summer Programme Providers",
    subtitle: "Short-Term Academic Courses",
    description: "Integrate the Socratic Fellowship into your summer or winter programme offering. We provide the complete curriculum, academic staff, and content — you provide the students, campus, and facilities.",
    highlights: ["Turnkey Curriculum", "Global Reach", "Premium Academic Offering"]
  },
  {
    icon: GraduationCap,
    title: "High Schools",
    subtitle: "Established Institutions",
    description: "Enable your students to build an exceptional academic profile, develop intellectual depth, and gain a competitive edge for top-tier university admissions through rigorous philosophical and technological training.",
    highlights: ["University Preparation", "Academic Profile Building", "Intellectual Depth"]
  },
  {
    icon: BookOpen,
    title: "Universities",
    subtitle: "Higher Education Institutions",
    description: "Offer your students a transformative programme that bridges classical philosophical inquiry with advanced modern computing, enhancing academic rigour and preparing them for the demands of a complex professional world.",
    highlights: ["Academic Excellence", "Interdisciplinary Growth", "Modern Computing Fluency"]
  }
];

const WhoShouldApply = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-4">
            Campus Partners
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Who Should Partner With Us?
          </h2>
          <p className="text-lg text-muted-foreground font-body">
            The Socratic Fellowship is delivered through fully established institutions and 
            summer programme providers worldwide. We provide the academic content and faculty — 
            our partners provide the students and facilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={partner.title}
              className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 border border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <partner.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-bold text-foreground mb-1">
                {partner.title}
              </h3>
              <p className="text-primary font-medium text-sm mb-4">
                {partner.subtitle}
              </p>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
                {partner.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2">
                {partner.highlights.map((highlight) => (
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
