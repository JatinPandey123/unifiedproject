@advancepromo
Feature: Advance Promo

 @advancepromo  
    Scenario: Check Upload Advance Promo is successful or not
      Given Advance Promo link is available
      And user selects Advance from menu
      Then Promotions selection screen is displayed
      And user clicks on promotion
      When user fill the details for promotion
      And user clicks on Add Conditions
      And user select condition and actions 
      Then user click on save