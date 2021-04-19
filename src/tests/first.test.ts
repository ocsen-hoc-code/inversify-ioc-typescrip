// import chai from 'chai';
// const expect = chai.expect;
import request from 'request';
import dotenv from 'dotenv';

dotenv.config();
const hostname = process.env.HOSTNAME || '0.0.0.0';
const port = process.env.PORT || 8888;

describe('home', () => {
    it('case 1', (done) => {
        for (let i = 0; i < 1000; i++){
            request.get(`http://${hostname}:${port}/test`, (_error, _req, body) => {
                console.log(body);
            });
        }
       
        done();
    });
});