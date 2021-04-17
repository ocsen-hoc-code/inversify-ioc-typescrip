import chai from 'chai';
const expect = chai.expect;

describe('home', () => {
    it('case 1', (done) => {
        const sum = 1 + 1;
        expect(sum).equal(2);
        done();
    });
});