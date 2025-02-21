import { MotorBike, Minivan } from './abstraction';
import { Users } from './user.interface';
import { UserSummary } from './user.class';

export async function getJson(): Promise<Users[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/');
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const json = (await response.json()) as Users[];
    return json;
}

export async function formatUserSummary(userIndex: number): Promise<UserSummary> {
    const data = await getJson();
    const user = data[userIndex];
    return new UserSummary(user);
}

(async () => {
    const userSummary = await formatUserSummary(2);
    console.log(userSummary);
})();

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
