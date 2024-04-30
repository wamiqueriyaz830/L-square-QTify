import axios from "axios"

const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do"


export const TopAlbums = async () => {
    try {
        let res = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
      //  console.log(res.data)
        return res.data;
    } catch (err) {
        console.error(err)
    }
} 

export const NewAlbums = async() => {
    try{
        const res = await axios.get(`${BACKEND_ENDPOINT}/albums/new`);
        return res.data
    }
    catch(error){
        console.log(error)
        return null
    }
}

export const fetchSongs = async() => {
    try{
        const res = await axios.get(`${BACKEND_ENDPOINT}/songs`);
        return res.data
    }
    catch(error){
        console.log(error)
        return null
    }
}

