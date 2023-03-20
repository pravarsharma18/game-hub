import axios, {CanceledError} from "axios";

export default axios.create({
    params:{
        key:"611cca539b164db6912647cf01b2951e"
    },
    baseURL:"https://api.rawg.io/api/" 
})

export {CanceledError};
