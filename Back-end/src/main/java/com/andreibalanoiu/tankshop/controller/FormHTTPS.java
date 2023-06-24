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
    private FormService formService;

    @PostMapping("/add")
    public String add (@RequestBody Form form){
        formService.saveForm(form);
        return "Adaugat cu succes";
    }
    @GetMapping("/getAll")
    public List<Form> list(){
        return formService.getAllDataForm();

    }
}
