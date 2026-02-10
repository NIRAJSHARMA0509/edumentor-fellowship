import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useState } from "react";
import { 
  ArrowLeft, Clock, BookOpen, Brain, Cpu, Coffee, Utensils, 
  PenTool, Users, ChevronDown, ChevronUp, Sparkles, MapPin,
  Camera, Globe, GraduationCap, Lightbulb, Target, FlaskConical
} from "lucide-react";
import Header from "@/components/fellowship/Header";
import Footer from "@/components/fellowship/Footer";

const dailySchedule = [
  { time: "09:00 – 10:15", label: "Session 1: Concept Introduction", desc: "Professor-led Interactive Intro (15m) → Deep Dive Lecture (30m) → Group Discussion", icon: BookOpen, color: "bg-primary/10 text-primary" },
  { time: "10:15 – 10:45", label: "Morning Break", desc: "30 minutes rest", icon: Coffee, color: "bg-gold/10 text-gold", isBreak: true },
  { time: "10:45 – 12:00", label: "Session 2: Preparation", desc: "Guided research and material preparation for the daily Case Study or Project", icon: FlaskConical, color: "bg-navy/10 text-navy" },
  { time: "12:00 – 13:30", label: "Lunch Break", desc: "90 minutes", icon: Utensils, color: "bg-gold/10 text-gold", isBreak: true },
  { time: "13:30 – 14:45", label: "Session 3: Live Group Tutorial", desc: "Group work to apply theoretical concepts to the Case Study or Project", icon: Users, color: "bg-primary/10 text-primary" },
  { time: "14:45 – 15:15", label: "Afternoon Break", desc: "30 minutes rest", icon: Coffee, color: "bg-gold/10 text-gold", isBreak: true },
  { time: "15:15 – 16:30", label: "Session 4: Academic Writing", desc: "Synthesis of the day's learning through a structured formal writing task", icon: PenTool, color: "bg-navy/10 text-navy" },
];

