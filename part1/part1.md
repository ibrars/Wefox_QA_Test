# Exploratory testing - Booking a stay in a hotel

### Exploration target
During the exploratory test I'll mainly explore the functionality of booking a hotel, in which I will explore 3 different scenarios. 

1. First I will try to book a tour correctly. 
2. Then I will try to make a reservation using different invalid data, such as an incorrectly formatted email, booking for a non-existent date, and so on. 
3. And finally, I will try to book a tour that has already expired.

### Use cases

Then I booked a tour with invalid data.
And in this case the website in most cases did not behave as I expected. First of all I have tried to make a booking as a guest by providing a mail with an incorrect format (i.e. not following the structure x@y.z). In this case the operation has been as expected since it has not let me go to the next stage of the booking process.

I also tried to make a reservation using a non-existent date, for example 50/04/2021, and surprisingly it let me move to the next step. In the invoice screen, since the date does not exist, it appears as 00/00/0000 in the summary. This is an error, because I should check the validity of the date previously, and if it's incorrect it shouldn't let me continue with the reservation. If instead of a non-existent date I try to book with a very far date, for example 20/11/2444, the booking is correctly made, and this is also an error, because you can't book for 400 years from now, there must be a limit.

As I have observed that in the url of the tour there are parameters (date, number of adults, children, etc...) I have tried to modify some of these parameters by assigning them a priori incorrect values. Specifically, I modified the number of adults, adding a negative value (https://www.phptravels.net/tours/book/Spectaculars-Of-The-Nile-3-Nights?date=14%2F04%2F2021&adults=-1&child=0&infant=0). The observed behavior has not been the correct one, since it allows me to make a booking with -1 adults, and the charge is negative. This is an error, because it should validate the parameters of the query string. This could be improved due to the fact that it is not the best option that these parameters are in the url (at least they could be encoded to avoid being manipulated).

And the third and last use case I explored was the booking of a tour that has already expired. On this case the website has not behaved as I expected either, since when booking a tour whose date has already passed, i.e. it has expired, you should not be able to book that tour. However, when booking an expired tour a popup opens with a form to continue with the booking process, and once the form is filled in it already lets me move on to the next stage. In addition, the form I just mentioned also does not behave correctly because it does not perform any mail checking.

### Prioritisation of those use cases
The use case that I would explore first would be to make the reservation correctly, because it is the most common use case and the one that most users will perform. Also, since we are exploring the functionality of booking a tour, if the use case of booking a tour fails, we would say that the functionality itself does not work.

In addition, when it comes to prioritizing a use case, it's necessary to prioritize those that may cause a security problem, a problem at an economic level and also take into account whether the image of the company/brand may be affected.

### Kind of risks that need to be mitigated
The main type of risk to mitigate in this type of application is ...¿?

Avoid that the user pays for a service and due to failures of the application the service is not provided, or the user is overcharged, we also have to mitigate security issues, such as avoiding data theft, since the application handles sensitive data (especially those related to payment data). It is also necessary to prevent the page from crashing while the user is browsing. It is also important to avoid violating any regulations