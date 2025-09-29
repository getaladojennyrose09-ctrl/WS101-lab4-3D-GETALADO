
class Flight {
  constructor(number, destination, duration, status) {
    this.number = number;           // string (e.g., 'AA123')
    this.destination = destination; // string (e.g., 'New York')
    this.duration = duration;       // number (minutes, e.g., 180)
    this.status = status;           // string (e.g., 'scheduled', 'boarding')
  }
}


class FlightSchedule {
  constructor() {
    this.flights = []; // Array of Flight objects
  }

  
  addFlight(flight) {
    if (!(flight instanceof Flight)) {
      throw new Error('Argument must be a Flight instance');
    }
    this.flights.push(flight);
  }

  
  averageDuration() {
    if (this.flights.length === 0) return 0;
    const totalDuration = this.flights.reduce((sum, flight) => sum + flight.duration, 0);
    return totalDuration / this.flights.length;
  }