const weeks = [
  {
    title: "Week 1",
    subtitle: "Foundations of Thought & Memory",
    icon: Brain,
    color: "from-navy to-navy-light",
    days: [
      {
        day: 1, weekday: "Monday",
        title: "Memory Theory & Forgetting Curve",
        theme: "Scientific strategies for unprecedented retention and efficient recall.",
        modules: [
          "The Foundation — Understanding Ebbinghaus's Memory Theory",
          "Ebbinghaus in the 21st Century — Validation, Critique, and Evolution",
          "Application of Memory Principles"
        ],
        caseStudy: { type: "Project", title: "The 'CramRight' Language App Optimization" },
        writingTask: "Construct a scientific critique of modern educational retention strategies.",
        pillar: 1
      },
      {
        day: 2, weekday: "Tuesday",
        title: "The Socratic Method",
        theme: "Developing the crucial skill of deep, probing inquiry for fundamental truths.",
        modules: [
          "The Socratic Toolkit: A Guide to Structured Inquiry for the Oxford Tutorial",
          "The Art of Socratic Questioning",
          "Navigating the Labyrinth of Logic and Evidence"
        ],
        caseStudy: { type: "Case Study", title: "The Netflix Disruption — Analyzing business evolution via inquiry" },
        writingTask: "Develop a Socratic dialogue draft aimed at identifying core corporate assumptions.",
        pillar: 1
      },
      {
        day: 3, weekday: "Wednesday",
        title: "Plato vs. Aristotle",
        theme: "A rigorous investigation into the foundational dichotomy of Western thought.",
        modules: [
          "Plato's World of Ideals",
          "Aristotle's Grounded Reality",
          "The Great Synthesis"
        ],
        caseStudy: { type: "Case Study", title: "The Algorithmic Artist — Balancing human creativity and data" },
        writingTask: "Contrast the Platonic and Aristotelian perspectives on Artificial Creativity.",
        pillar: 1
      },
      {
        day: 4, weekday: "Thursday",
        title: "Perception vs. Reality",
        theme: "Deconstructing how we interpret reality and building intellectual frameworks.",
        modules: [
          "The Veil of Perception: Realism, Idealism, and the External World",
          "The Architecture of Choice: Free Will through the Lens of Metaphysics"
        ],
        caseStudy: { type: "Case Study", title: "The Project Phoenix — Perceptual shifts in corporate turnaround" },
        writingTask: "Evaluate the impact of choice architecture on individual free will in digital environments.",
        pillar: 1
      },
      {
        day: 5, weekday: "Friday",
        title: "Creativity and Innovation",
        theme: "Exploring the mechanics of innovation and generating original, high-impact ideas.",
        modules: [
          "The Spark of an Idea: From Lightbulbs to Action",
          "Building the Engine: How Organizations Foster Innovation",
          "Winning in the VUCA World"
        ],
        caseStudy: { type: "Case Study", title: "The Battle for Attention — Creative strategies in the attention economy" },
        writingTask: "Propose a robust organizational framework for fostering innovation within a VUCA environment.",
        pillar: 1
      }
    ]
  },
  {
    title: "Week 2",
    subtitle: "Strategy, Research & Computing",
    icon: Target,
    color: "from-primary to-primary/80",
    days: [
      {
        day: 6, weekday: "Monday",
        title: "Strategy as a Tool",
        theme: "Applying classical strategic frameworks to academic and professional challenges.",
        modules: [
          "The Foundations of Strategic Thought",
          "Frameworks for Strategic Action",
          "Applied Frameworks"
        ],
        caseStudy: { type: "Case Study", title: "South West Airlines — Positioning and Cost Leadership" },
        writingTask: "Draft a strategic positioning map for a hypothetical market entry.",
        pillar: 1
      },
      {
        day: 7, weekday: "Tuesday",
        title: "Advanced Research Methods",
        theme: "Mastering structured, ethical techniques for high-quality academic research.",
        modules: [
          "Mastering Structured Inquiry: Quantitative vs. Qualitative Rigor",
          "Ethical Guardrails and Integrity in Academic Research",
          "Data Interpretation: Avoiding Bias and Finding Truth"
        ],
        caseStudy: { type: "Project", title: "Designing a Research Proposal for Teen Generative AI Behavior" },
        writingTask: "Formalize the methodology section of your proposed research project.",
        pillar: 1
      },
      {
        day: 8, weekday: "Wednesday",
        title: "Introduction to Modern Computing",
        theme: "Understanding the architectural and conceptual fundamentals of today's digital world.",
        modules: [
          "The Silicon Bedrock: Understanding Hardware and Software Abstraction",
          "The Architecture of Information: From Mainframes to Distributed Cloud",
          "Data Flow and Networking Fundamentals"
        ],
        caseStudy: { type: "Case Study", title: "The AWS Global Infrastructure — Scaling and Efficiency" },
        writingTask: "Analyze the shift from local to distributed computing and its impact on modern data security.",
        pillar: 2
      },
      {
        day: 9, weekday: "Thursday",
        title: "AI for Non-Programmers",
        theme: "Gaining foundational understanding of AI principles without the need for coding.",
        modules: [
          "Demystifying the Black Box: Statistical vs. Symbolic AI",
          "Pattern Recognition and Large Scale Data Sets",
          "AI Ethics: Bias, Transparency, and Social Impact"
        ],
        caseStudy: { type: "Case Study", title: "AI in Healthcare — Predictive Diagnostics and Ethics" },
        writingTask: "Develop an ethical framework for non-technical managers overseeing AI deployments.",
        pillar: 2
      },
      {
        day: 10, weekday: "Friday",
        title: "Basics of Machine Learning",
        theme: "Decoding the core concepts of ML and its transformative applications.",
        modules: [
          "The Learning Paradigm: Supervised, Unsupervised, and Reinforcement Learning",
          "Neural Networks: Mimicking Human Cognitive Pathways",
          "Training and Optimization: Overcoming the Overfitting Challenge"
        ],
        caseStudy: { type: "Case Study", title: "AlphaGo vs. Lee Sedol — The Triumph of Reinforcement Learning" },
        writingTask: "Explain the mechanics of 'Learning through Experience' in a business optimization context.",
        pillar: 2
      }
    ]
  },
  {
    title: "Week 3",
    subtitle: "Advanced AI & Synthesis",
    icon: Cpu,
    color: "from-gold to-gold/80",
    days: [
      {
        day: 11, weekday: "Monday",
        title: "Decoding Generative AI",
        theme: "Understanding the technology behind tools like large language models (LLMs).",
        modules: [
          "Transformers: The Architecture of the LLM Revolution",
          "Probability vs. Reason: How Large Language Models Predict Text",
          "The Diffusion Model: Generative AI for Visual and Multimedia Content"
        ],
        caseStudy: { type: "Case Study", title: "The OpenAI Journey — From Research Lab to Global Tech Leader" },
        writingTask: "Critically evaluate the future of human-led vs. AI-generated content in academic publishing.",
        pillar: 2
      },
      {
        day: 12, weekday: "Tuesday",
        title: "Agentic AI",
        theme: "Exploring the future of autonomous systems and how to leverage them strategically.",
        modules: [
          "From Chatbots to Autonomous Agents: Understanding Autonomy",
          "Multi-Agent Systems: Coordination, Goal Setting, and Conflict Resolution",
          "The Strategic Leverage of Agentic Workflows in Industry"
        ],
        caseStudy: { type: "Case Study", title: "Auto-GPT and the Future of Autonomous Task Management" },
        writingTask: "Design a multi-agent workflow to solve a complex multi-stage business operation.",
        pillar: 2
      },
      {
        day: 13, weekday: "Wednesday",
        title: "Natural Language Programming",
        theme: "Mastering the art of communicating with and directing advanced AI tools.",
        modules: [
          "Prompt Engineering as the New Syntax for Human-AI Communication",
          "Advanced Prompting: Chain-of-Thought, Few-Shot, and Context Optimization",
          "Directing vs. Querying: Collaborative Problem Solving with AI"
        ],
        caseStudy: { type: "Case Study", title: "GitHub Copilot — The Rise of the AI Pair Programmer" },
        writingTask: "Create a 'Prompt Protocol' for effectively directing an AI system to perform expert-level analysis.",
        pillar: 2
      },
      {
        day: 14, weekday: "Thursday",
        title: "Socratic AI (Team Challenge)",
        theme: "Applying the Socratic method to AI interaction in a collaborative team format.",
        modules: [
          "Morning: Topic Assignment & Team Research Strategy",
          "Afternoon: Group Presentations applying Socratic Inquiry on AI Outputs"
        ],
        caseStudy: { type: "Interactive Challenge", title: "The AI-Human Debate Forum" },
        writingTask: "Self-reflection report on the effectiveness of Socratic inquiry in refining AI outputs.",
        pillar: 2
      },
      {
        day: 15, weekday: "Friday",
        title: "Reflection and Strategic Planning",
        theme: "Synthesis of all learning and future application roadmap.",
        modules: [
          "The Synthesis: Connecting Philosophy, Strategy, and Tech",
          "Future Roadmap: Applying Learning to Academic and Life Goals"
        ],
        caseStudy: { type: "Project", title: "Developing a Personal Academic & Professional AI Roadmap" },
        writingTask: "Final Manifesto: How I will leverage the tools of thought and technology in my career.",
        pillar: 0
      }
    ]
  }
];

