export interface iEmployee {
    isEmployed: boolean;
    isBonusEligible: boolean;

    getSalary(): number;
    getDescription(): string;
    performDuties(): string;
}
