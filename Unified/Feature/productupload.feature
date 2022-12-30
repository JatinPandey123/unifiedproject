Feature: Product Upload

  #Scenario: Check Product Template is downloaded successfully or not
    #Given Product Upload link is available in menu 
    #And user is on Product Upload from menu
    #Then Product upload screen is displayed
    #When user clicks on Download Template by clicking on plus button
    #Then user is navigated to product upload page
    #When user fills all the  details 
    #And user clicks on download template
    #Then template will download successfully
    #

    
    Scenario: Check Upload New Product is successful or not
      Given Products Upload link is available
      And user selects Product Upload from menu
      Then Product Upload screen is displayed for upload product
      And user clicks on upload new products
      When user fill the details
      And user clicks on upload
      Then template will upload successfully