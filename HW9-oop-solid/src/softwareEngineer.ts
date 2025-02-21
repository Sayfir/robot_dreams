import { Engineer } from './engineer';

export class SoftwareEngineer extends Engineer {
    private programmingLanguage: string;

    constructor(isEmployed: boolean, isBonusEligible: boolean, name: string, salary: number, programmingLanguage: string) {
        super(isEmployed, isBonusEligible, name, salary);
        this.programmingLanguage = programmingLanguage;
    }

    getDescription(): string {
        if (!this.isEmployed) {
            return `Software Engineer: ${this.getName()} is currently not employed.`;
        }
        return `Software Engineer: ${this.getName()}, Salary: $${this.getSalary()}, Language: ${this.programmingLanguage}`;
    }

    performDuties(): string {
        if (!this.isEmployed) {
            return `${this.getName()} is not employed and has no duties.`;
        }
        return `${this.getName()} is coding in ${this.programmingLanguage} and developing applications.`;
    }
}
