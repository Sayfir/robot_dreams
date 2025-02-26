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
});
