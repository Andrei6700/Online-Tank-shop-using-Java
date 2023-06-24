package com.andreibalanoiu.tankshop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan("com.andreibalanoiu.tankshop")
@SpringBootApplication
public class TankshopApplication {

	public static void main(String[] args) {
		SpringApplication.run(TankshopApplication.class, args);
	}

}
