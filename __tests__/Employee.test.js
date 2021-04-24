const Employee = require("../lib/Employee")

describe("Employee class", () => {
    it("Testing name Object", () => {
        const e = new Employee("Eric");
        expect(e.getName()).toBe("Eric");
    })
    it("Testing id Object", () => {
        const i = new Employee("12");
        expect(i.getId()).toBe("12");
    })
    it("Testing email Object", () => {
        const o = new Employee("gmail");
        expect(o.getEmail()).toBe("gmail");
    })
})