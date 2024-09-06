package com.etp.stepdefinition;

import com.etp.actions.ProductActionsEdit;
import com.etp.actions.ProductMasterActions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Given.Givens;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class ProductMaster {
	
	ProductMasterActions product=new ProductMasterActions();
	
	
	@Given("Product Master link is available in menu")
	public void product_master_link_is_available_in_menu() throws Exception {
		product.enterproduct();
	   
	}
	@Given("user is on Product Master from menu")
	public void user_is_on_product_master_from_menu() {
	  
	}
	@Then("Product Master list screen is displayed")
	public void product_master_list_screen_is_displayed() {
	 
	}
	@When("user clicks on Single product by clicking on plus button")
	public void user_clicks_on_single_product_by_clicking_on_plus_button() {
		product.clickaddbutton();
	  
	}
	@Then("user is navigated single product creation page")
	public void user_is_navigated_single_product_creation_page() {
	   product.clicksingleproduct();
	}
	@When("user fills all the mandatory details")
	public void user_fills_all_the_mandatory_details() throws Exception {
	  product.fillproductdetails();
	}
	@When("user clicks on save button")
	public void user_clicks_on_save_button() {
	 //  product.saveproduct();
	}
	@Then("record will save successfully")
	public void record_will_save_successfully() {
	   
	}
	
	
	
}
