@advancepromotion
Feature: Advance Promo creation

 @advancepromotion  
    Scenario: Check Advance Promo creation is successful or not
      Given Advance Promo link is available in unify
      And user selects Advance promo from menu
      Then Promotion selection creation screen is displayed
      And user clicks on promotion screen
      When user fill the details for promotion details
      And user clicks on Add Conditions for promo
      And user select condition and actions in creation
      Then user click on save for promo