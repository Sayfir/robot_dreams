import { Employee } from './employee';
import { EmployeeOptions } from './employee-options';

export class Engineer extends Employee {
    private static readonly BONUS_MODIFIER = 1.1;

    public constructor({ isEmployed, isBonusEligible, name, baseSalary }: EmployeeOptions) {
        super(isEmployed, isBonusEligible, name, baseSalary);
    }

    public getBonus(): number {
        return Engineer.BONUS_MODIFIER;
    }

    public performDuties(): string {
        if (!this.isEmployed) {
            return `${this.getName()} is not employed and has no duties.`;
        }
        return `${this.getName()} is designing and developing software.`;
    }

    protected calculateSalary(): number {
        return this.isBonusEligible ? this.baseSalary * this.getBonus() : this.baseSalary;
    }
}
