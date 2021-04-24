const Intern = require("../lib/Intern")

describe("Intern class", () => {
    it("Testing school Object", () => {
        const s = new Intern("TCU");
        expect(s.getSchool()).toBe("TCU");
    })
})