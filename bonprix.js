describe('My First Test', () => {
  it('homepage', () => {
	  cy.visit('https://www.bonprix.ro/')
      cy.contains('SALE').click()
      cy.get('#JOISH987_acceptBar_btn').click()
      cy.get('#modal-nl-subscribe').type('antonia.groza17@gmail.com')	
      cy.get('form > div > div > span ').eq(2).click() 
  })
})