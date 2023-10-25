package com.etp.customer;

import java.util.Random;
import java.util.random.*;

public class Customer {

	public static void main(String[] args) {
		
	int numberOfNames = 50000;

// Lists of first names, middle names, and last names
	String[] firstNames = {"John", "Jane", "Michael", "Emily", "David", "Olivia", "James", "Sophia", "William", "Ava"};
	String[] middleNames = {"Lee", "Ann", "Robert", "Grace", "Joseph", "Marie", "Edward", "Elizabeth", "Thomas", "Rose"};
	String[] lastNames = {"Smith", "Johnson", "Brown", "Davis", "Wilson", "Miller", "Anderson", "Garcia", "Martinez", "Clark"};

	Random random=new Random();

	// Generate and print random names
	for (int i = 0; i < numberOfNames; i++) 
	{
	 String firstName = firstNames[random.nextInt(firstNames.length)];
	String middleName = middleNames[random.nextInt(middleNames.length)];
	 String lastName = lastNames[random.nextInt(lastNames.length)];
	 
	 System.out.println(firstName+""+middleName+""+lastName);
	}

	// Print the generated name
//	System.out.println(firstName + " " + middleName + " " + lastName);
	}}

