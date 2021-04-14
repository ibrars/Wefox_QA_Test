Feature: Booking a tour
    As a tourist 
    to enjoy the trip
    I want to book a tour

    Scenario: Book a tour paying on arrival successfully 
        Given a logged in user has selected a tour
        When the user books the selected tour paying on arrival
        Then the page confirms the tour is successfully booked