@groupeditsetup
Feature: Company Setup

@groupupdate
  Scenario: Check Group Setup update is Successful 
    Given Group Setup link is displayed in menu 
    And user is on Group Setup link from menu
    Then Group Setup view list screen is displayed
    When user clicks on three dots for group
    And user clicks on edit for group
    When user edit the details for group
    Then record will edit successfully for group