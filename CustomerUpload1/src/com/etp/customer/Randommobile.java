package com.etp.customer;

import java.util.Random;

public class Randommobile {
	public static void main(String[] args) {
		int numberOfNumbers = 5000; // Specify the number of random mobile numbers to generate

		// Generate and print random mobile numbers
		for (int i = 0; i < numberOfNumbers; i++) {
			String randomMobileNumber = generateRandomMobileNumber();
			System.out.println(randomMobileNumber);
		}
	}

public static String generateRandomMobileNumber() 
{
	Random random=new Random();
		// Generate a 10-digit mobile number (e.g., for US)
	 StringBuilder mobileNumber = new StringBuilder("1"); // US country code
	for (int i = 1; i <= 9; i++) {
		  mobileNumber.append(random.nextInt(10)); // Append random digits
		}
	return mobileNumber.toString();
}

}
