package com.etp.stepdefinition;

import com.etp.actions.LoginActions;
import com.etp.helper.HelperClass;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;



public class CucumberLogin extends HelperClass{
	
	
	LoginActions objLogin = new LoginActions();
	
	@Given("browser is open")
	public void browser_is_open() throws Exception {
		HelperClass.openPage();
	}

	@And("user is on login page")
	public void user_is_on_login_page() {
	   
	
	}

	@When("user enter username and password")
	public void user_enter_username_and_password() throws Exception  {
		
		objLogin.setUserName();
		
		objLogin.setPassword();
	}
	
	@And("user clicks on login")
	public void user_clicks_on_login() {
	  
		objLogin.clickLogin();
	}

	
	@Then("user is navigated to Select Group")
	public void user_is_navigated_to_select_group() {
	  
		System.out.println("login Successful");
	}
	
	@And("user clicks on group")
	public void user_clicks_on_group() throws InterruptedException {
	    
	   objLogin.clickGroup();
	}
	
  
	}

