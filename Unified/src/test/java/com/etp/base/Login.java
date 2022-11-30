package com.etp.base;

import org.junit.runner.RunWith;


import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="Feature",glue="com.etp.stepdefinition",
plugin= {"pretty",
		"html:target/cucumber/result",
		"json:target/cucumber/result.json",
		"com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:"})


public class Login{

}


