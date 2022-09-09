import capitalize from "lodash/capitalize";
import mockProject from "../fixtures/projects.json"

describe("Project List", () => {
  beforeEach(() => {
    cy.intercept('GET', "http://prolog-api.profy.dev/project", { fixture: 'projects.json' }),
      cy.visit("http://localhost:3000");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });
    it("renders the project", () => {
      const languageNames = ["React", "Node.js", "Python"]
      cy.findByRole("main").findAllByRole("listitem").each(($el, index) => {
        const listItem = cy.wrap($el)
        cy.wrap($el).contains(mockProject[index].name);
        cy.wrap($el).contains(languageNames[index]);
        cy.wrap($el).contains(mockProject[index].numIssues);
        cy.wrap($el).contains(mockProject[index].numEvents24h);
        cy.wrap($el).contains(capitalize(mockProject[index].status));
        cy.wrap($el).findByRole("link").should("have.attr", "href", "/issues");
      });
    })
  })
})

export { }
