Feature: Login
	In order to identify EMR users
	As a user
	I want to access the application with my credentials

	Scenario: Check not logged in.
		Given I visit the home page
		Then I should see "login with an authorized account." message

	Scenario: Click Login
		Given I visit the home page
        When I click on Login
		Then I should see a modal dialog
        
	Scenario: Login with wrong credentials
		Given I visit the home page
        When I click on Login
        When I enter wrong credentials
		Then I should see an Error
        
	Scenario: Login with correct credentials
		Given I visit the home page
        When I click on Login
        When I enter correct credentials
		Then I should see the Patients page
        Then I should see the New Patient button
        