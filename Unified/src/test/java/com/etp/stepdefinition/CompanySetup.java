package com.etp.stepdefinition;

import com.etp.actions.CompanySetupActions;
import com.etp.actions.ProductMasterActions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class CompanySetup {

	CompanySetupActions company=new CompanySetupActions();
	
	@Given("Company Setup link is available in menu")
	public void company_setup_link_is_available_in_menu() {
	//   company.companylink();
	}
	@Given("user is on Company Setup from menu")
	public void user_is_on_company_setup_from_menu() {
	   
	}
	@Then("Company Setup list screen is displayed")
	public void company_setup_list_screen_is_displayed() {
	   
	}
	
	@When("user fills all the mandatory detail")
	public void user_fills_all_the_mandatory_detail() {
	company.fillcompanydetails();
	
	}

}
