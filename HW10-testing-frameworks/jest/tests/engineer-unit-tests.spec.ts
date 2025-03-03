import { expect as expectChai } from 'chai';
import { describe, test, expect } from '@jest/globals';
import { Engineer } from '../src/engineer';

describe('Manager Class', () => {
    describe('Positive tests (Employed Engineer)', () => {
        const engineer = new Engineer(true, false, 'Jack', 80000);

        test('should return the correct name', () => {
            expect(engineer.getName()).toBe('Jack');
        });

        test('should calculate the correct salary', () => {
            expect(engineer.getSalary()).toBe(80000);
        });

        test('should return the correct description when employed', () => {
            expect(engineer.getDescription()).toBe('Worker: Jack, Salary: $80000');
        });

        test('should return the correct duties description', () => {
            expect(engineer.performDuties()).toBe('Jack is designing and developing software.');
        });
    });

    describe('Negative & Edge Case Tests', () => {
        test('should throw an error when getting salary if not employed', () => {
            const engineer = new Engineer(false, false, 'George', 120000);
            expectChai(() => engineer.getSalary()).to.throw('George is not employed and cannot receive a salary.');
        });

        test('should return the correct description when not employed', () => {
            const engineer = new Engineer(false, true, 'Charlie', 90000);
            expect(engineer.getDescription()).toBe('Worker: Charlie is currently not employed.');
        });

        test('should return no duties when not employed', () => {
            const engineer = new Engineer(false, false, 'Dana', 95000);
            expect(engineer.performDuties()).toBe('Dana is not employed and has no duties.');
        });

        test('should calculate the correct salary when bonus eligible', () => {
            const engineer = new Engineer(true, true, 'Eve', 85000);
            expect(engineer.getSalary()).toBe(85000 * engineer.getBonus());
        });
    });
});
