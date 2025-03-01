import { describe, test, expect } from '@jest/globals';
import { Engineer } from '../src/engineer';
import { printWorkerDetails } from '../src/index-worker';

describe('printWorkerDetails unit test', () => {
    test('should return correct employee details', () => {
        const engineer = new Engineer(true, false, 'Jack', 80000);

        const result = printWorkerDetails(engineer);

        expect(result.salary).toBe(80000);
        expect(result.description).toBe('Worker: Jack, Salary: $80000');
        expect(result.duties).toBe('Jack is designing and developing software.');
    });
});
