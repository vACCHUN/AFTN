export type FlightPlan = {
  messageType: "FPL" | "DEP" | "ARR";
  callsign: string;
  groundspeed: number;
  transponderCode: string;
  flightRules: "I" | "V";
  aircraftType: string;
  aircraftWTC: "L" | "M" | "H" | "J";
  aircraftEquipment: string;
  aircraftTransponder: string;
  departure: string;
  arrival: string;
  alternate: string;
  cruiseTAS: string;
  altitude: string;
  departureTime: string;
  enrouteTime: string;
  fuelTime: string;
  remarks: string;
  route: string;
  isNew: boolean;
  messageNumber: number;
  inFlight: boolean;
  messageTime: string;
};

export type DepartureMessage = {
  callsign: string;
  transponderCode: string;
  departure: string;
  arrival: string;
  departureTime: string;
  dof: string;
  messageTime: string;
};
