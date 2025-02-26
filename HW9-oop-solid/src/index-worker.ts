import { Engineer } from './engineer';
import { Manager } from './manager';
import { SoftwareEngineer } from './software-engineer';
import { Employee } from './employee';

function printWorkerDetails(employee: Employee): void {
    console.log(employee.getSalary());
    console.log(employee.getDescription());
    console.log(employee.performDuties());
}

const engineer = new Engineer({ isEmployed: true, isBonusEligible: false, name: 'Tom', baseSalary: 80000 });
const manager = new Manager({ isEmployed: true, isBonusEligible: true, name: 'Bill', baseSalary: 120000 });
const softwareEngineer = new SoftwareEngineer({ isEmployed: true, isBonusEligible: true, name: 'Gary', baseSalary: 100000 }, 'TypeScript');

printWorkerDetails(engineer);
printWorkerDetails(manager);
printWorkerDetails(softwareEngineer);
