import {useState, useEffect} from "react";
import '../tailwind-output-style.css';
import {Surat_URL} from "../api/Api";
import Axios from "axios";
import DaftarSurat from "./DaftarSurat";
import Logo from '../assets/Logo.png'
import Loading from '../assets/Loading.svg'

const Home = () => {
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
            <div className="w-full h-96 bg-blue-400 flex flex-col items-center justify-evenly px-4">
                <img src={Logo} alt="" className="w-60 h-60" />
                <h1 className="text-3xl text-center">Selamat Datang di Alquran Online</h1>
            </div>
            {surats && <DaftarSurat dataSurat={surats}/>}
        </div>
    )
}

export default Home