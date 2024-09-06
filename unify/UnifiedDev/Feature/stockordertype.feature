@stockordertype
Feature: Stock Order Type

@stockordertype
  Scenario: Check Stock Order Type Setup is Successful 
    Given Stock Order Type link is available in menu 
    And user is on Stock Order Type from menu
    Then Stock Order Type list screen is displayed
    When user fills all the mandatory detail for Stock Order Type
    And user clicks on save button in Stock Order Type
    Then record will save successfully for Stock Order Type