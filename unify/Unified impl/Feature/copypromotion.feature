@copypromotion
Feature: Advance Promo creation

 @copypromotion 
    Scenario: Check Copy Promo creation is successful or not
      Given Promotion link is available in unify
      And user selects promotion from menu
      Then Promotion selection list screen is displayed
      And user clicks on search and search promotion
      When user clicks on three dots
      And user selects copy promotion
      And user enter promo name and description
      Then user click on save for copy promo