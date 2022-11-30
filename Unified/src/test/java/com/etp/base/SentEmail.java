package com.etp.base;

import org.apache.commons.mail.Email;
import org.apache.commons.mail.SimpleEmail;
import org.apache.commons.mail.DefaultAuthenticator;

public class SentEmail {
	public static void main() {
	try {
	Email email = new SimpleEmail();
	email.setHostName("smtp.googlemail.com");
	email.setSmtpPort(465);
	email.setAuthenticator(new DefaultAuthenticator("etpgroup3211@gmail.com", "Etp@1234567"));
	email.setSSLOnConnect(true);
	email.setFrom("etpgroup3211@gmail.com");
	email.setSubject("TestMail");
	email.setMsg("This is a test mail ... :-)");
	email.addTo("jatin.pandey@etpgroup.com");
	email.send();
	}
	catch (Exception e) {
		System.out.println("exception occured during email");
	}
	}}
