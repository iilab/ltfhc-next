Feature: Login
	In order to identify EMR users
	As a user
	I want to access the application with my credentials

	Scenario: Check not logged in.
		Given I have cleaned the deployment
		Given I have deployed the app
		Given I have uploaded test data
		Given I visit the home page
		Then I should see "login with an authorized account." message