describe('test inputs and submit form', function(){
    beforeEach(function() {
        cy.visit('http://localhost:3000/')  
    })
   it('Add test to inputs and submitm form',function(){
    cy.get('input[name="name"]')
    .type("Stacey")
    .should('have.value','Stacey')
    cy.get('input[name="email"]').type("stacey@stacey.com")
    .should('have.value',"stacey@stacey.com")
    cy.get('input[name="password"]').type("123456")
    .should('have.value',"123456")
    cy.get('[type="checkbox"]')
    .check()
    .should('be.checked')
    cy.get("button")
    .click()
   })
});