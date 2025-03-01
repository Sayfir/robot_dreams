import { Engineer } from './engineer';

export class SoftwareEngineer extends Engineer {
    private programmingLanguage: string;

    public constructor(isEmployed: boolean, isBonusEligible: boolean, name: string, baseSalary: number, programmingLanguage: string) {
        super(isEmployed, isBonusEligible, name, baseSalary);
        this.programmingLanguage = programmingLanguage;
    }

    protected calculateSalary(): number {
        return this.isBonusEligible ? this.baseSalary * this.getBonus() : this.baseSalary;
    }

    public performDuties(): string {
        if (!this.isEmployed) {
            return `${this.name} is not employed and has no duties.`;
        }
        return `${this.name} is coding in ${this.programmingLanguage} and developing applications.`;
    }
}
