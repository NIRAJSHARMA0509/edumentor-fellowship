import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, BookOpen, Brain, Cpu, Coffee, Utensils } from "lucide-react";
import Header from "@/components/fellowship/Header";
import Footer from "@/components/fellowship/Footer";

const dailySchedule = [
  { time: "09:00 – 10:15", label: "Session 1", desc: "15m Intro | 30m Lecture | 30m Discussion", icon: BookOpen },
  { time: "10:15 – 10:45", label: "Short Break", desc: "30 minutes", icon: Coffee },
  { time: "10:45 – 12:00", label: "Session 2", desc: "Prep / Project Work", icon: Brain },
  { time: "12:00 – 13:30", label: "Lunch Break", desc: "90 minutes", icon: Utensils },
  { time: "13:30 – 14:45", label: "Session 3", desc: "Tutorial / Project Execution", icon: Cpu },
  { time: "14:45 – 15:15", label: "Short Break", desc: "30 minutes", icon: Coffee },
  { time: "15:15 – 16:30", label: "Session 4", desc: "Academic Writing / Final Output", icon: BookOpen },
];

const weeks = [
  {
    title: "Week 1: Foundations of Thought & Memory",
    days: [
      { day: "Day 1", weekday: "Monday", title: "Memory Theory & Forgetting Curve", theme: "Scientific strategies for unprecedented retention and efficient recall.", activity: "Sessions 3 & 4 focus on simple projects involving memory palace construction or mnemonic systems.", pillar: 1 },
      { day: "Day 2", weekday: "Tuesday", title: "The Socratic Method", theme: "Developing the crucial skill of deep, probing inquiry for fundamental truths.", activity: "Case study on historical Socratic dialogues.", pillar: 1 },
      { day: "Day 3", weekday: "Wednesday", title: "Aristotle versus Plato", theme: "A rigorous investigation into the foundational dichotomy of Western thought.", activity: "Case study comparing Empiricism vs. Idealism.", pillar: 1 },
      { day: "Day 4", weekday: "Thursday", title: "Perception and Truth", theme: "Deconstructing how we interpret reality and building intellectual frameworks.", activity: "Case study on cognitive biases and objective reality.", pillar: 1 },
      { day: "Day 5", weekday: "Friday", title: "Creativity: The Essence of Ideas", theme: "Exploring the mechanics of innovation and generating original, high-impact ideas.", activity: "Case study on disruptive innovation in the 21st century.", pillar: 1 },
    ]
  },
  {
    title: "Week 2: Strategy, Research & Computing",
    days: [
      { day: "Day 6", weekday: "Monday", title: "Strategy as a Tool", theme: "Applying classical strategic frameworks to academic and professional challenges.", activity: "Case study on Game Theory or Porter's Five Forces.", pillar: 1 },
      { day: "Day 7", weekday: "Tuesday", title: "Advanced Research Methods", theme: "Mastering structured, ethical techniques for high-quality academic research.", activity: "Sessions 3 & 4 focus on simple projects such as drafting a research methodology or data analysis exercise.", pillar: 1 },
      { day: "Day 8", weekday: "Wednesday", title: "Introduction to Modern Computing", theme: "Understanding the architectural and conceptual fundamentals of today's digital world.", activity: "Case study on the evolution of Von Neumann architecture to Cloud.", pillar: 2 },
      { day: "Day 9", weekday: "Thursday", title: "AI for Non-Programmers", theme: "Gaining foundational understanding of AI principles without the need for coding.", activity: "Case study on the social impact of automation.", pillar: 2 },
      { day: "Day 10", weekday: "Friday", title: "Basics of Machine Learning", theme: "Decoding the core concepts of ML and its transformative applications.", activity: "Case study on recommendation engines and predictive modelling.", pillar: 2 },
    ]
  },
  {
    title: "Week 3: Advanced AI & Synthesis",
    days: [
      { day: "Day 11", weekday: "Monday", title: "Decoding Generative AI", theme: "Understanding the technology behind tools like large language models (LLMs).", activity: "Case study on the ethics and mechanics of content generation.", pillar: 2 },
      { day: "Day 12", weekday: "Tuesday", title: "Agentic AI", theme: "Exploring the future of autonomous systems and how to leverage them strategically.", activity: "Case study on multi-agent workflows in industry.", pillar: 2 },
      { day: "Day 13", weekday: "Wednesday", title: "Natural Language Programming", theme: "Mastering the art of communicating with and directing advanced AI tools.", activity: "Case study on prompt engineering vs. traditional syntax.", pillar: 2 },
      { day: "Day 14", weekday: "Thursday", title: "Socratic AI (Team Presentation Day)", theme: "Applying the Socratic method to AI interaction.", activity: "Morning: Teams prepare a complex topic. Afternoon: Groups present while applying Socratic inquiry to AI outputs.", pillar: 2 },
      { day: "Day 15", weekday: "Friday", title: "Reflection Day", theme: "Synthesis and Future Application.", activity: "Final workshop on how to apply these 15 days of learning to academic work and personal life.", pillar: 0 },
    ]
  }
];

