import { expect } from 'chai';
import { Manager } from '../src/manager';

describe('Manager Class', () => {
    describe('Positive tests (Employed Manager)', () => {
        const manager = new Manager(true, true, 'Bill', 120000);

        it('should return the correct name', () => {
            expect(manager.getName()).to.equal('Bill');
        });

        it('should calculate the correct salary', () => {
            expect(manager.getSalary()).to.equal(120000 * manager.getBonus());
        });

        it('should return the correct description when employed', () => {
            expect(manager.getDescription()).to.equal('Worker: Bill, Salary: $144000');
        });

        it('should return the correct duties description', () => {
            expect(manager.performDuties()).to.equal('Bill is managing the team and overseeing projects.');
        });
    });

    describe('Negative & Edge Case Tests', () => {
        it('should throw an error when getting salary if not employed', () => {
            const manager = new Manager(false, true, 'Bob', 120000);
            expect(manager.getSalary()).to.throw('Bob is not employed and cannot receive a salary.');
        });

        it('should return the correct description when not employed', () => {
            const manager = new Manager(false, true, 'Charlie', 110000);
            expect(manager.getDescription()).to.equal('Worker: Charlie is currently not employed.');
        });

        it('should return no duties when not employed', () => {
            const manager = new Manager(false, false, 'Dana', 115000);
            expect(manager.performDuties()).to.equal('Dana is not employed and has no duties.');
        });

        it('should return base salary when not bonus eligible', () => {
            const manager = new Manager(true, false, 'Eve', 130000);
            expect(manager.getSalary()).to.equal(130000);
        });
    });
});
