package com.andreibalanoiu.tankshop.controller;

import com.andreibalanoiu.tankshop.model.Form;
import com.andreibalanoiu.tankshop.service.FormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/send")
@CrossOrigin
public class FormHTTPS {

    @Autowired
    private EmailSender emailSender;
    @Autowired
    private FormService formService;

    @PostMapping("/add")
    public String SendFormDBAndEmail(@RequestBody Form form) {
        formService.saveForm(form);
        emailSender.sendSimpleEmail(
                form.getEmail(),
                "Orders",
                "Name: " + form.getName() + "\n" +
                        "Email: " + form.getEmail() + "\n" +
                        "Country: " + form.getTara() + "\n" +
                        "Address: " + form.getAdresa() + "\n" +
                        "Phone: " + form.getTelefon() + "\n" +
                        "Bmilitara: " + form.getBmilitara() + "\n" +
                        "Quantity: " + form.getCantitate()
        );
        return "Adăugat cu succes";
    }
    @GetMapping("/getAll")
    public List<Form> list(){
        return formService.getAllDataForm();

    }
}
