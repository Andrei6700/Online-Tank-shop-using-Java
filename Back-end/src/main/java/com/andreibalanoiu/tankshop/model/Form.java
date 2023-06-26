package com.andreibalanoiu.tankshop.model;

import jakarta.persistence.*;

@Entity
@Table( name = "Comenzile" )
public class Form {
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    private int id;
    private String name;
    private String email;
    private String tara;
    private String telefon;
    private String bmilitara;
    private String adresa;
    private String tankName;
    private String cantitate;

    public Form() {
    }

    // getter si seter pentru fiecare atribut
    public int getId() {
        return id;
    }

    public void setId( int id ) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName( String name ) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail( String email ) {
        this.email = email;
    }

    public String getTara() {
        return tara;
    }

    public void setTara( String tara ) {
        this.tara = tara;
    }

    public String getTelefon() {
        return telefon;
    }

    public void setTelefon( String telefon ) {
        this.telefon = telefon;
    }

    public String getBmilitara() {
        return bmilitara;
    }

    public void setBmilitara( String bmilitara ) {
        this.bmilitara = bmilitara;
    }

    public String getAdresa() {
        return adresa;
    }

    public void setAdresa( String adresa ) {
        this.adresa = adresa;
    }

    public String getCantitate() {
        return cantitate;
    }

    public void setCantitate( String cantitate ) {
        this.cantitate = cantitate;
    }

    public String getTankName() {
        return tankName;
    }

    public void setTankName( String tankName ) {
        this.tankName = tankName;
    }
}
