package com.andreibalanoiu.tankshop.service;

import com.andreibalanoiu.tankshop.model.Form;

import java.util.List;

public interface FormService {
    //salvam un obiect in baza de date
    public Form saveForm(Form form);
    //obtinearea tuturor obiectelor din Form
    public List<Form>getAllDataForm();
}
