import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    category: "Program Format & Methodology",
    questions: [
      {
        question: "Is the Fellowship LIVE or self-paced?",
        answer: "The Edumentor Fellowship utilizes a hybrid high-impact model, combining the flexibility of self-paced learning with the intensity of live academic discourse. Core theoretical materials are available for deep study at your own pace, while each module culminates in a mandatory Live Case Study Tutorial conducted either one-on-one or in highly selective micro-groups (maximum 4 Fellows)."
      },
      {
        question: "What are \"Oxford-Style Tutorials\"?",
        answer: "Modeled after the pedagogical gold standard of the University of Oxford, these are not standard lectures. They are interactive, Socratic interrogations of the material. For every module, you will analyze a specific case study and defend your position to your tutor. This method is designed to forge superior articulation, defense, and critical reasoning skills."
      }
    ]
  },
  {
    category: "Duration & Commitment",
    questions: [
      {
        question: "How long does the program take to complete?",
        answer: "The program is designed for flexibility without compromising rigor. Accelerated Track: For those working with high intensity, the program can be completed in a minimum of 14 weeks (one module per week). Extended Track: Fellows balancing other significant commitments may take up to 1 year. Certification is contingent upon successful completion of all 14 Mandatory Case Study Tutorials."
      }
    ]
  },
  {
    category: "Tuition & Financial Aid",
    questions: [
      {
        question: "What is the tuition fee for the Fellowship?",
        answer: "The investment for the Edumentor Fellowship is $3,000 USD. This fee covers all self-paced materials, access to the 14 Live Oxford-Style Tutorials, personal mentorship, and certification."
      },
      {
        question: "Are scholarships or financial aid available?",
        answer: "Yes, we are committed to ensuring that exceptional potential is not hindered by financial constraints. Merit-Based Scholarships: Candidates demonstrating outstanding promise during the interview may apply for a fee waiver of up to 50%. The \"Young Scholar\" Full Sponsorship: We reserve two spots annually for fully sponsored fellowships (100% fee waiver) for exceptional young students under 17."
      }
    ]
  },
  {
    category: "Admissions & Eligibility",
    questions: [
      {
        question: "Who is the ideal candidate for the Edumentor Fellowship?",
        answer: "The Fellowship is designed for intellectually curious individuals who are dissatisfied with surface-level learning. We welcome high-potential school students aiming for top-tier global universities, university students seeking to master academic rigour, and professionals looking to sharpen critical thinking and master modern technological frameworks."
      },
      {
        question: "Why is there a selection process?",
        answer: "To maintain the prestige and academic integrity of the cohort, we cannot accept every applicant. The Fellowship thrives on high-level discourse, which requires every participant to be at a similar level of intellectual commitment. The preliminary test and interview ensure that every Fellow is ready to handle the curriculum and contribute meaningfully."
      }
    ]
  },
  {
    category: "Refunds & Policies",
    questions: [
      {
        question: "What is the \"No-Risk\" Refund Policy?",
        answer: "We operate on a policy of mutual fit and absolute confidence in our quality. Student Guarantee: If, after the first session, you feel the program does not meet your expectations, you may withdraw immediately for a full refund, no questions asked. Academic Standard Guarantee: If tutors determine a candidate lacks necessary foundational readiness, we will provide a full refund."
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
            Everything you need to know about the Edumentor Fellowship program.
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