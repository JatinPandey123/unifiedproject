package com.etp.stepdefinition;

import com.etp.actions.CreateCounterActions;
import com.etp.actions.ProductMasterActions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import net.masterthought.cucumber.util.Counter;

public class CreateCounter {
	
	CreateCounterActions counter=new CreateCounterActions();

	@Given("Create Counter link is available in menu")
	public void create_counter_link_is_available_in_menu() {
	 
	}
	
	
	@Given("user is on create counter from menu")
	public void user_is_on_create_counter_from_menu() {
	counter.createcounter();
	}
	@Then("create counter list screen is displayed")
	public void create_counter_list_screen_is_displayed() {
	   
	}
	@When("user clicks on plus button for counter")
	public void user_clicks_on_plus_button_for_counter() {
	  
	}
	@Then("user is navigated to create counter creation page")
	public void user_is_navigated_to_create_counter_creation_page() {
	  
	}
	@When("user fills all mandatory details  for counter")
	public void user_fills_all_mandatory_details_for_counter() {
		counter.fillCounterDetails();
	  
	}
	@When("user clicks on save button for  counter")
	public void user_clicks_on_save_button_for_counter() {
	    
	}
	@Then("record will save successfully for counter")
	public void record_will_save_successfully_for_counter() {
	  
	}

	
}
