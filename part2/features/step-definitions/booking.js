const selectors = require("./selectors");

function selectTour() {
	$(selectors.tour).waitAndClick();
}

function bookNow() {
	$(selectors.tourBookForm).$(selectors.tourBookButton).waitAndClick();
	$(selectors.tourConfirmBookingButton).waitAndClick();
    $(selectors.payOnArrivalButton).waitAndClick();
    browser.acceptAlert()
}

function checkBookingStatus() {
    expect($(selectors.bookingStatus)).toHaveElementClass('reserved');
}

module.exports = { 
	selectTour,
    bookNow,
    checkBookingStatus
};