import { Engineer } from './engineer';
import { EmployeeOptions } from './employee-options';

export class SoftwareEngineer extends Engineer {
    private programmingLanguage: string;

    public constructor(options: EmployeeOptions, programmingLanguage: string) {
        super(options);
        this.programmingLanguage = programmingLanguage;
    }

    protected calculateSalary(): number {
        return this.isBonusEligible ? this.baseSalary * this.getBonus() : this.baseSalary;
    }

    public performDuties(): string {
        if (!this.isEmployed) {
            return `${this.getName()} is not employed and has no duties.`;
        }
        return `${this.getName()} is coding in ${this.programmingLanguage} and developing applications.`;
    }
}
