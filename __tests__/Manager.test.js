const Manager = require("../lib/Manager")

describe("Manager class", () => {
    it("Testing officeNumber Object", () => {
        const o = new Manager("14b");
        expect(o.getOfficeNumber()).toBe("14b");
    })
})