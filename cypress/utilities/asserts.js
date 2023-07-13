class Asserts {
    assert_text(element, value) {
        cy.get(element).should('have.text', value)
    }

    assert_contains(element, value) {
        cy.get(element).contains(value)
    }

    assert_is_visible(element) {
        cy.get(element).should('be.visible')
    }
}

export default Asserts;