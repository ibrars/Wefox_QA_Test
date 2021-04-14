const { Given, When, Then } = require("cucumber");
const visit = require("./visit");
const logIn = require("./login");
const data = require("./data.json");
const booking = require("./booking");

Given(/^a logged in user has selected a tour$/, () => {
	visit.login();
    logIn.logIn(data.users)
    visit.home();
    booking.selectTour();
})

When(/^the user books the selected tour paying on arrival$/, () => {
    booking.bookNow();
})

Then(/^the page confirms the tour is successfully booked$/, () => {
    booking.checkBookingStatus();
})