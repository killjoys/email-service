const request = require('supertest');
const server = require('../server');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;
const should = chai.should();
chai.use(chaiHttp);

describe('History', function () {

  it('get list of history', function testPath(done) {
    request(server)
      .get('/history')
      .end(function(err, res){
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.status.should.equal('success');
        expect(res.body.history.length).to.greaterThan(0);
        done();
      });
  });

  it('should return only one history when given history id is valid', function testPath(done) {
    request(server)
      .get('/history/1')
      .end(function(err, res){
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.status.should.equal('success');
        res.body.history.length.should.equal(1);
        done();
      });
  });

    it('should return empty when given history id is incorrect', function testPath(done) {
    request(server)
      .get('/history/invalidHi$toryId')
      .end(function(err, res){
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.status.should.equal('success');
        res.body.history.length.should.equal(0);
        done();
      });
  });

});