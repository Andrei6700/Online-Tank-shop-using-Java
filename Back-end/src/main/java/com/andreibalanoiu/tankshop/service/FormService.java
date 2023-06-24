package com.andreibalanoiu.tankshop.service;

import com.andreibalanoiu.tankshop.model.Form;

import java.util.List;

public interface FormService {
    public Form saveForm(Form form);
    public List<Form>getAllDataForm();
}
