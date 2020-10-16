describe('eusipom.ro', () => {
  it('homepage', () => {
	  cy.visit('https://eusipom.ro')
      cy.contains('MANIFEST').click()
	 cy.url().should('include', '/manifest')
	  
	 
  })
  it('gand', () => {
	  cy.visit('https://eusipom.ro')
      cy.contains('LASĂ-NE UN GÂND').click()
	  cy.get('textarea').type('Esti nebun? Sebi is testing with cypress.io')
	  cy.get('#email-whassup-id').type('sebastian.boga@outlook.com')
	  cy.get('#gdpr-conditions').check({force: true})
	  cy.get('#modal-submit').click()
	  
	  cy.get('.success-msg > ul > li > span').should(($lis) => {   
	  expect($lis.eq(0)).to.contain('Mesajul a fost trimis.')
																})
	 
  })
  
  
})