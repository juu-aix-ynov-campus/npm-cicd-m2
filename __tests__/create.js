import create from "../src/create.js";

describe("create", () => {
    it("should return 'plop'", () => {
        expect(create()).toEqual("plop");
    });
});
