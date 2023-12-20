package com.etp.stepdefinition;

import com.etp.actions.Advanceperdisc;
import com.etp.actions.CopyPromotionActions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class CopyPromotion {
	
	CopyPromotionActions copypromo= new CopyPromotionActions();
	
	
	@Given("Promotion link is available in unify")
	public void promotion_link_is_available_in_unify() {
	   
	}
	@And("user selects promotion from menu")
	public void user_selects_promotion_from_menu() {
	   
	}
	@Then("Promotion selection list screen is displayed")
	public void promotion_selection_list_screen_is_displayed() {
	   
	}
	@And("user clicks on search and search promotion")
	public void user_clicks_on_search_and_search_promotion() {
	   
	}
	@When("user clicks on three dots")
	public void user_clicks_on_three_dots() {
	copypromo.enterpromotion();
	}
	@And("user selects copy promotion")
	public void user_selects_copy_promotion() {
	    
	}
	@And("user enter promo name and description")
	public void user_enter_promo_name_and_description() {
	copypromo.savacopypromo();
	}
	@Then("user click on save for copy promo")
	public void user_click_on_save_for_copy_promo() {
	   
	}



}
