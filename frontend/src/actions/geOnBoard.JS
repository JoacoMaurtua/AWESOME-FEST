import axios from 'axios';

const getData = async () => {
    try{
        const getDatos = await axios.get("https://www.getonbrd.com/api/v0/categories?per_page=10&page=1");
        return getDatos;
    } catch(error){
        console.log("Error", error);
    }
}

export default getData;