const weekendActivities = [
  { icon: MapPin, title: "Guided Sightseeing", desc: "Exploring historical landmarks and cultural hubs in the host city." },
  { icon: Globe, title: "Bespoke Local Experiences", desc: "Exclusive local tours, culinary workshops, or visits to industry innovation centers." },
  { icon: GraduationCap, title: "Campus Leisure", desc: "Access to university facilities and networking mixers with local students and faculty." },
];

const DayCard = ({ day, isLast }: { day: typeof weeks[0]['days'][0]; isLast: boolean }) => {
  const [expanded, setExpanded] = useState(false);

  const pillarLabel = day.pillar === 1 ? "Pillar I · Philosophy & Strategy" : day.pillar === 2 ? "Pillar II · Modern Computing" : "Synthesis";
  const pillarColor = day.pillar === 1 ? "bg-navy/10 text-navy border-navy/20" : day.pillar === 2 ? "bg-primary/10 text-primary border-primary/20" : "bg-gold/10 text-gold border-gold/20";
  const accentBorder = day.pillar === 1 ? "border-l-navy" : day.pillar === 2 ? "border-l-primary" : "border-l-gold";

  return (
    <div className={`bg-card rounded-2xl shadow-soft border border-border/50 overflow-hidden transition-all duration-300 hover:shadow-card ${accentBorder} border-l-4`}>
      {/* Header - always visible */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left p-6 flex flex-col sm:flex-row sm:items-center gap-4 hover:bg-secondary/30 transition-colors"
      >
        <div className="flex items-center gap-4 flex-1 min-w-0">
          {/* Day number */}
          <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex flex-col items-center justify-center ${day.pillar === 1 ? 'gradient-hero' : day.pillar === 2 ? 'bg-primary' : 'gradient-gold'}`}>
            <span className="text-[10px] font-medium text-primary-foreground/70 uppercase leading-none">Day</span>
            <span className="text-xl font-bold text-primary-foreground leading-none">{day.day}</span>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="text-xs font-medium text-muted-foreground">{day.weekday}</span>
              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${pillarColor}`}>{pillarLabel}</span>
            </div>
            <h3 className="font-display font-bold text-foreground text-lg leading-tight">{day.title}</h3>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-1">{day.theme}</p>
          </div>
        </div>

        <div className="flex-shrink-0 flex items-center gap-2">
          <span className="text-xs text-muted-foreground hidden md:inline">
            {day.modules.length} modules · {day.caseStudy.type}
          </span>
          {expanded ? <ChevronUp className="w-5 h-5 text-muted-foreground" /> : <ChevronDown className="w-5 h-5 text-muted-foreground" />}
        </div>
      </button>

      {/* Expanded content */}
      {expanded && (
        <div className="px-6 pb-6 border-t border-border/50 animate-fade-in">
          <div className="pt-5 grid md:grid-cols-3 gap-6">
            {/* Lecture Modules */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-4 h-4 text-primary" />
                <h4 className="font-display font-semibold text-foreground text-sm">Lecture Modules</h4>
              </div>
              {day.modules.map((mod, i) => (
                <div key={i} className="flex gap-3 text-sm">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-xs font-semibold text-muted-foreground">{i + 1}</span>
                  <p className="text-muted-foreground leading-relaxed">{mod}</p>
                </div>
              ))}
            </div>

            {/* Case Study / Project */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="w-4 h-4 text-gold" />
                <h4 className="font-display font-semibold text-foreground text-sm">{day.caseStudy.type}</h4>
              </div>
              <div className="bg-secondary/50 rounded-xl p-4 border border-border/30">
                <p className="text-sm text-foreground font-medium leading-relaxed">{day.caseStudy.title}</p>
              </div>
            </div>

            {/* Academic Writing */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <PenTool className="w-4 h-4 text-navy" />
                <h4 className="font-display font-semibold text-foreground text-sm">Academic Writing Task</h4>
              </div>
              <div className="bg-secondary/50 rounded-xl p-4 border border-border/30">
                <p className="text-sm text-muted-foreground italic leading-relaxed">{day.writingTask}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Programme = () => {
  return (
    <>
      <Helmet>
        <title>Programme Calendar | Socratic Fellowship</title>
        <meta name="description" content="Explore the 15-day intensive Socratic Fellowship programme — a rigorous curriculum integrating cognitive science, Western philosophy, strategic frameworks, and advanced AI applications." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24">
          {/* Hero */}
          <section className="gradient-hero py-20 lg:py-28 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
            </div>
            <div className="container relative z-10">
              <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors mb-8">
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm font-medium">Back to Home</span>
              </Link>
              <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gold/20 border border-gold/30 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 text-gold" />
                  <span className="text-xs font-medium text-gold-light tracking-wide uppercase">15-Day Intensive</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6 leading-tight">
                  Academic Programme Calendar
                </h1>
                <p className="text-lg md:text-xl text-primary-foreground/70 font-body max-w-3xl leading-relaxed">
                  A rigorous curriculum integrating cognitive science, Western philosophy, strategic frameworks, 
                  and advanced Artificial Intelligence applications — delivered across three transformative weeks.
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-6 mt-10">
                  {[
                    { num: "15", label: "Teaching Days" },
                    { num: "4", label: "Daily Sessions" },
                    { num: "45+", label: "Lecture Modules" },
                    { num: "15", label: "Writing Tasks" },
                  ].map(s => (
                    <div key={s.label} className="text-center">
                      <div className="text-3xl font-display font-bold text-gold">{s.num}</div>
                      <div className="text-xs text-primary-foreground/50 font-medium mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Daily Framework */}
          <section className="py-16 lg:py-20 bg-secondary">
            <div className="container">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-3 block">Daily Structure</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                  The Daily Instructional Framework
                </h2>
                <p className="text-muted-foreground font-body">
                  Each day follows a carefully designed four-session structure, balancing concept introduction, 
                  research, collaborative application, and formal academic writing.
                </p>
              </div>

              {/* Timeline */}
              <div className="max-w-3xl mx-auto relative">
                {/* Vertical line */}
                <div className="absolute left-6 top-4 bottom-4 w-px bg-border hidden sm:block" />

                <div className="space-y-3">
                  {dailySchedule.map((slot, i) => (
                    <div key={i} className={`flex items-start gap-4 ${slot.isBreak ? 'opacity-60' : ''}`}>
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${slot.color} relative z-10`}>
                        <slot.icon className="w-5 h-5" />
                      </div>
                      <div className={`flex-1 ${slot.isBreak ? 'py-2' : 'bg-card rounded-xl p-4 shadow-soft border border-border/50'}`}>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                          <span className="text-xs font-bold text-primary font-body tracking-wide">{slot.time}</span>
                          <span className="font-display font-semibold text-foreground text-sm">{slot.label}</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{slot.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Day 0 */}
          <section className="py-8 bg-background">
            <div className="container">
              <div className="bg-card rounded-2xl p-6 shadow-soft border border-border/50 max-w-5xl mx-auto flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-navy" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground text-lg">Day 0: Enrolment & Orientation</h3>
                  <p className="text-sm text-muted-foreground">Arrival over the weekend prior to Day 1. Campus tour, welcome dinner, and programme briefing.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Weeks */}
          {weeks.map((week, weekIndex) => (
            <section key={week.title} className={`py-14 lg:py-20 ${weekIndex % 2 === 0 ? 'bg-background' : 'bg-secondary'}`}>
              <div className="container">
                {/* Week header */}
                <div className="flex items-center gap-4 mb-10 max-w-5xl mx-auto">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${week.color} flex items-center justify-center flex-shrink-0`}>
                    <week.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">{week.title}</h2>
                    <p className="text-muted-foreground font-body text-sm">{week.subtitle}</p>
                  </div>
                </div>

                {/* Day cards */}
                <div className="space-y-4 max-w-5xl mx-auto">
                  {week.days.map((day, dayIdx) => (
                    <DayCard key={day.day} day={day} isLast={dayIdx === week.days.length - 1} />
                  ))}
                </div>

                {/* Weekend card */}
                {weekIndex < 2 && (
                  <div className="max-w-5xl mx-auto mt-6">
                    <div className="bg-gradient-to-r from-gold/5 to-gold/10 rounded-2xl p-6 border border-gold/20">
                      <div className="flex items-center gap-3 mb-4">
                        <Camera className="w-5 h-5 text-gold" />
                        <h3 className="font-display font-bold text-foreground">Weekend: Cultural Immersion</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-5">
                        The weekends are designed for cultural immersion and rest, leveraging the unique campus and country location.
                      </p>
                      <div className="grid sm:grid-cols-3 gap-4">
                        {weekendActivities.map((act) => (
                          <div key={act.title} className="bg-card/80 rounded-xl p-4 border border-border/30">
                            <act.icon className="w-5 h-5 text-gold mb-2" />
                            <h4 className="font-semibold text-foreground text-sm mb-1">{act.title}</h4>
                            <p className="text-xs text-muted-foreground">{act.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </section>
          ))}

          {/* CTA */}
          <section className="py-16 gradient-hero">
            <div className="container text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
                Ready to Transform Minds?
              </h2>
              <p className="text-primary-foreground/70 font-body mb-8 max-w-2xl mx-auto">
                Partner with us to bring this rigorous 15-day academic experience to your institution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/#partner-enquiry"
                  className="inline-flex items-center justify-center bg-gold hover:bg-gold/90 text-navy font-semibold px-8 py-4 rounded-lg shadow-elevated transition-all duration-300 hover:scale-105"
                >
                  Become a Partner
                </Link>
                <Link 
                  to="/"
                  className="inline-flex items-center justify-center border-2 border-gold/50 text-gold hover:bg-gold/10 font-medium px-8 py-4 rounded-lg transition-all duration-300"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Programme;
