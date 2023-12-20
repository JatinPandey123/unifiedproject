@billsave
Feature: Bill Save

 @billsavescenario
    Scenario: Check bill save is successful 
      Given pos link is available in unify
      And user selects pos from menu
      Then user select group
      And user select counter
      When user click on shift begin
      And user search for customer
      And user scan the Product
      Then user clicks on checkout
      