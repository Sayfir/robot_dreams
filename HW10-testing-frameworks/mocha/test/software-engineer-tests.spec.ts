import { expect } from 'chai';
import { SoftwareEngineer } from '../src/software-engineer';

describe('Manager Class', () => {
    let softwareEngineer: SoftwareEngineer;

    beforeEach(() => {
        softwareEngineer = new SoftwareEngineer({ isEmployed: true, isBonusEligible: false, name: 'Travis', baseSalary: 80000 }, 'Java');
    });

    it('should return the correct name', () => {
        expect(softwareEngineer.getName()).to.equal('Travis');
    });

    it('should calculate the correct salary', () => {
        expect(softwareEngineer.getSalary()).to.equal(80000);
    });

    it('should return the correct description when employed', () => {
        const description = softwareEngineer.getDescription();
        expect(description).to.equal('Worker: Travis, Salary: $80000');
    });

    it('should return the correct duties description', () => {
        expect(softwareEngineer.performDuties()).to.equal('Travis is coding in Java and developing applications.');
    });

    it('should throw an error when getting salary if not employed', () => {
        softwareEngineer = new SoftwareEngineer({ isEmployed: false, isBonusEligible: false, name: 'George', baseSalary: 120000 }, 'JS');
        expect(() => softwareEngineer.getSalary()).to.throw('George is not employed and cannot receive a salary.');
    });

    it('should return the correct description when not employed', () => {
        softwareEngineer = new SoftwareEngineer({ isEmployed: false, isBonusEligible: true, name: 'Charlie', baseSalary: 90000 }, 'Python');
        const description = softwareEngineer.getDescription();
        expect(description).to.equal('Worker: Charlie is currently not employed.');
    });

    it('should return no duties when not employed', () => {
        softwareEngineer = new SoftwareEngineer({ isEmployed: false, isBonusEligible: false, name: 'Dana', baseSalary: 95000 }, 'C++');
        const duties = softwareEngineer.performDuties();
        expect(duties).to.equal('Dana is not employed and has no duties.');
    });

    it('should return adjusted salary when bonus eligible', () => {
        softwareEngineer = new SoftwareEngineer({ isEmployed: true, isBonusEligible: true, name: 'Eve', baseSalary: 85000 }, 'JavaScript');
        const salary = softwareEngineer.getSalary();
        expect(salary).to.equal(85000 * softwareEngineer.getBonus());
    });
});
