import { Engineer } from './engineer';
import { Manager } from './manager';
import { SoftwareEngineer } from './software-engineer';
import { Employee } from './employee';
import { EmployeeDetails } from './employee-details';

export function printWorkerDetails(employee: Employee): EmployeeDetails {
    const details: EmployeeDetails = {
        salary: employee.getSalary(),
        description: employee.getDescription(),
        duties: employee.performDuties()
    };
    return details;
}

const engineer = new Engineer(true, false, 'Tom', 80000);
const manager = new Manager(true, true, 'Bill', 120000);
const softwareEngineer = new SoftwareEngineer(true, true, 'Gary', 100000, 'TypeScript');

printWorkerDetails(engineer);
printWorkerDetails(manager);
printWorkerDetails(softwareEngineer);