const Programme = () => {
  return (
    <>
      <Helmet>
        <title>Programme Schedule | Socratic Fellowship</title>
        <meta name="description" content="Explore the 15-day intensive Socratic Fellowship programme schedule — three weeks of rigorous academic training in philosophy, strategy, and modern computing." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24">
          {/* Hero */}
          <section className="gradient-hero py-20">
            <div className="container">
              <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors mb-8">
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm font-medium">Back to Home</span>
              </Link>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
                15-Day Intensive Programme
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/70 font-body max-w-3xl leading-relaxed">
                Three weeks. 15 working days. Two weekends. A complete intellectual transformation 
                spanning classical philosophical inquiry and advanced modern computing.
              </p>
            </div>
          </section>

          {/* Daily Schedule */}
          <section className="py-16 bg-secondary">
            <div className="container">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">
                Daily Time Blocks
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl">
                {dailySchedule.filter(s => s.label !== "Short Break" && s.label !== "Lunch Break").map((slot) => (
                  <div key={slot.time} className="bg-card rounded-xl p-5 shadow-soft border border-border/50">
                    <div className="flex items-center gap-2 mb-2">
                      <slot.icon className="w-4 h-4 text-primary" />
                      <span className="font-semibold text-foreground text-sm">{slot.label}</span>
                    </div>
                    <p className="text-xs text-primary font-medium mb-1">{slot.time}</p>
                    <p className="text-xs text-muted-foreground">{slot.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 text-xs text-muted-foreground bg-card px-3 py-2 rounded-lg border border-border/50">
                  <Coffee className="w-3 h-3" /> Breaks: 10:15–10:45 & 14:45–15:15
                </div>
                <div className="inline-flex items-center gap-2 text-xs text-muted-foreground bg-card px-3 py-2 rounded-lg border border-border/50">
                  <Utensils className="w-3 h-3" /> Lunch: 12:00–13:30
                </div>
              </div>
            </div>
          </section>

          {/* Day 0 */}
          <section className="py-8 bg-background">
            <div className="container">
              <div className="bg-card rounded-xl p-6 shadow-soft border border-border/50 max-w-5xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground">Day 0: Enrolment & Orientation</h3>
                    <p className="text-sm text-muted-foreground">Arrival over the weekend prior to Day 1.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Weeks */}
          {weeks.map((week, weekIndex) => (
            <section key={week.title} className={`py-12 ${weekIndex % 2 === 0 ? 'bg-background' : 'bg-secondary'}`}>
              <div className="container">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">
                  {week.title}
                </h2>
                <div className="space-y-4 max-w-5xl">
                  {week.days.map((day) => (
                    <div key={day.day} className="bg-card rounded-xl p-6 shadow-soft border border-border/50 hover:shadow-card transition-shadow duration-200">
                      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${
                            day.pillar === 1 ? 'bg-navy/10 text-navy' : day.pillar === 2 ? 'bg-primary/10 text-primary' : 'bg-gold/10 text-gold'
                          }`}>
                            {day.day} · {day.weekday}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-display font-bold text-foreground text-lg mb-2">{day.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{day.theme}</p>
                          <p className="text-xs text-primary/80 italic">{day.activity}</p>
                        </div>
                        <div className="flex-shrink-0 hidden sm:block">
                          <span className={`text-xs font-medium px-2 py-1 rounded ${
                            day.pillar === 1 ? 'bg-navy/5 text-navy' : day.pillar === 2 ? 'bg-primary/5 text-primary' : 'bg-gold/5 text-gold'
                          }`}>
                            {day.pillar === 1 ? 'Pillar I' : day.pillar === 2 ? 'Pillar II' : 'Synthesis'}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}

                  {weekIndex < 2 && (
                    <div className="bg-gold/5 rounded-xl p-5 border border-gold/20">
                      <p className="text-sm text-foreground/70 font-medium flex items-center gap-2">
                        <Coffee className="w-4 h-4 text-gold" />
                        Saturday & Sunday: Weekend Activities
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </section>
          ))}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Programme;
