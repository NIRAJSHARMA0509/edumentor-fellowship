import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Calendar, Clock, User, Mail, Phone, GraduationCap, CheckCircle, ArrowRight, ArrowLeft, Sparkles } from "lucide-react";
import { toast } from "sonner";

const timeSlots = ["9:00 AM", "10:00 AM", "3:00 PM"];

const getNextTwoWeekends = (): Date[] => {
  const weekends: Date[] = [];
  const today = new Date();
  let daysChecked = 0;
  
  while (weekends.length < 4 && daysChecked < 21) {
    const checkDate = new Date(today);
    checkDate.setDate(today.getDate() + daysChecked);
    const dayOfWeek = checkDate.getDay();
    
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      weekends.push(new Date(checkDate));
    }
    daysChecked++;
  }
  
  return weekends;
};

const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-GB', { 
    weekday: 'short', 
    day: 'numeric', 
    month: 'short' 
  });
};

const BookingSection = () => {
  const weekendDates = useMemo(() => getNextTwoWeekends(), []);
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedSlot, setSelectedSlot] = useState<{ date: Date; time: string } | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    qualification: "",
    email: "",
    phone: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleOpenDialog = () => {
    setIsOpen(true);
    setStep(1);
  };

  const handleCloseDialog = () => {
    setIsOpen(false);
    setStep(1);
    setSelectedSlot(null);
    setFormData({
      name: "",
      age: "",
      qualification: "",
      email: "",
      phone: ""
    });
  };

  const handleNextStep = () => {
    if (selectedSlot) {
      setStep(2);
    } else {
      toast.error("Please select a time slot");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.age || !formData.qualification || !formData.email || !formData.phone) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("Assessment slot booked successfully! We'll send you a confirmation email shortly.");
    handleCloseDialog();
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 lg:py-28 gradient-prestige relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-20 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-gold font-semibold text-sm tracking-widest uppercase mb-4">
            Book Your Assessment
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-lg text-primary-foreground/70 font-body mb-10">
            Schedule your initial assessment and interview with our distinguished tutors. 
            Available slots are limited to ensure personalized attention.
          </p>

          <Button 
            onClick={handleOpenDialog}
            size="lg"
            className="bg-gold hover:bg-gold/90 text-navy font-bold text-lg px-10 py-7 shadow-elevated transition-all duration-300 hover:scale-105"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Schedule Interview
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <div className="flex items-center gap-2 text-primary-foreground/70 bg-primary-foreground/5 px-4 py-2 rounded-full">
              <Clock className="w-5 h-5 text-gold" />
              <span className="font-body text-sm">15-minute assessment</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/70 bg-primary-foreground/5 px-4 py-2 rounded-full">
              <Sparkles className="w-5 h-5 text-gold" />
              <span className="font-body text-sm">Weekend slots available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-lg bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-2xl font-display font-bold text-foreground flex items-center gap-3">
              {step === 1 ? (
                <>
                  <Calendar className="w-6 h-6 text-primary" />
                  Select Your Slot
                </>
              ) : (
                <>
                  <User className="w-6 h-6 text-primary" />
                  Your Details
                </>
              )}
            </DialogTitle>
          </DialogHeader>

          {/* Step indicator */}
          <div className="flex items-center gap-2 mb-6">
            <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold transition-colors ${step === 1 ? 'bg-primary text-primary-foreground' : 'bg-primary/20 text-primary'}`}>
              1
            </div>
            <div className={`flex-1 h-1 rounded-full transition-colors ${step === 2 ? 'bg-primary' : 'bg-muted'}`} />
            <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold transition-colors ${step === 2 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
              2
            </div>
          </div>

          {step === 1 ? (
            /* Step 1: Select Time Slot */
            <div className="space-y-4">
              {weekendDates.map((date, dateIndex) => (
                <div key={dateIndex} className="space-y-2">
                  <div className="text-sm font-medium text-primary">
                    {formatDate(date)}
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((time) => {
                      const isSelected = selectedSlot?.date.toDateString() === date.toDateString() && selectedSlot?.time === time;
                      return (
                        <button
                          key={`${dateIndex}-${time}`}
                          onClick={() => setSelectedSlot({ date, time })}
                          className={`
                            p-3 rounded-lg text-sm font-medium transition-all duration-200
                            flex items-center justify-center gap-1 border
                            ${isSelected 
                              ? 'bg-primary text-primary-foreground border-primary shadow-md' 
                              : 'bg-secondary text-foreground border-border hover:bg-secondary/80 hover:border-primary/50'
                            }
                          `}
                        >
                          <Clock className="w-3 h-3" />
                          {time}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}

              {selectedSlot && (
                <div className="p-4 rounded-lg bg-primary/10 border border-primary/30">
                  <div className="flex items-center gap-2 text-primary">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-medium">
                      {formatDate(selectedSlot.date)} at {selectedSlot.time} (UK Time)
                    </span>
                  </div>
                </div>
              )}

              <Button
                onClick={handleNextStep}
                disabled={!selectedSlot}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 mt-4 disabled:opacity-50"
              >
                Continue to Details
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          ) : (
            /* Step 2: Candidate Details Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Selected slot display */}
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/30 mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-primary text-sm">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">
                      {selectedSlot && formatDate(selectedSlot.date)} at {selectedSlot?.time} (UK)
                    </span>
                  </div>
                  <button 
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-xs text-muted-foreground hover:text-primary underline"
                  >
                    Change
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Full Name
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Enter your full name"
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="age" className="text-foreground">
                  Age
                </Label>
                <Input
                  id="age"
                  type="number"
                  value={formData.age}
                  onChange={(e) => handleInputChange("age", e.target.value)}
                  placeholder="Enter your age"
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="qualification" className="text-foreground flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  Current Qualification
                </Label>
                <Input
                  id="qualification"
                  value={formData.qualification}
                  onChange={(e) => handleInputChange("qualification", e.target.value)}
                  placeholder="e.g., A-Levels, BSc Computer Science"
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="your.email@example.com"
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="+44 7XXX XXXXXX"
                  className="bg-background"
                />
              </div>

              <div className="flex gap-3 mt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(1)}
                  className="flex-1"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-bold disabled:opacity-50"
                >
                  {isSubmitting ? "Booking..." : "Confirm Booking"}
                </Button>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default BookingSection;