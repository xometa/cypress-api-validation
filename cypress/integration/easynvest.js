const fixturePeople = 'people_api.json'
const fixturePlanets = 'planets_api.json'
const userService = require('../support/services/requests.js');

describe('To Assure that all services are running', () => {

    let peopleData
    let planetsData

    before(() => {
        cy.fixture(fixturePeople).then((data) => {
            peopleData = data
        })
        cy.fixture(fixturePlanets).then((data) => {
            planetsData = data
        })
    })

    it('Validate the status for people API', () => {
        userService.getPeopleRequestStatus
    })

    it('Validate the status for Planet API', () => {
        userService.getPlanetsRequestStatus
    })

    it('Validate the endpoint of People', () => {
        cy.request('https://swapi.co/api/people/1/')
            .then(({ body }) => {
                expect(body.name).to.equal(peopleData.name, 'name should match')
                expect(body.height).to.equal(peopleData.height)
                expect(body.mass).to.equal(peopleData.mass)
                expect(body.hair_color).to.equal(peopleData.hair_color)
                expect(body.skin_color).to.equal(peopleData.skin_color)
                expect(body.eye_color).to.equal(peopleData.eye_color)
                expect(body.birth_year).to.equal(peopleData.birth_year)
                expect(body.gender).to.equal(peopleData.gender)

            })
    })

    it('Validate the endpoint of Planets', () => {
        cy.request('https://swapi.co/api/planets/1/')
            .then(({ body }) => {
                expect(body.name).to.equal(planetsData.name)
                expect(body.rotation_period).to.equal(planetsData.rotation_period)
                expect(body.orbital_period).to.equal(planetsData.orbital_period)
                expect(body.diameter).to.equal(planetsData.diameter)
                expect(body.climate).to.equal(planetsData.climate)
                expect(body.gravity).to.equal(planetsData.gravity)
                expect(body.terrain).to.equal(planetsData.terrain)
                expect(body.surface_water).to.equal(planetsData.surface_water)
                expect(body.population).to.equal(planetsData.population)

            })
    })


}) 