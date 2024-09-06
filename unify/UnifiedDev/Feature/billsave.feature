@billsave
Feature: Bill Save

 @billsavescenario
    Scenario: Check bill save is successful 
      Given pos link is available in unify
      Then user select company  
      And user select counter
      When user click on shift begin
      And user search for customer
      And user scan the Product
      Then user clicks on checkout
      Then user select amount and click on submit
      Then user clicks on save bill
      