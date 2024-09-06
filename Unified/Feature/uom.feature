@stockordertype
Feature: Unit of Measure

@stockordertype
  Scenario: Check UOM Setup is Successful 
    Given UOM link is available in menu 
    And user is on UOM from menu
    Then UOM list screen is displayed
    When user fills all the mandatory detail for UOM
    And user clicks on save button in UOM
    Then record will save successfully for UOM