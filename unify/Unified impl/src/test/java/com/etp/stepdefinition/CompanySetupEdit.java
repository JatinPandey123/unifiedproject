package com.etp.stepdefinition;

import com.etp.actions.CompanyEditActions;
import com.etp.commonlinks.Modulemenu;
import com.etp.commonlinks.Modulesubmenu;
import com.etp.commonlinks.ThreeDotsCommon;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class CompanySetupEdit {
	
	CompanyEditActions editcomp=new CompanyEditActions();
	@Given("Company Setup link is displayed in menu")
	
	public void company_setup_link_is_displayed_in_menu() {
		ThreeDotsCommon threedot=new ThreeDotsCommon();
		threedot.threedots();
	    Modulemenu admin=new Modulemenu();
	    admin.Administration();
	}
	
	@And("user is on Company Setup link from menu")
	public void user_is_on_company_setup_link_from_menu() {
		Modulesubmenu company=new Modulesubmenu();
		company.CompanySetup();   
	}

	@Then("Company Setup view list screen is displayed")
	public void company_setup_view_list_screen_is_displayed() {
	  System.out.println("Company Setup view list screen is displayed");
	}
	@When("user clicks on three dots for company")
	public void user_clicks_on_three_dots_for_company() {
		editcomp.threedotscomp();	  
	}

	@And("user clicks on edit")
	public void user_clicks_on_edit() {
	   editcomp.companyedit();
	}

	@When("user edit the details")
	public void user_edit_the_details() {
	  editcomp.editdetails();
	}

	@Then("record will edit successfully")
	public void record_will_edit_successfully() {
	   
	}

}
