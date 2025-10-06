
type HotelBooking = {
    bookingId: string;
    hotelName: string;
    roomType: string;
    nights: number;
  };
  
  type BusBooking = {
    bookingId: string;
    busOperator: string;
    seatNumber: number;
    departureTime: Date;
  };
  
  function isBusBooking(booking: HotelBooking | BusBooking): booking is BusBooking {
    return "busOperator" in booking;
  }

  function printHotelBooking(booking: HotelBooking) {
    console.log("🏨 Hotel Booking Details:");
    console.log("Booking ID:", booking.bookingId);
    console.log("Hotel Name:", booking.hotelName);
    console.log("Room Type:", booking.roomType);
    console.log("Nights:", booking.nights);
  }
  
  function printBusBooking(booking: BusBooking) {
    console.log("🚌 Bus Booking Details:");
    console.log("Booking ID:", booking.bookingId);
    console.log("Bus Operator:", booking.busOperator);
    console.log("Seat Number:", booking.seatNumber);
    console.log("Departure Time:", booking.departureTime);
  }

  function printBooking(booking: HotelBooking | BusBooking) {
    if (isBusBooking(booking)) {
      printBusBooking(booking);
    } else {
      printHotelBooking(booking);
    }
  }

  const myHotelBooking: HotelBooking = {
    bookingId: "H123",
    hotelName: "Grand Plaza",
    roomType: "Deluxe",
    nights: 3,
  };
  
  const myBusBooking: BusBooking = {
    bookingId: "B456",
    busOperator: "Express Travels",
    seatNumber: 21,
    departureTime: new Date("2025-10-10T08:30:00"),
  };
  
  printBooking(myHotelBooking);
  console.log("----------------------");
  printBooking(myBusBooking);
  