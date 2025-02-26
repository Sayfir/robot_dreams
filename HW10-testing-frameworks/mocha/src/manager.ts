import { Employee } from './employee';
import { EmployeeOptions } from './employee-options';

export class Manager extends Employee {
    private static readonly BONUS_MODIFIER = 1.2;

    public constructor({ isEmployed, isBonusEligible, name, baseSalary }: EmployeeOptions) {
        super(isEmployed, isBonusEligible, name, baseSalary);
    }

    public getBonus(): number {
        return Manager.BONUS_MODIFIER;
    }

    public performDuties(): string {
        if (!this.isEmployed) {
            return `${this.getName()} is not employed and has no duties.`;
        }
        return `${this.getName()} is managing the team and overseeing projects.`;
    }

    protected calculateSalary(): number {
        if (!this.isEmployed) {
            throw new Error(`${this.getName()} is not employed and cannot have a salary.`);
        }
        return this.isBonusEligible ? this.baseSalary * this.getBonus() : this.baseSalary;
    }
}
