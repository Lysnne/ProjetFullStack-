import axios from 'axios';


const API_URL = import.meta.env.VITE_API_URL || ""

const useAxios = () => {

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
            .catch((error) => {
                console.log("Error sending Data", error)
            });
        
    }

    const submitNewTransaction = (model, request, object, idportfolio, idstock) => {
        const url = `${API_URL}/${model}/${request}/${idportfolio}/${idstock}`
        console.log(url)
        axios.post(url, object)
            .catch((error) => {
                console.log("Error sending Data", error)
            });
    }

    const createObject = (model, request, object) => {
        const url = `${API_URL}/${model}/${request}`
        console.log(url)
        axios.post(url, object)
        .catch((error) => {
            console.log("Error sending new Object", error)
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
        }
        catch (error){
            console.error("Error updating Data: ", error);
        }
    };

    return {
       loadData,
       loadDataWithPathVariable,
       submitNewData, 
       submitNewTransaction,
       deleteData,
       updateData,
       createObject
    };
    
};

export default useAxios;