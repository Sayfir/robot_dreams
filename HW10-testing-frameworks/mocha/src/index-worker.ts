import { Engineer } from './engineer';
import { Manager } from './manager';
import { SoftwareEngineer } from './software-engineer';
import { Employee } from './employee';

function printWorkerDetails(employee: Employee): void {
    console.log(employee.getSalary());
    console.log(employee.getDescription());
    console.log(employee.performDuties());
}

const engineer = new Engineer(true, false, 'Tom', 80000);
const manager = new Manager(true, true, 'Bill', 120000);
const softwareEngineer = new SoftwareEngineer(true, true, 'Gary', 100000, 'TypeScript');

printWorkerDetails(engineer);
printWorkerDetails(manager);
printWorkerDetails(softwareEngineer);
