// Import the dependencies for testing
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

// Configure chai
chai.use(chaiHttp);
chai.should();

describe("Contacts", () => {
    describe("GET /", () => {
        // Test GET call to empty database
        it("should return nothing because the database is empty", (done) => {
             chai.request(app)
                 .get('/api/contacts')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     res.body.should.have.property('status').eql('success');
                     res.body.should.have.property('message').eql('Contacts retrieved successfully');
                     done();
                  });
         });
    });
});