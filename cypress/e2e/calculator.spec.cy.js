describe("e2e test for calculator app", () => {
  let btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btn0;
  let btnPlus,
    btnMinus,
    btnEqual,
    btnSlash,
    btnMultiply,
    btnDot,
    btnPlusMinus,
    btnPercentages,
    dashboard;

  before(() => {
    cy.visit("http://localhost:3000/");
    cy.wait(5000);

    cy.get('[data-test="btn-1"]')
      .should("exist")
      .should("be.visible")
      .then(($el) => {
        btn1 = $el;
      });
    cy.get('[data-test="btn-2"]')
      .should("exist")
      .should("be.visible")
      .then(($el) => {
        btn2 = $el;
      });
    cy.get('[data-test="btn-3"]')
      .should("exist")
      .should("be.visible")
      .then(($el) => {
        btn3 = $el;
      });
    cy.get('[data-test="btn-4"]')
      .should("exist")
      .should("be.visible")
      .then(($el) => {
        btn4 = $el;
      });
    cy.get('[data-test="btn-5"]')
      .should("exist")
      .should("be.visible")
      .then(($el) => {
        btn5 = $el;
      });
    cy.get('[data-test="btn-6"]')
      .should("exist")
      .should("be.visible")
      .then(($el) => {
        btn6 = $el;
      });
    cy.get('[data-test="btn-7"]')
      .should("exist")
      .should("be.visible")
      .then(($el) => {
        btn7 = $el;
      });
    cy.get('[data-test="btn-8"]')
      .should("exist")
      .should("be.visible")
      .then(($el) => {
        btn8 = $el;
      });
    cy.get('[data-test="btn-9"]')
      .should("exist")
      .should("be.visible")
      .then(($el) => {
        btn9 = $el;
      });
    cy.get('[data-test="btn-0"]')
      .should("exist")
      .should("be.visible")
      .then(($el) => {
        btn0 = $el;
      });
    cy.get('[data-test="btn-plus"]')
      .should("exist")
      .should("be.visible")
      .then(($el) => {
        btnPlus = $el;
      });
    cy.get('[data-test="btn-minus"]')
      .should("exist")
      .should("be.visible")
      .then(($el) => {
        btnMinus = $el;
      });
    cy.get('[data-test="btn-equal"]')
      .should("exist")
      .should("be.visible")
      .then(($el) => {
        btnEqual = $el;
      });
    cy.get('[data-test="btn-slash"]')
      .should("exist")
      .should("be.visible")
      .then(($el) => {
        btnSlash = $el;
      });
    cy.get('[data-test="btn-multiply"]')
      .should("exist")
      .should("be.visible")
      .then(($el) => {
        btnMultiply = $el;
      });
    cy.get('[data-test="btn-dot"]')
      .should("exist")
      .should("be.visible")
      .then(($el) => {
        btnDot = $el;
      });
    cy.get('[data-test="btn-plus-minus"]')
      .should("exist")
      .should("be.visible")
      .then(($el) => {
        btnPlusMinus = $el;
      });
    cy.get('[data-test="btn-percentages"]')
      .should("exist")
      .should("be.visible")
      .then(($el) => {
        btnPercentages = $el;
      });
    cy.get('[data-test="dashboard"]')
      .should("exist")
      .should("be.visible")
      .then(($el) => {
        dashboard = $el;
      });
  });

  it("should check expression 2+9-6", () => {
    btn2.click();
    btnPlus.click();
    btn9.click();
    btnMinus.click();
    btn6.click();

    cy.wrap(dashboard)
      .invoke("val")
      .then((val) => {
        expect(val).to.equal("2+9-6");
      });
  });

  it("should check result of expression 2+9-6", () => {
    btnEqual.click();
    cy.wrap(dashboard)
      .invoke("val")
      .then((val) => {
        expect(val).to.equal("5");
      });
  });

  it("should check result of expression 1+2+3+4-5-6-7-8-9", () => {
    cy.get('[data-test="btn-clr"]').click();

    cy.get('[data-test="btn-1"]').click();
    cy.get('[data-test="btn-plus"]').click();
    cy.get('[data-test="btn-2"]').click();
    cy.get('[data-test="btn-plus"]').click();
    cy.get('[data-test="btn-3"]').click();
    cy.get('[data-test="btn-plus"]').click();
    cy.get('[data-test="btn-4"]').click();
    cy.get('[data-test="btn-minus"]').click();
    cy.get('[data-test="btn-5"]').click();
    cy.get('[data-test="btn-minus"]').click();
    cy.get('[data-test="btn-6"]').click();
    cy.get('[data-test="btn-minus"]').click();
    cy.get('[data-test="btn-7"]').click();
    cy.get('[data-test="btn-minus"]').click();
    cy.get('[data-test="btn-8"]').click();
    cy.get('[data-test="btn-minus"]').click();
    cy.get('[data-test="btn-9"]').click();

    cy.get('[data-test="btn-equal"]').click();

    cy.get("input#dashboard.app-result").invoke("val").should("equal", "-25");
  });

  it("should check result of expression 10/10", () => {
    cy.get('[data-test="btn-clr"]').click();

    cy.get('[data-test="btn-1"]').click();
    cy.get('[data-test="btn-0"]').click();
    cy.get('[data-test="btn-slash"]').click();
    cy.get('[data-test="btn-1"]').click();
    cy.get('[data-test="btn-0"]').click();
    cy.get('[data-test="btn-equal"]').click();

    cy.get("#dashboard")
      .invoke("val")
      .then((val) => {
        cy.log(`Current dashboard value: ${val}`);
        expect(val).to.equal("1");
      });
  });

  it("should check result of expression 0.5 * 10", () => {
    cy.get('[data-test="btn-clr"]').click();

    cy.get('[data-test="btn-0"]').click();
    cy.get('[data-test="btn-dot"]').click();
    cy.get('[data-test="btn-5"]').click();
    cy.get('[data-test="btn-multiply"]').click();
    cy.get('[data-test="btn-1"]').click();
    cy.get('[data-test="btn-0"]').click();
    cy.get('[data-test="btn-equal"]').click();

    cy.get("input#dashboard.app-result").should("have.value", "5");
  });

  it("should check result of expression -0.1*99", () => {
    cy.get('[data-test="btn-clr"]').click();
    cy.get('[data-test="btn-plus-minus"]').click();
    cy.get('[data-test="btn-0"]').click();
    cy.get('[data-test="btn-dot"]').click();
    cy.get('[data-test="btn-1"]').click();
    cy.get('[data-test="btn-multiply"]').click();
    cy.get('[data-test="btn-9"]').click();
    cy.get('[data-test="btn-9"]').click();
    cy.get('[data-test="btn-equal"]').click();

    cy.get("#dashboard")
      .invoke("val")
      .then((val) => {
        cy.log(`Current dashboard value: ${val}`);
        expect(parseFloat(val).toFixed(1)).to.equal("-9.9");
      });
  });

  it("should calculate 10 percent of 1,000", () => {
    cy.get('[data-test="btn-clr"]').click();
    cy.get('[data-test="btn-1"]').click();
    cy.get('[data-test="btn-0"]').click();
    cy.get('[data-test="btn-0"]').click();
    cy.get('[data-test="btn-0"]').click();
    cy.get('[data-test="btn-percentages"]').click();
    cy.get('[data-test="btn-1"]').click();
    cy.get('[data-test="btn-0"]').click();
    cy.get('[data-test="btn-equal"]').click();

    cy.get("#dashboard.app-result", { timeout: 60000 })
      .should("exist")
      .should("be.visible")
      .invoke("val")
      .then((resultText) => {
        cy.log(`Result value: ${resultText}`);
        expect(resultText).to.not.equal("");
        const result = parseFloat(resultText);
        console.log("Parsed result: ", result);
        expect(result).to.equal(0);
      });
  });

  it("should check clear button", () => {
    btn2.click();
    btnPlus.click();
    btn9.click();
    btnEqual.click();
    cy.wrap(dashboard).invoke("val").should("equal", "11");

    cy.get('[data-test="btn-clr"]').click();
    cy.wrap(dashboard).invoke("val").should("equal", "");
  });

  it("should check save button", () => {
    btn1.click();
    btnPlus.click();
    btn2.click();
    btnEqual.click();

    cy.get('[data-test="btn-save"]').click();
  });

  it("should check paste button", () => {
    btn1.click();
    btnPlus.click();
    btn2.click();
    btnEqual.click();

    cy.get('[data-test="btn-paste"]').click();
  });

  it("should check change theme, toggle theme button", () => {
    cy.get('[data-test="btn-theme"]').click();
  });
});