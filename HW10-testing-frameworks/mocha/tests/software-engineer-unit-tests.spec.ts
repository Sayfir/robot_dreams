import { expect } from 'chai';
import { SoftwareEngineer } from '../src/software-engineer';

describe('SoftwareEngineer Class', () => {
    describe('Positive tests (Employed SoftwareEngineer)', () => {
        const softwareEngineer = new SoftwareEngineer(true, false, 'Travis', 80000, 'Java');

        it('should return the correct name', () => {
            expect(softwareEngineer.getName()).to.equal('Travis');
        });

        it('should calculate the correct salary', () => {
            expect(softwareEngineer.getSalary()).to.equal(80000);
        });

        it('should return the correct description when employed', () => {
            expect(softwareEngineer.getDescription()).to.equal('Worker: Travis, Salary: $80000');
        });

        it('should return the correct duties description', () => {
            expect(softwareEngineer.performDuties()).to.equal('Travis is coding in Java and developing applications.');
        });
    });

    describe('Negative & Edge Case Tests', () => {
        it('should throw an error when getting salary if not employed', () => {
            const softwareEngineer = new SoftwareEngineer(false, false, 'George', 120000, 'JS');
            expect(softwareEngineer.getSalary()).to.throw('George is not employed and cannot receive a salary.');
        });

        it('should return the correct description when not employed', () => {
            const softwareEngineer = new SoftwareEngineer(false, true, 'Charlie', 90000, 'Python');
            expect(softwareEngineer.getDescription()).to.equal('Worker: Charlie is currently not employed.');
        });

        it('should return no duties when not employed', () => {
            const softwareEngineer = new SoftwareEngineer(false, false, 'Dana', 95000, 'C++');
            expect(softwareEngineer.performDuties()).to.equal('Dana is not employed and has no duties.');
        });

        it('should return adjusted salary when bonus eligible', () => {
            const softwareEngineer = new SoftwareEngineer(true, true, 'Eve', 85000, 'JavaScript');
            expect(softwareEngineer.getSalary()).to.equal(85000 * softwareEngineer.getBonus());
        });
    });
});
