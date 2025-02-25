import { Engineer } from './engineer';
import { Manager } from './manager';
import { SoftwareEngineer } from './software-engineer';
import { iEmployee } from './iemployee';

function printWorkerDetails(worker: iEmployee): void {
    console.log(worker.getSalary());
    console.log(worker.getDescription());
    console.log(worker.performDuties());
}

const engineer = new Engineer(true, false, 'Tom', 80000);
const manager = new Manager(true, true, 'Bill', 120000);
const softwareEngineer = new SoftwareEngineer(true, true, 'Gary', 100000, 'TypeScript');

printWorkerDetails(engineer);
printWorkerDetails(manager);
printWorkerDetails(softwareEngineer);
