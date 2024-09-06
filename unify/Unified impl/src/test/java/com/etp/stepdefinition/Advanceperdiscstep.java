package com.etp.stepdefinition;

import io.cucumber.java.en.Given;

import com.etp.actions.AdvancePromoActions;
import com.etp.actions.Advanceperdisc;
import com.etp.actions.BasicPromoActions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


public class Advanceperdiscstep {
	
	Advanceperdisc promo= new Advanceperdisc();
	
	@Given("Advance Promo link is available in unify")
	public void advance_promo_link_is_available_in_unify() {
	 
	}
	@And("user selects Advance promo from menu")
	public void user_selects_advance_promo_from_menu() {
	   
	}
	@Then("Promotion selection creation screen is displayed")
	public void promotion_selection_creation_screen_is_displayed() {
	   
	}
	@And("user clicks on promotion screen")
	public void user_clicks_on_promotion_screen() {
		 
	}
	@When("user fill the details for promotion details")
	public void user_fill_the_details_for_promotion_details() {
	
	}
	@And("user clicks on Add Conditions for promo")
	public void user_clicks_on_add_conditions_for_promo() throws Exception {
		  promo.enterpromo();
	}
	@And("user select condition and actions in creation")
	public void user_select_condition_and_actions_in_creation() throws Exception  {
		promo.enterdetailspromo();
	}
	@Then("user click on save for promo")
	public void user_click_on_save_for_promo() {
	   
	}

}
