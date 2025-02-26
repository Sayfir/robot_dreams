import { expect } from 'chai';
import { Engineer } from '../src/engineer';

describe('Manager Class', () => {
    let engineer: Engineer;

    beforeEach(() => {
        engineer = new Engineer({ isEmployed: true, isBonusEligible: false, name: 'Jack', baseSalary: 80000 });
    });

    it('should return the correct name', () => {
        expect(engineer.getName()).to.equal('Jack');
    });

    it('should calculate the correct salary', () => {
        expect(engineer.getSalary()).to.equal(80000);
    });

    it('should return the correct description when employed', () => {
        const description = engineer.getDescription();
        expect(description).to.equal('Worker: Jack, Salary: $80000');
    });

    it('should return the correct duties description', () => {
        expect(engineer.performDuties()).to.equal('Jack is designing and developing software.');
    });

    it('should throw an error when getting salary if not employed', () => {
        engineer = new Engineer({ isEmployed: false, isBonusEligible: false, name: 'George', baseSalary: 120000 });
        expect(() => engineer.getSalary()).to.throw('George is not employed and cannot receive a salary.');
    });

    it('should return the correct description when not employed', () => {
        engineer = new Engineer({ isEmployed: false, isBonusEligible: true, name: 'Charlie', baseSalary: 90000 });
        const description = engineer.getDescription();
        expect(description).to.equal('Worker: Charlie is currently not employed.');
    });

    it('should return no duties when not employed', () => {
        engineer = new Engineer({ isEmployed: false, isBonusEligible: false, name: 'Dana', baseSalary: 95000 });
        const duties = engineer.performDuties();
        expect(duties).to.equal('Dana is not employed and has no duties.');
    });

    it('should calculate the correct salary when bonus eligible', () => {
        engineer = new Engineer({ isEmployed: true, isBonusEligible: true, name: 'Eve', baseSalary: 85000 });
        const salary = engineer.getSalary();
        expect(salary).to.equal(85000 * engineer.getBonus());
    });
});
