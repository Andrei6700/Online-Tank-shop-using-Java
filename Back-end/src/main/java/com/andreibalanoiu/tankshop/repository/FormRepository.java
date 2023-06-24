package com.andreibalanoiu.tankshop.repository;

import com.andreibalanoiu.tankshop.model.Form;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FormRepository extends JpaRepository<Form,Integer> {
}
