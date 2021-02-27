package com.investing.forecastbackend.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Data
@Getter
@Setter
public class InvestmentDetail {
    private String category;
    private String minimum;
    private List<String> data;

    public String getCategory(){
        return this.category;
    }

    public String getMinimum(){
        return this.minimum;
    }

    public List<String> getData(){
        return this.data;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public void setMinimum(String minimum) {
        this.minimum = minimum;
    }

    public void setData(List<String> data) {
        this.data = data;
    }
}

 