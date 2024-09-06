@hierarchytype
Feature: Hierarchy Type 

@hierarchytype
  Scenario: Check hierarchy type creation is Successful 
    Given hierarchy Type link is displayed in menu 
    And user is on hierarchy Type link from menu
    Then hierarchy Type view list screen is displayed
    When user clicks on three dots in hierarchy type
    And user fills the details in hierarchy type creation
    Then record will save successfully
