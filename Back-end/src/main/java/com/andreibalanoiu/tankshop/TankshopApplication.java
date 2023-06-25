package com.andreibalanoiu.tankshop;

import com.andreibalanoiu.tankshop.controller.EmailSender;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.event.EventListener;


@ComponentScan("com.andreibalanoiu.tankshop")
@SpringBootApplication
public class TankshopApplication {

	@Autowired
	private EmailSender mailSender;

	public static void main(String[] args) {
		SpringApplication.run(TankshopApplication.class, args);
	}

	@EventListener(ApplicationReadyEvent.class)
	public void triggerMail() {
		mailSender.sendSimpleEmail(
				"toemail@gmail.com",
				"Orders",
				"name"
		);
	}
}