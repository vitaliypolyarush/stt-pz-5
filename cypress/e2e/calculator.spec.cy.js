describe('e2e test for calculator app', () => {
  let bnt1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btn0;
  let btnPlus, btnMinus, btnEqual, dashboard;

  before(() => {
    cy.visit('http://localhost:3000/');
    bnt1 = cy.get('[data-test="btn-1"]');
    btn2 = cy.get('[data-test="btn-2"]');
    btn6 = cy.get('[data-test="btn-6"]');
    btn9 = cy.get('[data-test="btn-9"]');
    btnPlus = cy.get('[data-test="btn-plus"]');
    btnMinus = cy.get('[data-test="btn-minus"]');
    dashboard = cy.get('[data-test="dashboard"]');
    btnEqual = cy.get('[data-test="btn-equal"]');
  });

  it('should check expression 2+9-6', () => {
    btn2.click()
    btnPlus.click()
    btn9.click()
    btnMinus.click()
    btn6.click()

    dashboard.invoke('val').then(val => {
      expect(val).to.equal('2+9-6');
    })

  })

  it('should check result of expression 2+9-6', () => {
    btnEqual.click()
    dashboard.invoke('val').then(val => {
      expect(val).to.equal('5');
    })

  })
  it('should check result of expression 1+2+3+4-5-6-7-8-9', () => {
    // Write your code here
  })
  it('should check result expression 10/10', () => {
    // Write your code here
  })

  it('should check result expression 0.5*10', () => {
    // Write your code here
  })

  it('should check result expression -0.1*99', () => {
    // Write your code here
  })

  it('should calculate 10 percent of 1,000', () => {
    // Write your code here
  })

  it('should check clear button', () => {
    // Write your code here
  })

  it('should check save button', () => {
    // Write your code here
  })

  it('should check paste button', () => {
    // Write your code here
  })

  it('should check change theme, toggle theme button', () => {
    // Write your code here
  })

})
