import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rayan Saith",
    role: "Pre-University Student",
    university: "Trinity College Dublin",
    quote: "The Edumentor Fellowship completely transformed how I approach learning. Professor Faulkner's Oxford-style tutorials taught me to think critically and articulate my ideas with precision. The combination of classical philosophy and modern AI understanding gave me a unique edge in my university interview.",
    rating: 5,
    avatar: "RS"
  },
  {
    name: "Mohit Sharma",
    role: "Graduate Student",
    university: "MSc Marketing",
    quote: "As someone from a non-technical background, Pillar II was a revelation. Dishant's approach to explaining complex AI concepts without requiring coding skills was brilliant. I now confidently engage with technical teams at work and have implemented several AI-driven solutions in my research.",
    rating: 5,
    avatar: "MS"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-4">
            Fellow Experiences
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Transformative Impact
          </h2>
          <p className="text-lg text-muted-foreground font-body">
            Early participants have provided unanimously excellent reviews, 
            highlighting the program's transformative impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="relative bg-card rounded-2xl p-8 shadow-card border border-border/50 hover:shadow-elevated transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Quote className="w-5 h-5 text-primary-foreground" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6 mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground/80 font-body leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-navy flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">{testimonial.avatar}</span>
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-primary font-medium mt-1">{testimonial.university}</p>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/5 rounded-tl-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;