package com.etp.stepdefinition;

import com.etp.actions.ProductCatalogActions;
import com.etp.actions.ProductMasterActions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


public class ProductCatalog {

	ProductCatalogActions productcatlog=new ProductCatalogActions();
	
	@Given("Product Catalog link is available in menu")
	public void product_catalog_link_is_available_in_menu() {
	   productcatlog.entercatalog();
	}

	@And("user is on Product Catalog from menu")
	public void user_is_on_product_catalog_from_menu() {
	    
	}

	@Then("Product Catalog list screen is displayed")
	public void product_catalog_list_screen_is_displayed() {
	    
	}

	@When("user clicks on plus button")
	public void user_clicks_on_plus_button() {
	  productcatlog.clickaddbutton();
	}

	@Then("user is navigated to product catalog creation page")
	public void user_is_navigated_to_product_catalog_creation_page() {
	   
	}

	@When("user fills all mandatory details")
	public void user_fills_all_mandatory_details() {
	   productcatlog.fillmandatorydetails();
	}
}
