import React, {useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL || ""

const useAxios = () => {
    const navigate = useNavigate();

    //// GET
    const loadData = async (model, request, set) => {
        try {
            const url = `${API_URL}/${model}/${request}`
            console.log(url)
            const result = await axios.get(url)
            console.log("Data received:", result.data)
            set(result.data);
        }
        catch (error) {
            console.log("Error loading Data:", error)
        }
    };

    const loadDataWithPathVariable = async (model, request, set, pathvariable) => {
        try {
            const url = `${API_URL}/${model}/${request}/${pathvariable}`
            console.log(url)
            const result = await axios.get(url)
            console.log("Data received:", result.data)
            set(result.data)
        }
        catch (error) {
            console.error("Eror loading Data:", error)
        }
    };

    //// CREATE 
    const submitNewData = (model, request, object, id) => {
        const url = `${API_URL}/${model}/${request}/${id}`
        console.log(url)
        axios.post(url, object)
            .then(() => {
                navigate("/")
            })
            .catch((error) => {
                console.log("Error sending Data", error)
            });
        
    }


    //// DELETE

    const deleteData = async (model, request, id) => {
        try{
            const url = `${API_URL}/${model}/${request}/${id}`
            await axios.delete(url);
            console.log(url)
        }
        catch(error){
            console.log("Error deleting Data", error)
        }
       
    };


    //// UPDATE
    const updateData = async (model, request, id, object) => {
        try{
            const url = `${API_URL}/${model}/${request}/${id}`
            console.log(url)
            await axios.put(url, object);
            navigate("/");
        }
        catch (error){
            console.error("Error updating Data: ", error);
        }
     };

    return {
       loadData,
       loadDataWithPathVariable,
       submitNewData, 
       deleteData,
       updateData
    };
    
};

export default useAxios;