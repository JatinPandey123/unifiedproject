@productcatalog
Feature: Product Catalog

@productcatalogcreate
  Scenario: Check Product Catalog Creation is Successful for single creation
    Given Product Catalog link is available in menu 
    And user is on Product Catalog from menu
    Then Product Catalog list screen is displayed
    When user clicks on plus button
    Then user is navigated to product catalog creation page
    When user fills all mandatory details 
    And user clicks on save button
    Then record will save successfully
 
     