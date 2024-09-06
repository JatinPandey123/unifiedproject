package com.etp.stepdefinition;

import com.etp.actions.HierarchyTypeActions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class HierarchyType {
	HierarchyTypeActions hierarchy = new HierarchyTypeActions();
	
	@Given("hierarchy Type link is displayed in menu")
	public void hierarchy_type_link_is_displayed_in_menu() {
	   hierarchy.hierarchymenu();
	}

	@And("user is on hierarchy Type link from menu")
	public void user_is_on_hierarchy_type_link_from_menu() {
	    hierarchy.enterhierarchy();
	}

	@Then("hierarchy Type view list screen is displayed")
	public void hierarchy_type_view_list_screen_is_displayed() {
	 
	}

	@When("user clicks on three dots in hierarchy type")
	public void user_clicks_on_three_dots_in_hierarchy_type() {
	   
	}

	@And("user fills the details in hierarchy type creation")
	public void user_fills_the_details_in_hierarchy_type_creation() {
	   hierarchy.hierarchyfilldetails();
	}
	

}
