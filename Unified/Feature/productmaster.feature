@productmaster
Feature: Product Master 

@productcreate
  Scenario: Check Product Creation is Successful for single creation
    Given Product Master link is available in menu 
    And user is on Product Master from menu
    Then Product Master list screen is displayed
    When user clicks on Single product by clicking on plus button
    Then user is navigated single product creation page
    When user fills all the mandatory details 
    And user clicks on save button
    Then record will save successfully
    
#@productsearch    
   #Scenario: Check Product Search is Successful for single creation
     #Given User is on list screen
     #Then user can search in search bar
     #
#@productedit   
   #Scenario: Check Product Edit is Successful for Single Creation
     #Given User is on list screen for edit
     #And user clicks on three dots in list screen
     #Then user clicks on edit option
     #And user is on edit screen
     #When user Edit the details in edit screen
     #And user clicks on save button in edit screen
     #Then record will update successfully
     
     
     
     