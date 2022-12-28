const chai = require("chai");
const sinon = require("sinon");
const chaiHttp = require("chai-http");

const app = require("../api/app");
const { orders } = require('../database/models');

const ordersJson = [
  {
    id: 1,
    nNf: "18153",
    value: "198450",
    emissionDate: "2020-10-30T11:00:00-03:00",
    orderStatusBuyer: "0",
    buyer: {
      name: "SACADO 001"
    },
    provider: {
      name: "CEDENTE 002"
    }
  },
  {
    id: 2,
    nNf: "18157",
    value: "168850",
    emissionDate: "2020-11-04T15:32:35-02:00",
    orderStatusBuyer: "0",
    buyer: {
      name: "SACADO 001"
    },
    provider: {
      name: "CEDENTE 002"
    }
  },
  {
    id: 3,
    nNf: "18184",
    value: "222795",
    emissionDate: "2020-11-10",
    orderStatusBuyer: "7",
    buyer: {
      name: "SACADO 001"
    },
    provider: {
      name: "CEDENTE 002"
    }
  }
];

chai.use(chaiHttp);
const { expect } = chai;

describe("SUCCESS GET /orders", () => {
  let response;

  before(async () => {
    sinon.stub(orders, "findAll").resolves(ordersJson);

    response = await chai
      .request(app)
      .get("/orders")
  });

  afterEach(()=>{
    sinon.restore();
  });

  it("returns expected status (200)", () => {
    expect(response).to.have.status(200);
  });

  it("returns an array", () => {
    expect(response.body).to.be.an("array");
  });

  it("returns a correct array infos", () => {
    expect(response.body).to.deep.equal(ordersJson);
  });
});

describe("FAIL GET /orders", () => {
  let response;

  before(async () => {
    sinon.stub(orders, "findAll").resolves();

    response = await chai
      .request(app)
      .get("/orders")
  });

  afterEach(()=>{
    sinon.restore();
  });

  it("returns expected status (404)", () => {
    expect(response).to.have.status(404);
  });

  it("returns a error message", () => {
    expect(response.body).to.deep.equal({message: "Data Not found"});
  });
});
