package io.demo.controller;

import java.util.concurrent.TimeUnit;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api")
public class Controller {
	
	Logger logger = LoggerFactory.getLogger(Controller.class);
	
	@GetMapping(path="/hello-get")
	public ResponseEntity<String> helloMessage () throws InterruptedException {
		logger.info("In Controller get method");
		String returnMessage =  "Hello from GET";
		TimeUnit.SECONDS.sleep(5);
		return ResponseEntity.ok(returnMessage);
	}
	
	@PostMapping(path="/hello-post")
	public ResponseEntity<String> helloPostMessage () {
		logger.info("In Controller post method");
		String returnMessage =  "Hello from POST"; 
		return ResponseEntity.ok(returnMessage);
	}

	@GetMapping(path="/")
	public ResponseEntity<String> home () {
		return ResponseEntity.ok("Hello All!!");
	}
	
	@PostMapping(path="/test")
	public ResponseEntity<String> test () {
		return ResponseEntity.ok("Hello Test!!");
	}

}
