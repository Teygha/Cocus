import {Booking, Dashboard, Homepage} from "../../fixtures/elementSelectors";

describe("Flight Search",function(){
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

})

it("Go To Flights",()=>{
    cy.login();
    cy.get(Dashboard.flightsTab).click();
    cy.url().should('include','/flights');
    cy.contains('SEARCH FOR BEST FLIGHTS').should('be.visible');
});

it("Search Flights and Book Flight",()=>{
    cy.get(Dashboard.flyingFrom).click({force: true}).type('LOS');
    cy.get(Dashboard.lagosAirport).contains('Murtala Muhammed').click({force: true});
    cy.get(Dashboard.destination).click({force: true}).type('OPO');
    cy.get(Dashboard.portoAirport).contains('Porto').click({force: true});
    cy.contains('30').click({force: true});
    cy.get(Dashboard.passengerCount).dblclick({force: true});
    cy.get(Dashboard.adultCount).dblclick({force: true});
    cy.get(Dashboard.childCount).dblclick({force: true});
    cy.get(Dashboard.infantCount).dblclick({force: true});
    cy.get(Dashboard.searchFlights).click({force: true});
    cy.contains('Book Now').click({force: true});
    cy.get(Booking.firstName).click({force: true}).type('Test');
    cy.get(Booking.lastName).click({force: true}).type('Test');
    cy.get(Booking.emailBooking).click({force: true}).type('test@test.com');
    cy.get(Booking.phoneNumber).click({force: true}).type('1234567890');
    cy.get(Booking.addressField).click({force: true}).type('Lagos');
    cy.get(Booking.payLater).click({force: true});
    cy.get(Booking.agreeTerms).click({force: true});
    cy.get(Booking.confirmBooking).click({force: true});
    cy.get(Booking.bookingInformation).contains('Your booking status is').should('be.visible');
});

})