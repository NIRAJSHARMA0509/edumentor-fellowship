import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useState } from "react";
import { 
  ArrowLeft, Clock, BookOpen, Brain, Cpu, Coffee, Utensils, 
  PenTool, Users, ChevronDown, ChevronUp, Sparkles, MapPin,
  Camera, Globe, GraduationCap, Lightbulb, Target, FlaskConical,
  Award, FileText, CheckCircle, Search, Scale, BarChart3, UserCheck,
  Moon, Sun
} from "lucide-react";
import Header from "@/components/fellowship/Header";
import Footer from "@/components/fellowship/Footer";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const dailySchedule = [
  { time: "08:30 – 09:00", label: "Breakfast", desc: "Breakfast options", icon: Coffee, color: "bg-gold/10 text-gold", isBreak: true },
  { time: "09:15 – 13:00", label: "Morning Session", desc: "Lectures & Case Study Preparation", icon: BookOpen, color: "bg-primary/10 text-primary" },
  { time: "13:00 – 14:00", label: "Lunch", desc: "Lunch options", icon: Utensils, color: "bg-gold/10 text-gold", isBreak: true },
  { time: "14:15 – 17:45", label: "Afternoon Session", desc: "Live Group Tutorials & Academic Writing", icon: Users, color: "bg-navy/10 text-navy" },
  { time: "18:00 – 19:00", label: "Dinner", desc: "Dinner options", icon: Utensils, color: "bg-gold/10 text-gold", isBreak: true },
  { time: "19:30 – 21:30", label: "Evening Activities", desc: "Themed social and recreational activities", icon: Sparkles, color: "bg-primary/10 text-primary" },
  { time: "22:00", label: "Lights Out", desc: "", icon: Moon, color: "bg-muted text-muted-foreground", isBreak: true },
];

const itinerary = [
  { day: "Wednesday", morning: "Student Arrivals", afternoon: "Activities", evening: "House Games", isArrival: true },
  { day: "Thursday", morning: "Lessons", afternoon: "Activities", evening: "Picture Challenge / Football / Badminton / Pamper Night" },
  { day: "Friday", morning: "Oxford Sightseeing", afternoon: "University Tour", evening: "Quiz", isTrip: true },
  { day: "Saturday", morning: "Lessons", afternoon: "Activities", evening: "Big King / Baking / Movie / Dodgeball" },
  { day: "Sunday", morning: "Lessons", afternoon: "Cambridge Sightseeing", evening: "Trashion Show", isTrip: true },
  { day: "Monday", morning: "Lessons", afternoon: "Cambridge Picture Challenge", evening: "Sardines / Movie / Football / Basketball" },
  { day: "Tuesday", morning: "Lessons", afternoon: "River Cam Punting & Shopping", evening: "Graduation / Talent Show / Party", isTrip: true },
  { day: "Wednesday", morning: "English Workshop", afternoon: "Activities", evening: "Team Building", isWeek2Start: true },
  { day: "Thursday", morning: "Lessons", afternoon: "Activities", evening: "Murder Mystery / Tennis / Movie / Bracelet Making" },
  { day: "Friday", morning: "London Sightseeing Tour with River Cruise", afternoon: "London Sightseeing Tour with River Cruise", evening: "Quiz", isTrip: true, isHalfDay: true },
  { day: "Saturday", morning: "Lessons", afternoon: "Activities", evening: "Movie / Football / Table Tennis" },
  { day: "Sunday", morning: "Lessons", afternoon: "Picture Challenge – Cambridge", evening: "Team V Team" },
  { day: "Monday", morning: "Lessons", afternoon: "Cambridge University Tour", evening: "Music Bingo", isTrip: true },
  { day: "Tuesday", morning: "Lessons", afternoon: "Cambridge Sightseeing + Market Square", evening: "Graduation / Talent Show / Party", isTrip: true },
  { day: "Wednesday", morning: "Student Departures", afternoon: "", evening: "", isDeparture: true },
];

