const selectors = require("./selectors");

function logIn(user) {
	$(selectors.mail_form).setValue(user.mail);
	$(selectors.pass_form).setValue(user.pass);
	$(selectors.login_button).waitAndClick();
	$(selectors.account_pic).waitForDisplayed();
}   

module.exports = { 
	logIn
};