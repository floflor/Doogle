/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Dog, conn } = require('../../src/db.js');

const agent = session(app);
const dog = {
  name: "Lola",
  weight: "15",
  height: "10",
  life_span: "20",
  temps: "Loving"
};

describe('/POST /dog', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));

  it('debería mostrar un status 400 si no se le paso ningun perro', () =>
    agent.post('/dog').expect(400)
  );

});

describe('/GET /dog', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));

  it('should respond with 400 status if theres no dog properties', () =>
    agent.post('/dog').expect(400)
  );

});

describe('GET /temperaments', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));

  it('should get 200', () =>
    agent.get('/temperaments').expect(200)
  );

  it('response should be an array', async () =>
    await agent.get('/temperaments')
      .then((res) => expect(res.body).to.be.an('array')));

  it('should have property name',async () =>
   await agent.get('/temperaments')
      .then((res) => { expect(res.body[0]).to.have.property('name') }));

  it('should have property name',async () =>
   await agent.get('/temperaments')
      .then((res) => { expect(res.body[1]).to.have.property('name', 'Curious') }))



});




