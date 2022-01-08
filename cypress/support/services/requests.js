class UserServices {
    getPeopleRequestStatus() {
        cy.request('https://swapi.co/api/people/1/')
            .its('status')
            .should('equal', 200);
    }

    getPlanetsRequestStatus() {
        cy.request('https://swapi.co/api/planets/1/')
            .its('status')
            .should('equal', 200);
    }

}
module.exports = new UserServices();
