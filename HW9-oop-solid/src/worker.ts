import { iEmployee } from './iemployee';

export abstract class Worker implements iEmployee {
    public isEmployed: boolean;
    public isBonusEligible: boolean;
    public baseSalary: number;
    protected name: string;

    public constructor(isEmployed: boolean, isBonusEligible: boolean, name: string, baseSalary: number) {
        this.isEmployed = isEmployed;
        this.isBonusEligible = isBonusEligible;
        this.name = name;
        this.baseSalary = baseSalary;
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
            return `Worker: ${this.name} is currently not employed.`;
        }
        return `Worker: ${this.name}, Salary: $${this.getSalary()}`;
    }

    public abstract performDuties(): string;

    protected abstract calculateSalary(): number;
}
