import { expect } from 'chai';
import { Engineer } from '../src/engineer';

describe('Engineer Class', () => {
    describe('Positive tests (Employed Engineer)', () => {
        const engineer = new Engineer(true, false, 'Jack', 80000);

        it('should return the correct name', () => {
            expect(engineer.getName()).to.equal('Jack');
        });

        it('should calculate the correct salary', () => {
            expect(engineer.getSalary()).to.equal(80000);
        });

        it('should return the correct description when employed', () => {
            expect(engineer.getDescription()).to.equal('Worker: Jack, Salary: $80000');
        });

        it('should return the correct duties description', () => {
            expect(engineer.performDuties()).to.equal('Jack is designing and developing software.');
        });
    });

    describe('Negative & Edge Case Tests', () => {
        it('should throw an error when getting salary if not employed', () => {
            const engineer = new Engineer(false, false, 'George', 120000);
            expect(engineer.getSalary()).to.throw('George is not employed and cannot receive a salary.');
        });

        it('should return the correct description when not employed', () => {
            const engineer = new Engineer(false, true, 'Charlie', 90000);
            expect(engineer.getDescription()).to.equal('Worker: Charlie is currently not employed.');
        });

        it('should return no duties when not employed', () => {
            const engineer = new Engineer(false, false, 'Dana', 95000);
            expect(engineer.performDuties()).to.equal('Dana is not employed and has no duties.');
        });

        it('should calculate the correct salary when bonus eligible', () => {
            const engineer = new Engineer(true, true, 'Eve', 85000);
            expect(engineer.getSalary()).to.equal(85000 * engineer.getBonus());
        });
    });
});
