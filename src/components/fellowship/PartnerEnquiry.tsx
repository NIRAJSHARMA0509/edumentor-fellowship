import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Building2, Mail, User, Phone, Globe, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const PartnerEnquiry = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organisation: "",
    type: "",
    country: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.organisation || !formData.type || !formData.country) {
      toast.error("Please fill in all required fields");
      return;
    }
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast.success("Thank you for your interest! We'll be in touch shortly to arrange a call.");
    setFormData({ name: "", email: "", phone: "", organisation: "", type: "", country: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="partner-enquiry" className="py-20 lg:py-28 gradient-prestige relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-20 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Info */}
          <div>
            <span className="inline-block text-gold font-semibold text-sm tracking-widest uppercase mb-4">
              Partner With Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
              Become a Delivery Partner
            </h2>
            <p className="text-lg text-primary-foreground/70 font-body mb-10 leading-relaxed">
              Join our global network of institutions delivering the Socratic Fellowship. 
              We provide the complete academic programme — curriculum, faculty, and content — 
              while you offer your students a transformative experience.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-primary-foreground text-sm">Centrally Managed Curriculum</h4>
                  <p className="text-primary-foreground/60 text-xs">Complete academic content designed and delivered by our distinguished faculty.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-primary-foreground text-sm">Flexible Scheduling</h4>
                  <p className="text-primary-foreground/60 text-xs">Two-week intensive delivered during summer or winter breaks.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-primary-foreground text-sm">Prestigious Credentials</h4>
                  <p className="text-primary-foreground/60 text-xs">Your students receive recognised certificates and tutor references.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-card rounded-2xl p-8 shadow-elevated">
            <h3 className="text-xl font-display font-bold text-foreground mb-6">
              Express Your Interest
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="partner-name" className="text-foreground flex items-center gap-2">
                  <User className="w-4 h-4" /> Full Name *
                </Label>
                <Input id="partner-name" value={formData.name} onChange={(e) => handleInputChange("name", e.target.value)} placeholder="Your full name" className="bg-background" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="partner-email" className="text-foreground flex items-center gap-2">
                    <Mail className="w-4 h-4" /> Email *
                  </Label>
                  <Input id="partner-email" type="email" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} placeholder="email@institution.com" className="bg-background" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="partner-phone" className="text-foreground flex items-center gap-2">
                    <Phone className="w-4 h-4" /> Phone
                  </Label>
                  <Input id="partner-phone" type="tel" value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} placeholder="+1 234 567 890" className="bg-background" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="partner-org" className="text-foreground flex items-center gap-2">
                  <Building2 className="w-4 h-4" /> Organisation Name *
                </Label>
                <Input id="partner-org" value={formData.organisation} onChange={(e) => handleInputChange("organisation", e.target.value)} placeholder="Institution or programme name" className="bg-background" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="partner-type" className="text-foreground">Organisation Type *</Label>
                  <select 
                    id="partner-type"
                    value={formData.type}
                    onChange={(e) => handleInputChange("type", e.target.value)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="">Select type</option>
                    <option value="high-school">High School</option>
                    <option value="university">University</option>
                    <option value="summer-programme">Summer Programme Provider</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="partner-country" className="text-foreground flex items-center gap-2">
                    <Globe className="w-4 h-4" /> Country *
                  </Label>
                  <Input id="partner-country" value={formData.country} onChange={(e) => handleInputChange("country", e.target.value)} placeholder="Country" className="bg-background" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="partner-message" className="text-foreground">Additional Message</Label>
                <Textarea id="partner-message" value={formData.message} onChange={(e) => handleInputChange("message", e.target.value)} placeholder="Tell us about your institution and how you'd like to collaborate..." className="bg-background min-h-[80px]" />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 mt-2"
              >
                {isSubmitting ? "Submitting..." : "Submit Enquiry"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerEnquiry;
