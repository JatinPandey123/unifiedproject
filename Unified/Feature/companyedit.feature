@companyeditsetup
Feature: Company Setup

@companysetupupdate
  Scenario: Check Company Setup update is Successful 
    Given Company Setup link is displayed in menu 
    And user is on Company Setup link from menu
    Then Company Setup view list screen is displayed
    When user clicks on three dots for company 
    And user clicks on edit 
    When user edit the details
    Then record will edit successfully