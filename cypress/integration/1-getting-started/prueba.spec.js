describe('Pruebas', ()=>{
    it('Registr de Usuario', ()=>{
        cy.visit('https://www.demoblaze.com')
        cy.get('#signin2').click()
        cy.get('#sign-username').type('frada')
        cy.get('#sign-password').type('pruebas')
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    });


    it('Loguin', ()=>{
        cy.visit('https://www.demoblaze.com')
        cy.get('#login2').click()
        cy.get('#loginusername').type('frada')
        cy.get('#loginpassword').type('pruebas')
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    
    });



});



