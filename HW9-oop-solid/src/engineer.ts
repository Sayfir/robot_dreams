import { iEmployee } from './iemployee';
import { iSalary } from './isalary';

export class Engineer implements iEmployee, iSalary {
    isEmployed: boolean;
    isBonusEligible: boolean;
    private name: string;
    private salary: number;

    constructor(isEmployed: boolean, isBonusEligible: boolean, name: string, salary: number) {
        this.isEmployed = isEmployed;
        this.isBonusEligible = isBonusEligible;
        this.name = name;
        this.salary = salary;
    }

    public getName(): string {
        return this.name;
    }

    public getSalary(): number {
        if (!this.isEmployed) {
            throw new Error(`${this.name} is not employed and cannot receive a salary.`);
        }
        return this.calculateSalary();
    }

    public getDescription(): string {
        if (!this.isEmployed) {
            return `Engineer: ${this.name} is currently not employed.`;
        }
        return `Engineer: ${this.name}, Salary: $${this.getSalary()}`;
    }

    public performDuties(): string {
        if (!this.isEmployed) {
            return `${this.name} is not employed and has no duties.`;
        }
        return `${this.name} is designing and developing software.`;
    }

    public calculateSalary(): number {
        return this.isBonusEligible ? this.salary * 1.2 : this.salary;
    }
}
