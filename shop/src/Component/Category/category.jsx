import React, { Component } from "react";
import './category.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Category(props) {
  
    const Categories = [...props.category]

        return (
            <div className="category-container">
                <h1 className="title">SEARCH BY BRANDS</h1>
                <div className="smaller-container">
                {Categories.map((category) => {
                    return (
                        <Link to={category.pozitie} className={category.clasa}>
                            <div className="category-info">
                                <h1 className="h1-category">{category.nume}</h1>
                                <img className="category-image"src={category.image}/>
                            </div>
                        </Link>
                    )
                })}</div>
            </div>
        )
    }


export default Category