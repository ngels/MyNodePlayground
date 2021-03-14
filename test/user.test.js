const app = require("../app");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = chai;

chai.use(chaiHttp);
describe("Server!", () => {
it("welcome! we are currently testing the user controller", done => {
chai
.request(app)
.get("/users/all")
.end((err, res) => {
expect(res).to.have.status(200);
expect(res.body.length).to.equals(2);
done();});
});
});