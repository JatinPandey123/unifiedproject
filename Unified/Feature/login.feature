Feature: Test Login functionality

  Scenario: Check login is successful with valid credentials
    Given browser is open
    And user is on login page
    When user enter username and password
    And user clicks on login
    Then user is navigated to Select Group
    And user clicks on group
 