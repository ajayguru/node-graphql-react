const { graphql } = require('graphql');
const schema = require('../../src/graphql/schema');
const api  = 'http://localhost:8080/';
const app = require('../../src/server');
const supertest = require("supertest");

const request = supertest(app);
let authData;

describe('Tests the Sign In', () => {
    beforeEach(async () => {
        authData = {
            email: 'demo@demo.com',
            password: 'demo'
        };
    });
it('should Sign-in a user with a correct credential', async (done) => {
    const signInQuery = {
      query: `
        {
          signIn(email: "${authData.email}", password: "${authData.password}") {
            bearer
            userId
          }
        }
      `
    };
  request
  .post("/graphql")
  .send(signInQuery)
  .set("Accept", "application/json")
  .expect(200)
  .end(function (err, res) {
    if (err) return done(err);
    expect(res.body).toBeInstanceOf(Object);
    expect(res.body.data.signIn.userId).toEqual("1");
    done();
  });
});
});