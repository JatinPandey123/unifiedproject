package com.etp.stepdefinition;

import io.cucumber.java.en.Given;

import com.etp.actions.BasicPromoActions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


public class BasicPromo {
	
	BasicPromoActions promo=new BasicPromoActions();
	
	@Given("Basic Promotion link is available in menu")
	public void basic_promotion_link_is_available_in_menu() {
	 promo.enterpromotion();
	}
	@And("user is on Basic Promotion from menu")
	public void user_is_on_basic_promotion_from_menu() {
	    
	}
	@Then("Basic Promotion list screen is displayed")
	public void basic_promotion_list_screen_is_displayed() {
	  
	}
	@When("user clicks on Basic by clicking on plus button")
	public void user_clicks_on_basic_by_clicking_on_plus_button() {
	
	}
	@Then("user is navigated basic promotion creation page")
	public void user_is_navigated_basic_promotion_creation_page() {
	  
	}
	@When("user fills all the mandatory details in basic promotion")
	public void user_fills_all_the_mandatory_details_in_basic_promotion() {
	   try {
		promo.filldetails();
	} catch (Exception e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	}
	@And("user clicks on save button in basic promotion")
	public void user_clicks_on_save_button_in_basic_promotion() {
	   
	}
	@Then("basic promotion record will save successfully")
	public void basic_promotion_record_will_save_successfully() {
	  
	}

}
