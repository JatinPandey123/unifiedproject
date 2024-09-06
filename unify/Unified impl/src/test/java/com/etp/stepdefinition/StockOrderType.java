package com.etp.stepdefinition;

import com.etp.actions.ProductUploadActions;
import com.etp.actions.StockOrderTypeActions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class StockOrderType {
	StockOrderTypeActions sot = new StockOrderTypeActions();
	
@Given("Stock Order Type link is available in menu")
public void stock_order_type_link_is_available_in_menu() {
   
}

@And("user is on Stock Order Type from menu")
public void user_is_on_stock_order_type_from_menu() {
   
}

@Then("Stock Order Type list screen is displayed")
public void stock_order_type_list_screen_is_displayed() {
  sot.enterstockordertype();
}

@When("user fills all the mandatory detail for Stock Order Type")
public void user_fills_all_the_mandatory_detail_for_stock_order_type() {
   sot.enterdetails();
}

@And("user clicks on save button in Stock Order Type")
public void user_clicks_on_save_button_in_stock_order_type() {
   
}

@Then("record will save successfully for Stock Order Type")
public void record_will_save_successfully_for_stock_order_type() {
    
}
}
