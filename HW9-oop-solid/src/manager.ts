import { Employee } from './employee';

export class Manager extends Employee {
    private static readonly BONUS_MODIFIER = 1.2;

    public constructor(isEmployed: boolean, isBonusEligible: boolean, name: string, baseSalary: number) {
        super(isEmployed, isBonusEligible, name, baseSalary);
    }

    public getBonus(): number {
        return Manager.BONUS_MODIFIER;
    }

    public performDuties(): string {
        if (!this.isEmployed) {
            return `${this.name} is not employed and has no duties.`;
        }
        return `${this.name} is managing the team and overseeing projects.`;
    }

    protected calculateSalary(): number {
        return this.isBonusEligible ? this.baseSalary * this.getBonus() : this.baseSalary;
    }
}
