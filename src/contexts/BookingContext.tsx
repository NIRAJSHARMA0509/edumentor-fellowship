import { createContext, useContext, useState, ReactNode } from "react";

interface BookingContextType {
  isOpen: boolean;
  openBookingDialog: () => void;
  closeBookingDialog: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openBookingDialog = () => setIsOpen(true);
  const closeBookingDialog = () => setIsOpen(false);

  return (
    <BookingContext.Provider value={{ isOpen, openBookingDialog, closeBookingDialog }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
};
