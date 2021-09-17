describe("sanity test", () => {
  it("sample test", () => {
    expect(1 + 2).to.equal(3);
    expect(1 + 2).not.to.equal(4);
  });
});

describe("test inputs", () => {
  beforeEach(() => {
    cy.visit("localhost:3000/pizza");
  });

  it("test input name", () => {
    cy.contains("Name");
    cy.contains("Size");
    cy.contains("Cheese");
    cy.contains("Pie");
    cy.contains("Vegetable");
    cy.contains("Chili");
    cy.contains("Special Instruction");
  });

  it("fill in form", () => {
    cy.get('[name="name"').type("Tom Hank");
    cy.get('[name="size"]').select("small");
    cy.get('[name="topping_cheese"]').check();
    cy.get('[name="topping_pie"]').check();
    cy.get('[name="topping_vegetable"]').check();
    cy.get('[name="topping_chili"]').check();
    cy.get('[name="special_instruction"]').type("(no special instruction here");
    cy.get('[name="submit_button"').click();
  });
});
