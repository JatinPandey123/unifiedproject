@companysetup
Feature: Company Setup

@companysetupcreate
  Scenario: Check Company Setup is Successful 
    Given Company Setup link is available in menu 
    And user is on Company Setup from menu
    Then Company Setup list screen is displayed
    When user fills all the mandatory detail
    And user clicks on save button
    Then record will save successfully