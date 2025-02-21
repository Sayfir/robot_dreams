import { iEmployee } from './iemployee';
import { iSalary } from './isalary';

export class Manager implements iEmployee, iSalary {
    isEmployed: boolean;
    isBonusEligible: boolean;
    private salary: number;
    private name: string;

    constructor(isEmployed: boolean, isBonusEligible: boolean, name: string, salary: number) {
        this.isEmployed = isEmployed;
        this.isBonusEligible = isBonusEligible;
        this.name = name;
        this.salary = salary;
    }

    getSalary(): number {
        if (!this.isEmployed) {
            throw new Error(`${this.name} is not employed and cannot receive a salary.`);
        }
        return this.calculateSalary();
    }

    getDescription(): string {
        if (!this.isEmployed) {
            return `Manager: ${this.name} is currently not employed.`;
        }
        return `Manager: ${this.name}, Salary: $${this.getSalary()}`;
    }

    performDuties(): string {
        if (!this.isEmployed) {
            return `${this.name} is not employed and has no duties.`;
        }
        return `${this.name} is overseeing team projects and making strategic decisions.`;
    }

    calculateSalary(): number {
        return this.isBonusEligible ? this.salary * 1.1 : this.salary;
    }
}
