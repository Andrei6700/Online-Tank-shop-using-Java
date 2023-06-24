package com.andreibalanoiu.tankshop.service;

import com.andreibalanoiu.tankshop.model.Form;
import com.andreibalanoiu.tankshop.repository.FormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FormServiceImpl implements FormService {

    @Autowired
    private FormRepository formRepository;
    @Override
    public Form saveForm(Form form) {
        return formRepository.save(form);
    }

    @Override
    public List<Form>getAllDataForm(){
        return formRepository.findAll();
    }
}
