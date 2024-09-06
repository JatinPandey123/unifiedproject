package com.etp.stepdefinition;

import com.etp.actions.ProductUploadActions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class ProductUpload {
	
	ProductUploadActions upload = new ProductUploadActions();
	
	@Given("Product Upload link is available in menu")
	public void product_upload_link_is_available_in_menu() {
	  
	}
	@And("user is on Product Upload from menu")
	public void user_is_on_product_upload_from_menu() {
	 upload.selectMenu();
	}
	@Then("Product upload screen is displayed")
	public void product_upload_screen_is_displayed() {
	   
	}
	@When("user clicks on Download Template by clicking on plus button")
	public void user_clicks_on_download_template_by_clicking_on_plus_button() {
	   upload.clickButton();
	}
	@Then("user is navigated to product upload page")
	public void user_is_navigated_to_product_upload_page() {
	   
	}
	@When("user fills all the  details")
	public void user_fills_all_the_details() {
	   upload.filldetails();
	}
	@And("user clicks on download template")
	public void user_clicks_on_download_template() {
	   
	}
	@Then("template will download successfully")
	public void template_will_download_successfully() {
	   
	}
	
	//---------------------------------------------------Product new template Upload----------------------------------------------//
	
	@Given("Products Upload link is available")
	public void products_upload_link_is_available() {
	   
	}
	@Given("user selects Product Upload from menu")
	public void user_selects_product_upload_from_menu() {
	  upload.selectuploadoption();
	}
	@Then("Product Upload screen is displayed for upload product")
	public void product_upload_screen_is_displayed_for_upload_product() {
	 
	}
	@Then("user clicks on upload new products")
	public void user_clicks_on_upload_new_products() {
	  
	}
	@When("user fill the details")
	public void user_fill_the_details() {
	 upload.fillupdloaddetails();
	}
	@When("user clicks on upload")
	public void user_clicks_on_upload() {
	   
	}
	@Then("template will upload successfully")
	public void template_will_upload_successfully() {
	  
	}

}
