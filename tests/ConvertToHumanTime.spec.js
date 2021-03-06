import {expect} from 'chai';
import converToHumanTime from '../src/ConvertToHumanTime';

describe('ConvertToHumanTime', () => {
    it('should receive 0ms and convert to 0:00', () => {
        expect(converToHumanTime(0)).to.be.equal('0:00');
    });

    it('should receive 1000ms and convert to 0:01', () => {
        expect(converToHumanTime(1000)).to.be.equal('0:01');
    });

    it('should receive 11000ms and convert to 0:11', () => {
        expect(converToHumanTime(11000)).to.be.equal('0:11');
    });

    it('should receive 60000ms and convert to 1:00', () => {
        expect(converToHumanTime(60000)).to.be.equal('1:00');
    });
});
