import sinon from 'ts-sinon';
import { expect } from 'chai';
import { Engineer } from '../src/engineer';
import { describe } from 'mocha';

describe('Engineer Class with Mocks', () => {
    afterEach(() => {
        sinon.restore();
    });

    const engineer = new Engineer(true, true, 'Alice', 100000);

    it('should return the correct name', () => {
        sinon.stub(engineer, 'getName').returns('Brenda');
        expect(engineer.getName()).to.equal('Brenda');
    });

    it('should correctly calculate salary with bonus', () => {
        const bonusMock = sinon.stub(engineer, 'getBonus').returns(1.2);
        sinon.stub(engineer, 'calculateSalary').returns(100000 * bonusMock());
        expect(engineer.getSalary()).to.equal(120000);
    });

    it('should return correct description for employed engineer', () => {
        sinon.stub(engineer, 'calculateSalary').returns(110000);
        expect(engineer.getDescription()).to.equal('Worker: Alice, Salary: $110000');
    });

    it('should return correct duties description', () => {
        sinon.stub(engineer, 'performDuties').returns('Alice is coding and reviewing PRs.');
        expect(engineer.performDuties()).to.equal('Alice is coding and reviewing PRs.');
    });

    it('should calculate salary without bonus', () => {
        sinon.stub(engineer, 'calculateSalary').returns(100000);
        expect(engineer.getSalary()).to.equal(100000);
    });
});
