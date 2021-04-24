const Engineer = require("../lib/Engineer")

describe("Engineer class", () => {
    it("Testing github Object", () => {
        const g = new Engineer("eellis");
        expect(g.getGithub()).toBe("eellis");
    })
})