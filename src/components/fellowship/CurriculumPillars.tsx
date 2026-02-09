import { Brain, Cpu, BookOpen, Lightbulb, Search, Target, Timer, Sparkles, Bot, MessageSquare, Rocket, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import davidFaulkner from "@/assets/david-faulkner.jpg";
import dishantKharbanda from "@/assets/dishant-kharbanda.jpg";

const pillar1Modules = [
  { icon: Lightbulb, title: "Creativity: The Essence of Ideas", desc: "Exploring the mechanics of innovation and generating original, high-impact ideas." },
  { icon: BookOpen, title: "Aristotle versus Plato", desc: "A rigorous investigation into the foundational dichotomy of Western thought." },
  { icon: Search, title: "Perception and Truth", desc: "Deconstructing how we interpret reality and building intellectual frameworks." },
  { icon: Target, title: "Advanced Research Methods", desc: "Mastering structured, ethical techniques for high-quality academic research." },
  { icon: Brain, title: "The Socratic Method", desc: "Developing the crucial skill of deep, probing inquiry for fundamental truths." },
  { icon: Target, title: "Strategy as a Tool", desc: "Applying classical strategic frameworks to academic and professional challenges." },
  { icon: Timer, title: "Memory Theory & Forgetting Curve", desc: "Scientific strategies for unprecedented retention and efficient recall." },
];

const pillar2Modules = [
  { icon: Cpu, title: "Introduction to Modern Computing", desc: "Understanding the architectural and conceptual fundamentals of today's digital world." },
  { icon: Bot, title: "AI for Non-Programmers", desc: "Gaining foundational understanding of AI principles without the need for coding." },
  { icon: Sparkles, title: "Basics of Machine Learning", desc: "Decoding the core concepts of ML and its transformative applications." },
  { icon: MessageSquare, title: "Decoding Generative AI", desc: "Understanding the technology behind tools like large language models." },
  { icon: Bot, title: "Agentic AI", desc: "Exploring the future of autonomous systems and how to leverage them strategically." },
  { icon: MessageSquare, title: "Natural Language Programming", desc: "Mastering the art of communicating with and directing advanced AI tools." },
  { icon: Rocket, title: "Sustained Innovation", desc: "Developing frameworks for continuously integrating and leveraging emerging technologies." },
];

const TutorCard = ({ name, title, image }: { name: string; title: string; image: string }) => (
  <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border/50 mb-8">
    <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-gold/30">
      <img 
        src={image} 
        alt={name}
        className="w-full h-full object-cover object-top scale-125"
      />
    </div>
    <div>
      <h4 className="font-display font-bold text-foreground">{name}</h4>
      <p className="text-sm text-muted-foreground">{title}</p>
    </div>
  </div>
);

const CurriculumPillars = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-4">
            Dual-Pillar Curriculum
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Timeless Wisdom Meets Modern Technology
          </h2>
          <p className="text-lg text-muted-foreground font-body">
            Our curriculum ensures Fellows are equipped not just with knowledge, but with 
            the fundamental mindsets for navigating a complex, modern world.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Pillar I */}
          <div className="relative">
            <div className="sticky top-8">
              <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy/10 text-navy text-sm font-medium mb-6">
                  <Brain className="w-4 h-4" />
                  Pillar I
                </div>
                
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  Foundations in Critical Thought and Strategy
                </h3>

                <TutorCard 
                  name="Professor David Oakley Faulkner"
                  title="Former Director of MBA, University of Oxford"
                  image={davidFaulkner}
                />

                <div className="space-y-4">
                  {pillar1Modules.map((module, index) => (
                    <div 
                      key={module.title}
                      className="flex gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors duration-200"
                    >
                      <div className="w-10 h-10 rounded-lg bg-navy/10 flex items-center justify-center flex-shrink-0">
                        <module.icon className="w-5 h-5 text-navy" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm mb-1">{index + 1}. {module.title}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">{module.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Pillar II */}
          <div className="relative">
            <div className="sticky top-8">
              <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  <Cpu className="w-4 h-4" />
                  Pillar II
                </div>
                
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  Modern Computing and Technical Fluency
                </h3>

                <TutorCard 
                  name="Professor Laxmi Narayan"
                  title="IIM Calcutta"
                  image={dishantKharbanda}
                />

                <div className="space-y-4">
                  {pillar2Modules.map((module, index) => (
                    <div 
                      key={module.title}
                      className="flex gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors duration-200"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <module.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm mb-1">{index + 1}. {module.title}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">{module.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Programme Calendar Button */}
        <div className="text-center mt-12">
          <Link
            to="/programme"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-4 rounded-lg shadow-elevated transition-all duration-300 hover:scale-105"
          >
            <CalendarDays className="w-5 h-5" />
            Programme Calendar
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CurriculumPillars;
