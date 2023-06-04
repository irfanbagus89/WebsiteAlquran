import '../tailwind-output-style.css';
import DaftarSurat from './DaftarSurat';
import { useState,useEffect } from 'react';
import Axios from 'axios';
import { Surat_URL } from '../api/Api';
import Loading from '../assets/Loading.svg'

const Product = () => {
    const [surats,setSurats] = useState(null);
    const [error,setError] = useState(null);
    useEffect(() => {
        Axios.get(Surat_URL+'/quran.json')
            .then(res => {setSurats(res.data)})
            .catch(err => {setError(err.message)})
    },[]);
    if(surats === null) {
        return <div className="w-full h-screen"><img src={Loading} alt="" className="ml-[50rem] mt-[20rem]"/></div>;
    }

    return(
        <div className="w-full min-h-screen">
            {error && <h1>{error}</h1>}
            {surats && <DaftarSurat dataSurat={surats}/>}
        </div>
    )
}

export default Product;