package com.etp.stepdefinition;

import io.cucumber.java.en.Given;

import com.etp.actions.AdvancePromoActions;
import com.etp.actions.BasicPromoActions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


public class AdvancePromo {
	
	AdvancePromoActions promo=new AdvancePromoActions();
	
	@Given("Advance Promo link is available")
	public void advance_promo_link_is_available() {
	 
	}
	
	@Given("user selects Advance from menu")
	public void user_selects_advance_from_menu() {
	
	}
	
	@Then("Promotions selection screen is displayed")
	public void promotions_selection_screen_is_displayed() {
	  
	}
	
	@And("user clicks on promotion")
	public void user_clicks_on_promotion() throws Exception{
	  promo.enterpromotion();
	}
	
	@When("user fill the details for promotion")
	public void user_fill_the_details_for_promotion() {
	   
	}
	
	@When("user clicks on Add Conditions")
	public void user_clicks_on_add_conditions() {
	   
	}
	
	@When("user select condition and actions")
	public void user_select_condition_and_actions() {
	
	}
	@Then("user click on save")
	public void user_click_on_save() {
	    
	}

}