const topics = [
  {
    topic: 1,
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
    topic: 2,
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
    topic: 3,
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
    topic: 4,
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
    topic: 5,
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
  },
  {
    topic: 6,
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
    topic: 7,
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
    topic: 8,
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
    topic: 9,
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
  },
  {
    topic: 10,
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
    topic: 11,
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
];

const TopicCard = ({ topic }: { topic: typeof topics[0] }) => {
  const [expanded, setExpanded] = useState(true);

  const pillarLabel = topic.pillar === 1 ? "Pillar I · Philosophy & Strategy" : "Pillar II · Modern Computing";
  const pillarColor = topic.pillar === 1 ? "bg-navy/10 text-navy border-navy/20" : "bg-primary/10 text-primary border-primary/20";
  const accentBorder = topic.pillar === 1 ? "border-l-navy" : "border-l-primary";

  return (
    <div className={`bg-card rounded-2xl shadow-soft border border-border/50 overflow-hidden transition-all duration-300 hover:shadow-card ${accentBorder} border-l-4`}>
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left p-6 flex flex-col sm:flex-row sm:items-center gap-4 hover:bg-secondary/30 transition-colors"
      >
        <div className="flex items-center gap-4 flex-1 min-w-0">
          <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex flex-col items-center justify-center ${topic.pillar === 1 ? 'gradient-hero' : 'bg-primary'}`}>
            <span className="text-[10px] font-medium text-primary-foreground/70 uppercase leading-none">Topic</span>
            <span className="text-xl font-bold text-primary-foreground leading-none">{topic.topic}</span>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${pillarColor}`}>{pillarLabel}</span>
            </div>
            <h3 className="font-display font-bold text-foreground text-lg leading-tight">{topic.title}</h3>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-1">{topic.theme}</p>
          </div>
        </div>

        <div className="flex-shrink-0 flex items-center gap-2">
          <span className="text-xs text-muted-foreground hidden md:inline">
            {topic.modules.length} modules · {topic.caseStudy.type}
          </span>
          {expanded ? <ChevronUp className="w-5 h-5 text-muted-foreground" /> : <ChevronDown className="w-5 h-5 text-muted-foreground" />}
        </div>
      </button>

      {expanded && (
        <div className="px-6 pb-6 border-t border-border/50 animate-fade-in">
          <div className="pt-5 grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-4 h-4 text-primary" />
                <h4 className="font-display font-semibold text-foreground text-sm">Lecture Modules</h4>
              </div>
              {topic.modules.map((mod, i) => (
                <div key={i} className="flex gap-3 text-sm">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-xs font-semibold text-muted-foreground">{i + 1}</span>
                  <p className="text-muted-foreground leading-relaxed">{mod}</p>
                </div>
              ))}
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="w-4 h-4 text-gold" />
                <h4 className="font-display font-semibold text-foreground text-sm">{topic.caseStudy.type}</h4>
              </div>
              <div className="bg-secondary/50 rounded-xl p-4 border border-border/30">
                <p className="text-sm text-foreground font-medium leading-relaxed">{topic.caseStudy.title}</p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <PenTool className="w-4 h-4 text-navy" />
                <h4 className="font-display font-semibold text-foreground text-sm">Academic Writing Task</h4>
              </div>
              <div className="bg-secondary/50 rounded-xl p-4 border border-border/30">
                <p className="text-sm text-muted-foreground italic leading-relaxed">{topic.writingTask}</p>
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
        <meta name="description" content="Explore the 2-week intensive Socratic Fellowship programme — a rigorous curriculum integrating cognitive science, Western philosophy, strategic frameworks, and advanced AI applications." />
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
                  <span className="text-xs font-medium text-gold-light tracking-wide uppercase">2-Week Intensive + Optional 12-Month Fellow Award</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6 leading-tight">
                  Academic Programme Calendar
                </h1>
                <p className="text-lg md:text-xl text-primary-foreground/70 font-body max-w-3xl leading-relaxed">
                  A rigorous curriculum integrating cognitive science, Western philosophy, strategic frameworks, 
                  and advanced Artificial Intelligence applications — delivered across two transformative weeks.
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-6 mt-10">
                  {[
                    { num: "9", label: "Teaching Days" },
                    { num: "11", label: "Topics Covered" },
                    { num: "30+", label: "Lecture Modules" },
                    { num: "11", label: "Writing Tasks" },
                  ].map(s => (
                    <div key={s.label} className="text-center">
                      <div className="text-3xl font-display font-bold text-gold">{s.num}</div>
                      <div className="text-xs text-primary-foreground/50 font-medium mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Fellow Award Summary */}
                <div className="mt-10 bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-gold/20 max-w-3xl">
                  <div className="flex items-center gap-3 mb-3">
                    <Award className="w-5 h-5 text-gold" />
                    <h3 className="font-display font-semibold text-primary-foreground text-lg">Optional: Socratic Fellowship Award</h3>
                  </div>
                  <p className="text-sm text-primary-foreground/60 leading-relaxed mb-4">
                    Continue beyond the intensive with a 12-month academic pathway. Work one-to-one with a PhD scholar 
                    to produce a publication-ready article, earn the title of Fellow, and build an exceptional credential 
                    for elite university admissions.
                  </p>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-primary-foreground/50">
                    <span>📝 1,500-word article + ~3,000-word explanation</span>
                    <span>🎓 1-to-1 PhD supervision</span>
                    <span>📖 Published upon selection</span>
                    <span>💰 US $2,000 for 12 months</span>
                  </div>
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
                  Each teaching day follows a carefully designed structure, with morning sessions dedicated to lectures 
                  and case study preparation, and afternoon sessions for live group tutorials and academic writing.
                </p>
              </div>

              {/* Timeline */}
              <div className="max-w-3xl mx-auto relative">
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
                        {slot.desc && <p className="text-xs text-muted-foreground mt-1">{slot.desc}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Programme Itinerary */}
          <section className="py-16 lg:py-20 bg-background">
            <div className="container">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-3 block">Wednesday to Wednesday</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                  Programme Itinerary
                </h2>
                <p className="text-muted-foreground font-body">
                  A complete overview of the two-week programme, from arrival on Wednesday through to departure.
                </p>
              </div>

              <div className="max-w-5xl mx-auto">
                <div className="bg-card rounded-2xl shadow-card border border-border/50 overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-primary">
                        <TableHead className="text-primary-foreground font-display font-bold text-sm">Day</TableHead>
                        <TableHead className="text-primary-foreground font-display font-bold text-sm">
                          <div>Morning</div>
                          <div className="text-[10px] font-normal text-primary-foreground/70">09:15 – 13:00</div>
                        </TableHead>
                        <TableHead className="text-primary-foreground font-display font-bold text-sm">
                          <div>Afternoon</div>
                          <div className="text-[10px] font-normal text-primary-foreground/70">14:15 – 17:45</div>
                        </TableHead>
                        <TableHead className="text-primary-foreground font-display font-bold text-sm">
                          <div>Evening</div>
                          <div className="text-[10px] font-normal text-primary-foreground/70">19:30 – 21:30</div>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {itinerary.map((row, i) => (
                        <TableRow 
                          key={i} 
                          className={`
                            ${row.isArrival || row.isDeparture ? 'bg-gold/5 font-medium' : ''}
                            ${row.isWeek2Start ? 'border-t-2 border-t-primary/30' : ''}
                          `}
                        >
                          <TableCell className="font-display font-bold text-foreground text-sm whitespace-nowrap">
                            {row.day}
                          </TableCell>
                          <TableCell className={`text-sm ${row.isTrip || row.isHalfDay ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
                            {row.morning}
                          </TableCell>
                          <TableCell className={`text-sm ${row.isTrip ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
                            {row.afternoon}
                          </TableCell>
                          <TableCell className="text-sm text-muted-foreground">
                            {row.evening}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <p className="text-xs text-muted-foreground text-center mt-4">
                  All times are indicative. Breakfast is served 08:30 – 09:00 and dinner 18:00 – 19:00 daily. Lights out at 22:00.
                </p>
              </div>
            </div>
          </section>

          {/* Topics */}
          <section className="py-14 lg:py-20 bg-secondary">
            <div className="container">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-3 block">Curriculum Topics</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                  Academic Topics
                </h2>
                <p className="text-muted-foreground font-body">
                  Eleven topics spanning philosophy, strategy, and modern computing — delivered across the programme at the discretion of the academic team.
                </p>
              </div>

              {/* Pillar I */}
              <div className="max-w-5xl mx-auto mb-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-navy to-navy-light flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-foreground">Pillar I: Foundations in Critical Thought & Strategy</h3>
                    <p className="text-muted-foreground font-body text-sm">Topics 1–7</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {topics.filter(t => t.pillar === 1).map(t => (
                    <TopicCard key={t.topic} topic={t} />
                  ))}
                </div>
              </div>

              {/* Pillar II */}
              <div className="max-w-5xl mx-auto">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0">
                    <Cpu className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-foreground">Pillar II: Modern Computing & Technical Fluency</h3>
                    <p className="text-muted-foreground font-body text-sm">Topics 8–11</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {topics.filter(t => t.pillar === 2).map(t => (
                    <TopicCard key={t.topic} topic={t} />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Fellow Award Pathway */}
          <section className="py-20 lg:py-28 bg-background" id="fellow-award">
            <div className="container">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gold/20 border border-gold/30">
                  <Award className="w-4 h-4 text-gold" />
                  <span className="text-xs font-medium text-gold tracking-wide uppercase">Optional Pathway</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
                  The Socratic Fellow Award
                </h2>
                <p className="text-lg text-muted-foreground font-body leading-relaxed">
                  An optional 12-month academic pathway for participants seeking the highest distinction. 
                  Work one-to-one with a dedicated PhD scholar to produce a publication-ready academic article — 
                  an exceptional credential for students aspiring to the world's leading universities.
                </p>
              </div>

              {/* Why it matters */}
              <div className="max-w-5xl mx-auto mb-16">
                <div className="bg-card rounded-2xl p-8 md:p-10 shadow-card border-2 border-gold/20 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold to-gold/50" />
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-display font-bold text-foreground mb-4">Why Pursue the Fellow Award?</h3>
                      <p className="text-muted-foreground font-body leading-relaxed mb-6">
                        For students targeting admission to elite universities — Oxford, Cambridge, Ivy League, and beyond — 
                        the Fellow Award provides a decisive advantage. A published academic article demonstrates intellectual 
                        maturity, research capability, and genuine scholarly commitment that admissions committees actively seek.
                      </p>
                      <div className="space-y-3">
                        {[
                          "Dramatically strengthens university applications",
                          "Demonstrates genuine research and writing ability",
                          "Builds a published academic portfolio before university",
                          "Develops skills in structured inquiry and argumentation",
                          "Personalised mentorship from a PhD-level scholar",
                        ].map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-foreground/80">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-secondary rounded-xl p-5 border border-border/30">
                        <div className="flex items-center gap-3 mb-2">
                          <UserCheck className="w-5 h-5 text-gold" />
                          <h4 className="font-display font-semibold text-foreground">1-to-1 PhD Supervision</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">A dedicated PhD scholar works with you individually, running personalised tutorials at your own pace and based on mutual availability.</p>
                      </div>
                      <div className="bg-secondary rounded-xl p-5 border border-border/30">
                        <div className="flex items-center gap-3 mb-2">
                          <Clock className="w-5 h-5 text-gold" />
                          <h4 className="font-display font-semibold text-foreground">12-Month Timeline</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">Work at your own pace with flexible scheduling. Final submission must be completed within 12 months of programme completion.</p>
                      </div>
                      <div className="bg-secondary rounded-xl p-5 border border-border/30">
                        <div className="flex items-center gap-3 mb-2">
                          <Globe className="w-5 h-5 text-gold" />
                          <h4 className="font-display font-semibold text-foreground">Publication Opportunity</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">Upon grading, exceptional work is published on the Socratic Fellowship website and through our publishing partners.</p>
                      </div>
                      <div className="bg-gold/10 rounded-xl p-5 border border-gold/20">
                        <p className="text-sm font-medium text-foreground">Fellowship Award Fee: <span className="text-gold font-bold text-lg">US $2,000</span></p>
                        <p className="text-xs text-muted-foreground mt-1">Covers 12 months of personalised PhD supervision and assessment</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Writing Assessment Guide */}
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                    Fellowship Writing Assessment Guide
                  </h3>
                  <p className="text-muted-foreground font-body max-w-2xl mx-auto">
                    The goal is not memorisation — it is transferable academic thinking: structured inquiry, 
                    balanced argument, and disciplined use of evidence.
                  </p>
                </div>

                {/* Deliverables */}
                <div className="grid md:grid-cols-2 gap-6 mb-10">
                  <div className="bg-card rounded-2xl p-6 shadow-soft border border-border/50 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/50" />
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-display font-bold text-foreground text-lg mb-2">A. Journalistic Article</h4>
                    <p className="text-xs text-primary font-medium mb-3">1,500 words (±10%) · For General Readers</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      Explain a focused question in a fair, readable way and reach a reasoned position. 
                      Published on the Fellowship website upon selection.
                    </p>
                    <div className="bg-secondary/50 rounded-lg p-3 border border-border/30">
                      <p className="text-xs font-medium text-foreground mb-1">Assessed on:</p>
                      <p className="text-xs text-muted-foreground">Clarity + Balance + Evidence-to-claim fit + Quality of Storytelling</p>
                    </div>
                  </div>
                  <div className="bg-card rounded-2xl p-6 shadow-soft border border-border/50 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-navy to-navy/50" />
                    <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center mb-4">
                      <BookOpen className="w-6 h-6 text-navy" />
                    </div>
                    <h4 className="font-display font-bold text-foreground text-lg mb-2">B. Academic Explanation</h4>
                    <p className="text-xs text-navy font-medium mb-3">~3,000 words (±10%) · For Academic Review</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      Show your method: literature review, reasoning steps, and how Fellowship modules 
                      shaped the work.
                    </p>
                    <div className="bg-secondary/50 rounded-lg p-3 border border-border/30">
                      <p className="text-xs font-medium text-foreground mb-1">Assessed on:</p>
                      <p className="text-xs text-muted-foreground">Method + Rigour + Reflective justification</p>
                    </div>
                  </div>
                </div>

                {/* Non-negotiables */}
                <div className="bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border/50 mb-10">
                  <h4 className="font-display font-bold text-foreground text-lg mb-6 flex items-center gap-2">
                    <Scale className="w-5 h-5 text-primary" />
                    Non-Negotiables (Both Documents)
                  </h4>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      "A single, well-defined research question (not a broad theme)",
                      "Visible balance of arguments: steelman at least one serious counter-position",
                      "Clear distinction between normative claims (what ought to be) and empirical claims (what is/likely is)",
                      "Sources are signposted and attributable; no 'floating facts'",
                      "Intellectual honesty: state uncertainties, constraints, and what would change your mind",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 bg-secondary/50 rounded-xl p-4 border border-border/30">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommended Workflow */}
                <div className="bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border/50 mb-10">
                  <h4 className="font-display font-bold text-foreground text-lg mb-6 flex items-center gap-2">
                    <Target className="w-5 h-5 text-gold" />
                    Recommended Workflow (10 Steps)
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { step: 1, title: "Choose & Narrow a Question", desc: "Pick a topic you genuinely care about, then narrow to one decision, one policy lever, or one contested claim." },
                      { step: 2, title: "Define Terms & Scope", desc: "Write a scope paragraph with key definitions, jurisdiction/context, time horizon, and what you are NOT covering." },
                      { step: 3, title: "Build a Socratic Question Grid", desc: "Use structured inquiry: assumptions, definitions, mechanisms, evidence, alternatives, and implications. Aim for 12–20 questions." },
                      { step: 4, title: "Run the Dual-Lens Test", desc: "Write two mini-analyses: Platonic/normative (ideals, values, justice) and Aristotelian/empirical (institutions, incentives, trade-offs)." },
                      { step: 5, title: "Light but Disciplined Literature Review", desc: "Target ~8–12 credible sources. Intelligent selection, evaluation, and synthesis. Keep an annotated bibliography." },
                      { step: 6, title: "Form a Working Hypothesis", desc: "Write: 'My provisional claim is…'. Then write at least two plausible alternatives. Decide what evidence would support or falsify each." },
                      { step: 7, title: "Create an Argument Map", desc: "List your conclusion, 3–5 supporting reasons, the best counterargument(s), then your reply. If you can't map it, you can't write it." },
                      { step: 8, title: "Draft the Journalistic Article", desc: "Write for an intelligent non-specialist. Use a hook, a clear 'nut graf', and short sections. Show reasoning without sounding like an essay." },
                      { step: 9, title: "Draft the Academic Explanation", desc: "Show the research journey: how you searched, what you included/excluded, how you evaluated sources, and how modules shaped each move." },
                      { step: 10, title: "Edit Like a Professional", desc: "Do a 'structure pass' (logic), then a 'clarity pass' (readability), then a 'truth pass' (fact-check + citations). Remove filler." },
                    ].map((item) => (
                      <div key={item.step} className="flex gap-4 bg-secondary/50 rounded-xl p-4 border border-border/30">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
                          <span className="text-sm font-bold text-gold">{item.step}</span>
                        </div>
                        <div>
                          <h5 className="font-display font-semibold text-foreground text-sm mb-1">{item.title}</h5>
                          <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Article Structure */}
                <div className="grid md:grid-cols-2 gap-6 mb-10">
                  <div className="bg-card rounded-2xl p-6 shadow-soft border border-border/50">
                    <h4 className="font-display font-bold text-foreground text-lg mb-4 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-primary" />
                      Article Structure (1,500 words)
                    </h4>
                    <div className="space-y-2">
                      {[
                        { section: "Title + Subhead", words: "1–2 lines", purpose: "State the question and tension" },
                        { section: "Hook", words: "80–150 words", purpose: "Concrete scene/statistic/anecdote" },
                        { section: "Nut Graf", words: "80–120 words", purpose: "What you'll argue and why now" },
                        { section: "Background", words: "150–250 words", purpose: "Define the issue, actors, why it's contested" },
                        { section: "Argument A (steelman)", words: "250–350 words", purpose: "Best case for the opposing view" },
                        { section: "Argument B (steelman)", words: "250–350 words", purpose: "Best case for your view" },
                        { section: "Synthesis / Trade-offs", words: "250–350 words", purpose: "Reconcile lenses; show conditions" },
                        { section: "Conclusion", words: "120–200 words", purpose: "Your position + what would change your mind" },
                        { section: "Selected Sources", words: "6–12 items", purpose: "Links or citations for follow-up" },
                      ].map((row, i) => (
                        <div key={i} className="flex items-start gap-3 py-2 border-b border-border/30 last:border-0">
                          <div className="flex-1 min-w-0">
                            <span className="text-sm font-medium text-foreground">{row.section}</span>
                            <span className="text-xs text-muted-foreground ml-2">({row.words})</span>
                          </div>
                          <p className="text-xs text-muted-foreground text-right">{row.purpose}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-card rounded-2xl p-6 shadow-soft border border-border/50">
                    <h4 className="font-display font-bold text-foreground text-lg mb-4 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-navy" />
                      Academic Explanation Contents (~3,000 words)
                    </h4>
                    <div className="space-y-2">
                      {[
                        "Abstract (150–200 words)",
                        "Research question + scope paragraph (include definitions and boundaries)",
                        "Methodology (search strategy, inclusion/exclusion, reliability assessment, ethics)",
                        "Literature review (thematic synthesis, not a list)",
                        "Argument map (premises, inference steps, counterarguments, replies)",
                        "Module integration: how the Fellowship curriculum shaped your work",
                        "Limitations + further research (what you would do with more time/data)",
                        "Bibliography / references",
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 py-2 border-b border-border/30 last:border-0">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-navy/10 flex items-center justify-center text-xs font-semibold text-navy">{i + 1}</span>
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Assessment Rubric */}
                <div className="bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border/50 mb-10">
                  <h4 className="font-display font-bold text-foreground text-lg mb-6 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-primary" />
                    Assessment Rubric — What 'Excellent' Looks Like
                  </h4>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { criterion: "Question & Scope", indicator: "Precise, narrow, and contestable; boundaries explicit; terms defined." },
                      { criterion: "Research & Sources", indicator: "Credible, diverse sources; quality assessed; synthesis demonstrates understanding." },
                      { criterion: "Argument Quality", indicator: "Clear thesis; valid inferences; strong structure; alternatives and counterarguments steelmanned." },
                      { criterion: "Dual-Lens Reasoning", indicator: "Normative and empirical claims distinguished and thoughtfully integrated." },
                      { criterion: "Writing & Communication", indicator: "Readable, coherent, purposeful; jargon controlled; transitions and signposting strong." },
                      { criterion: "Integrity & Reflection", indicator: "Uncertainties stated; limitations owned; no overclaiming; ethical issues recognised." },
                    ].map((item, i) => (
                      <div key={i} className="bg-secondary/50 rounded-xl p-4 border border-border/30">
                        <h5 className="font-display font-semibold text-foreground text-sm mb-2">{item.criterion}</h5>
                        <p className="text-xs text-muted-foreground leading-relaxed">{item.indicator}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Submission Checklist */}
                <div className="bg-card rounded-2xl p-6 md:p-8 shadow-soft border-2 border-gold/20">
                  <h4 className="font-display font-bold text-foreground text-lg mb-6 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-gold" />
                    Submission Checklist
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      "My question is one sentence and contains a concrete decision/claim",
                      "My article has at least one serious counterargument treated fairly (steelman)",
                      "I clearly separate empirical claims from normative claims",
                      "Every non-obvious factual claim is attributable to a source",
                      "My explanation includes: search strategy, inclusion/exclusion, and a credibility check",
                      "I have a visible argument map (even if only as bullet points)",
                      "I explicitly show how the programme topics affected my work",
                      "I removed filler and tightened paragraphs (read aloud test)",
                      "Files are named correctly and include my full name and cohort",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded border-2 border-gold/40 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 gradient-hero">
            <div className="container text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
                Ready to Transform Minds?
              </h2>
              <p className="text-primary-foreground/70 font-body mb-8 max-w-2xl mx-auto">
                Partner with us to bring this rigorous academic experience to your institution.
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
