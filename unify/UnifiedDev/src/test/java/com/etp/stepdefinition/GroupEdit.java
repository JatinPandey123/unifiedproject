package com.etp.stepdefinition;

import com.etp.actions.GroupEditActions;
import com.etp.commonlinks.Modulemenu;
import com.etp.commonlinks.Modulesubmenu;
import com.etp.commonlinks.ThreeDotsCommon;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class GroupEdit {
	
	GroupEditActions group=new GroupEditActions();
	
	@Given("Group Setup link is displayed in menu")
	public void group_setup_link_is_displayed_in_menu() {
	  ThreeDotsCommon threedot=new ThreeDotsCommon();
	  threedot.threedots();
	  
	  Modulemenu group=new Modulemenu();
	  group.Administration();
	  
	}

	@And("user is on Group Setup link from menu")
	public void user_is_on_group_setup_link_from_menu() {
	   
		Modulesubmenu grp=new Modulesubmenu();
		grp.Group();
	}

	@Then("Group Setup view list screen is displayed")
	public void group_setup_view_list_screen_is_displayed() {
	System.out.println("Group view list screen is displayed");
	}

	@When("user clicks on three dots for group")
	public void user_clicks_on_three_dots_for_group() {
		group.threedotsgrp();
	   
	}

	@And("user clicks on edit for group")
	public void user_clicks_on_edit_for_group() {
	  group.editgroup();
	}

	@When("user edit the details for group")
	public void user_edit_the_details_for_group() {
	  group.updatedetailsgrp();
	}

	@Then("record will edit successfully for group")
	public void record_will_edit_successfully_for_group() {
	
	}

}
