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
        answer: "The Socratic Fellowship is a two-week intensive residential programme followed by 12 months of PhD scholar-led academic mentorship. It is delivered through our global network of campus partners — established schools, universities, and summer programme providers. The academic content, curriculum, and faculty are centrally managed by the Fellowship, while our partners provide the campus facilities and student cohorts."
      },
      {
        question: "What are \"Oxford-Style Tutorials\"?",
        answer: "Modelled after the pedagogical gold standard of the University of Oxford, these are not standard lectures. They are interactive, Socratic interrogations of the material. For every module, participants analyse a specific case study and defend their position to their tutor. This method is designed to forge superior articulation, defence, and critical reasoning skills."
      },
      {
        question: "How is the programme structured?",
        answer: "The programme begins with a two-week residential intensive (Wednesday to Wednesday), featuring 9 teaching days with morning lectures and case study preparation, and afternoon live group tutorials and academic writing. Following the intensive, every Fellow is paired with a dedicated PhD scholar for 12 months of personalised one-to-one mentorship to produce a publication-ready academic article."
      }
    ]
  },
  {
    category: "Fellowship Credentials",
    questions: [
      {
        question: "What credentials do participants receive?",
        answer: "All participants who complete the programme receive a Socratic Fellowship Certificate and a personal reference letter from their tutor. Fellows who complete the 12-month academic submission earn the prestigious Socratic Fellow Award — including a published journalistic article (1,500 words) and an academic explanation (~3,000 words), supervised by a dedicated PhD scholar."
      },
      {
        question: "What is the Socratic Fellow Award?",
        answer: "The Fellow Award is the culmination of the Socratic Fellowship programme. After the two-week intensive, you are paired with a dedicated PhD scholar who works with you one-to-one through personalised tutorials. Together, you produce a publication-ready journalistic article (1,500 words) and an academic explanation (~3,000 words). Work is self-paced, based on mutual availability, with final submission due within 12 months."
      },
      {
        question: "Why is the Fellow Award valuable for university applications?",
        answer: "For students targeting elite universities — Oxford, Cambridge, Ivy League, and beyond — the Fellow Award provides a decisive advantage. A published academic article demonstrates intellectual maturity, research capability, and genuine scholarly commitment. It dramatically strengthens university applications by building a published academic portfolio before university and developing skills in structured inquiry and argumentation."
      },
      {
        question: "What happens after the final submission is graded?",
        answer: "Once your final submission is graded, exceptional work is published on the Socratic Fellowship website and through our publishing partners. This gives Fellows a tangible, public academic credential that can be referenced in university applications and beyond."
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
        answer: "The programme fee is set by each campus partner and covers the full experience — the two-week residential intensive, 12 months of PhD scholar-led mentorship, boarding, lodging, and facilities. Please check with your chosen campus for specific fees."
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
        answer: "Partners provide the physical campus, student accommodation, and recruit students for the programme. The Socratic Fellowship provides all academic content, the curriculum design, and the teaching faculty. The programme runs as a two-week intensive during summer or winter breaks, followed by 12 months of PhD scholar-led mentorship for all participants."
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
