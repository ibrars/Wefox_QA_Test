const selectors = require("./selectors");

const urls = {
	login: "/login",
    home: "/home"
};

function login() {
	browser.url(urls.login);
	$(selectors.login_form).waitForDisplayed();
}

function home() {
	browser.url(urls.home);
	$(selectors.search).waitForDisplayed();
}

module.exports = { 
	login,
    home
};