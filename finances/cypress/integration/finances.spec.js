/// <reference types = "cypress"/>

context("Dev finances", () => {
  beforeEach(() => {

    cy.visit("https://devfinance-agilizei.netlify.app/#");
    cy.get("#data-table tbody tr").should("have.length", 0);

  });
  it("Cadastrar entradas", () => {

    cy.get("#transaction .button").click();
    cy.get("#description").type("Mesada do papis");
    cy.get("[name=amount]").type(20);
    cy.get("[type=date]").type("2021-04-03");
    cy.get("button").contains("Salvar").click();
    cy.get("#data-table tbody tr").should("have.length", 1);

  });
  it("Cadastrar saída", () => {

    cy.get("#transaction .button").click();
    cy.get("#description").type("Ifood");
    cy.get("#amount").type(-20);
    cy.get("#date").type("2021-04-03");
    cy.get("button").contains("Salvar").click();
    cy.get("#data-table tbody tr").should("have.length", 1);

  });
  it("Remover entradas e saídas", () => {

    const entrada = 'Mesada';
    const saida = 'Ifood';

    cy.get("#transaction .button").click();
    cy.get("#description").type(entrada);
    cy.get("[name=amount]").type(20);
    cy.get("[type=date]").type("2021-04-03");
    cy.get("button").contains("Salvar").click();
    cy.get("#data-table tbody tr").should("have.length", 1);

    cy.get("#transaction .button").click();
    cy.get("#description").type(saida);
    cy.get("#amount").type(-20);
    cy.get("#date").type("2021-04-03");
    cy.get("button").contains("Salvar").click();
    cy.get("#data-table tbody tr").should("have.length", 2);

    cy.get('td.description')
      .contains(entrada)
      .parent()
      .find('img[onclick*=remove]')
      .click();
    
    cy.get('td.description')
      .contains(saida)
      .parent()
      .find('img[onclick*=remove]')
      .click();

    cy.get("#data-table tbody tr").should("have.length", 0);
    
  });
});