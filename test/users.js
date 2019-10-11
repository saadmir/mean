const supertest = require("supertest");
const should = require("should");

const server = supertest.agent('http://localhost:3000');


describe('user test', function(){

  it("should return an object", function(done){
    server
      .get("/users")
      .expect("Content-type",/json/)
      .expect(200)
      .end(function(err,res){
        res.status.should.equal(200);
        res.body.should.be.an.Object();
        res.body.should.have.property('foo', 'bar');
        done();
      });
  });
});