import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, Clock, User, Mail, Phone, GraduationCap, CheckCircle } from "lucide-react";
import { toast } from "sonner";

interface TimeSlot {
  date: Date;
  time: string;
  available: boolean;
}

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedSlot) {
      toast.error("Please select a time slot");
      return;
    }

    if (!formData.name || !formData.age || !formData.qualification || !formData.email || !formData.phone) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("Assessment slot booked successfully! We'll send you a confirmation email shortly.");
    
    setSelectedSlot(null);
    setFormData({
      name: "",
      age: "",
      qualification: "",
      email: "",
      phone: ""
    });
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
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-gold font-semibold text-sm tracking-widest uppercase mb-4">
            Book Your Assessment
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
            Schedule Your Interview Slot
          </h2>
          <p className="text-lg text-primary-foreground/70 font-body">
            Select an available weekend slot for your initial assessment and interview
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Time Slots Selection */}
          <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10">
            <h3 className="text-xl font-display font-bold text-primary-foreground mb-6 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-gold" />
              Available Slots
            </h3>
            
            <div className="space-y-4">
              {weekendDates.map((date, dateIndex) => (
                <div key={dateIndex} className="space-y-2">
                  <div className="text-sm font-medium text-gold mb-2">
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
                            flex items-center justify-center gap-1
                            ${isSelected 
                              ? 'bg-gold text-navy shadow-lg' 
                              : 'bg-primary-foreground/10 text-primary-foreground/80 hover:bg-primary-foreground/20'
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
            </div>

            {selectedSlot && (
              <div className="mt-6 p-4 rounded-lg bg-gold/20 border border-gold/30">
                <div className="flex items-center gap-2 text-gold">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">
                    {formatDate(selectedSlot.date)} at {selectedSlot.time} (UK)
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Booking Form */}
          <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10">
            <h3 className="text-xl font-display font-bold text-primary-foreground mb-6 flex items-center gap-2">
              <User className="w-5 h-5 text-gold" />
              Candidate Details
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-primary-foreground/80 flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Full Name
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Enter your full name"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="age" className="text-primary-foreground/80">
                  Age
                </Label>
                <Input
                  id="age"
                  type="number"
                  value={formData.age}
                  onChange={(e) => handleInputChange("age", e.target.value)}
                  placeholder="Enter your age"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="qualification" className="text-primary-foreground/80 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  Current Qualification
                </Label>
                <Input
                  id="qualification"
                  value={formData.qualification}
                  onChange={(e) => handleInputChange("qualification", e.target.value)}
                  placeholder="e.g., A-Levels, BSc Computer Science"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-primary-foreground/80 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="your.email@example.com"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-primary-foreground/80 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="+44 7XXX XXXXXX"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || !selectedSlot}
                className="w-full bg-gold hover:bg-gold/90 text-navy font-bold py-6 mt-4 disabled:opacity-50"
              >
                {isSubmitting ? "Booking..." : "Book Assessment Slot"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;