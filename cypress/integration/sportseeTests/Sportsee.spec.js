// BarChartActivity.spec.js created with Cypress

describe("Sportsee", () => {
  beforeEach(() => {
    cy.visit("https://gallant-kare-abce48.netlify.app/");
    cy.contains("User 2").click();
  });

  it("display header and menu", () => {
    cy.get(".cardsKeysInfos > :nth-child(1) > img");
    cy.get("ul > :nth-child(2) > a").contains("Accueil").click();
    cy.contains("User 2");
  });

  it("display title", () => {
    cy.get("h1 > span").contains("Cecilia");
  });

  it("display BarChartActivity", () => {
    cy.get(
      ":nth-child(6) > .recharts-bar-rectangles > :nth-child(1) > :nth-child(4) > .recharts-rectangle"
    ).trigger("mouseover");
    cy.get(".recharts-tooltip-wrapper").should("be.visible");
    cy.contains("70kg 500Kcal");
  });

  it("display LineChartSessions", () => {
    cy.contains("Durée moyenne des sessions");
  });

  it("display RadarChartActivityType", () => {
    cy.contains("Cardio");
    cy.contains("Intensité");
    cy.contains("Vitesse");
    cy.contains("Force");
    cy.contains("Endurance");
    cy.contains("Energie");
  });

  it("display RadialBarChartScore", () => {
    cy.contains("Score");
    cy.contains("30%");
  });

  it("display CardKeyInfo", () => {
    cy.get(".cardsKeysInfos > :nth-child(1) > img");
    cy.contains("2.5kCalCalories");
  });
});
