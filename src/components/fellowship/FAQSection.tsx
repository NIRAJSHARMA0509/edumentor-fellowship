import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    category: "Programme Format & Delivery",
    questions: [
      {
        question: "How is the Socratic Fellowship delivered?",
        answer: "The Socratic Fellowship is a three-week intensive residential programme delivered through our global network of campus partners — established schools, universities, and summer programme providers. The academic content, curriculum, and faculty are centrally managed by the Fellowship, while our partners provide the campus facilities and student cohorts."
      },
      {
        question: "What are \"Oxford-Style Tutorials\"?",
        answer: "Modelled after the pedagogical gold standard of the University of Oxford, these are not standard lectures. They are interactive, Socratic interrogations of the material. For every module, participants analyse a specific case study and defend their position to their tutor. This method is designed to forge superior articulation, defence, and critical reasoning skills."
      },
      {
        question: "How is the three-week programme structured?",
        answer: "The programme spans 15 working days across three weeks (Monday to Friday), with two full weekends in between — totalling 19 days. Each day features four structured sessions: a lecture with discussion, project work, tutorials, and academic writing. Day 0 (arrival weekend) serves as orientation."
      }
    ]
  },
  {
    category: "Fellowship Credentials",
    questions: [
      {
        question: "What credentials do participants receive?",
        answer: "There are two tiers of recognition. All participants who complete the three-week programme receive a Socratic Fellowship Summer Programme Certificate and a personal reference letter from their tutor. Those who wish to earn the full Socratic Fellowship Award must complete an additional 15,000-word academic dissertation."
      },
      {
        question: "What is required for the full Fellowship Award?",
        answer: "After completing the three-week intensive programme, participants may opt to undertake a 15,000-word academic dissertation reflecting on the concepts learned. This is supervised by a dedicated academic supervisor, with tutorials continuing over nine additional months. The cost for this academic supervision is US $2,000."
      },
      {
        question: "Is the dissertation mandatory?",
        answer: "No. The dissertation is entirely optional. Participants who are content with the Summer Programme Certificate and tutor reference are not required to pursue the full Fellowship Award. It is designed for those seeking the highest level of academic distinction."
      }
    ]
  },
  {
    category: "Campuses & Pricing",
    questions: [
      {
        question: "How do I choose a campus?",
        answer: "Students select from our network of partner campuses worldwide. Each campus offers the programme during different periods (summer or winter breaks) and in different locations. You can browse available campuses and choose based on country, timing, and preferences."
      },
      {
        question: "How much does the programme cost?",
        answer: "The programme fee varies by campus, as it includes boarding, lodging, and facilities provided by the partner institution. Each campus sets its own pricing structure. Please check with your chosen campus for specific fees."
      }
    ]
  },
  {
    category: "For Partner Institutions",
    questions: [
      {
        question: "How can my institution become a partner?",
        answer: "We welcome enquiries from established high schools, universities, and summer programme providers worldwide. As a delivery partner, you provide the students and campus facilities while we supply the complete academic programme — curriculum, faculty, and content. Submit an enquiry through our partner form to arrange an introductory call."
      },
      {
        question: "What does the partnership involve?",
        answer: "Partners provide the physical campus, student accommodation, and recruit students for the programme. The Socratic Fellowship provides all academic content, the curriculum design, and the teaching faculty. The programme runs as a three-week intensive during summer or winter breaks."
      }
    ]
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-4">
            Common Questions
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground font-body">
            Everything you need to know about the Socratic Fellowship programme.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {faqs.map((category) => (
            <div key={category.category}>
              <h3 className="text-lg font-display font-bold text-foreground mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                {category.category}
              </h3>
              <Accordion type="single" collapsible className="space-y-3">
                {category.questions.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`${category.category}-${index}`}
                    className="bg-card rounded-xl border border-border/50 px-6 shadow-soft data-[state=open]:shadow-card transition-shadow duration-300"
                  >
                    <AccordionTrigger className="text-left font-body font-medium text-foreground hover:text-primary py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground font-body leading-relaxed pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
