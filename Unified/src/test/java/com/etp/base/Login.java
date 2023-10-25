package com.etp.base;


import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features= 
{
"Feature/alogin01.feature" ,
//"Feature/createcounter.feature"
//"Feature/productupload.feature"
 "Feature/includeadvancepromo.feature",
//"Feature/productmaster.feature"
//"Feature/productcatalog.feature" 
//"Feature/stockordertype.feature"
//"Feature/companysetup.feature"
},
//tags ="@loginunify , @productcreate" ,
glue={"com.etp.stepdefinition"},

plugin= {"pretty",
		"html:target/cucumber/result",
		"json:target/cucumber/result.json",
		"com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:"})


public class Login{

}


