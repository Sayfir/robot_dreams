import { MotorBike, Minivan } from './abstraction';

const bike = new MotorBike('Yamaha', 'YZF-R3', 2024);
console.log(`${bike.make} ${bike.model}, Year: ${bike.year}`);
bike.startEngine();
console.log('Fuel Level:', bike.getFuelLevel());
bike.stopEngine();

console.log('-----------------------------------------------------------');

const minivan = new Minivan('Toyota', 'Sienna', 2025);
console.log(`${minivan.make} ${minivan.model} ${Minivan.doorsNumber} Year: ${minivan.year}`);
minivan.startEngine();
console.log('Fuel Level:', minivan.getFuelLevel());
console.log('Remaining Fuel After Calculation:', minivan.calcFuelAmount());
minivan.stopEngine();
