const chai = require("chai");
const sinon = require("sinon");
const chaiHttp = require("chai-http");

const app = require("../api/app");
const { providers } = require('../database/models');

const providerJson = {
  "id": 1,
  "name": "CEDENTE 002",
  "tradingName": "CEDENTE 002 LTDA",
  "cnpj": {
    "id": 2,
    "cnpj": "00000000000002",
    "companyType": "1",
    "createdAt": "2020-10-29T21:20:33.000Z",
    "updatedAt": "2020-10-29T21:20:33.000Z"
  }
};

chai.use(chaiHttp);
const { expect } = chai;

describe("SUCCESS GET /providers/:id", () => {
  let response;

  before(async () => {
    sinon.stub(providers, "findOne").resolves(providerJson);

    response = await chai
      .request(app)
      .get("/providers/1")
  });

  afterEach(()=>{
    sinon.restore();
  });

  it("returns expected status (200)", () => {
    expect(response).to.have.status(200);
  });

  it("returns an object", () => {
    expect(response.body).to.be.an("object");
  });

  it("returns a correct object infos", () => {
    expect(response.body).to.deep.equal(providerJson);
  });
});

describe("FAIL GET /providers/:id", () => {
  let response;

  before(async () => {
    sinon.stub(providers, "findOne").resolves();

    response = await chai
      .request(app)
      .get("/providers/4")
  });

  afterEach(()=>{
    sinon.restore();
  });

  it("returns expected status (404)", () => {
    expect(response).to.have.status(404);
  });

  it("returns an error message", () => {
    expect(response.body).to.deep.equal({message: "User Not found"});
  });
});
