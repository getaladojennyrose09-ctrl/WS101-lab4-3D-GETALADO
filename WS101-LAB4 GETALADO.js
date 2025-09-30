
class Flight {
  constructor(number, destination, duration, status) {
    this.number = number;           
    this.destination = destination;
    this.duration = duration;      
    this.status = status;           
  }
}


class FlightSchedule {
  constructor() {
    this.flights = []; 
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

  
  findByDestination(destination) {
    return this.flights.filter(flight => 
      flight.destination.toLowerCase() === destination.toLowerCase()
    );
  }

  findByStatus(status) {
    return this.flights.filter(flight => 
      flight.status.toLowerCase() === status.toLowerCase()
    );
  }

  removeFlight(number) {
    const index = this.flights.findIndex(flight => flight.number === number);
    if (index !== -1) {
      return this.flights.splice(index, 1)[0];
    }
    return null;
  }



