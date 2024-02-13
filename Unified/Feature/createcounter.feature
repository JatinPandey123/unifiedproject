@createcounter
Feature: Create Counter

@createcounter
  Scenario: Check Create Counter Creation is Successful 
    Given Create Counter link is available in menu 
    And user is on create counter from menu
    Then create counter list screen is displayed
    When user clicks on plus button for counter
    Then user is navigated to create counter creation page
    When user fills all mandatory details  for counter
    And user clicks on save button for  counter
    Then record will save successfully for counter
 
     