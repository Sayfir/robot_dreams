import { expect } from 'chai';
import { Manager } from '../src/manager';

describe('Manager Class', () => {
    let manager: Manager;

    beforeEach(() => {
        manager = new Manager({ isEmployed: true, isBonusEligible: true, name: 'Bill', baseSalary: 120000 });
    });

    it('should return the correct name', () => {
        expect(manager.getName()).to.equal('Bill');
    });

    it('should calculate the correct salary', () => {
        expect(manager.getSalary()).to.equal(144000);
    });

    it('should return the correct description when employed', () => {
        const description = manager.getDescription();
        expect(description).to.equal('Worker: Bill, Salary: $144000');
    });

    it('should return the correct duties description', () => {
        expect(manager.performDuties()).to.equal('Bill is managing the team and overseeing projects.');
    });

    it('should throw an error when getting salary if not employed', () => {
        manager = new Manager({ isEmployed: false, isBonusEligible: true, name: 'Bob', baseSalary: 120000 });
        expect(() => manager.getSalary()).to.throw('Bob is not employed and cannot receive a salary.');
    });
});
