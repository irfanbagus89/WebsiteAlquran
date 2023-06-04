import {useState, useEffect} from "react";
import '../tailwind-output-style.css';
import Axios from "axios";
import { Surat_URL } from "../api/Api";
import Loading from '../assets/Loading.svg'

const Surat = () => {
    const [surat,setSurat] = useState(null);
    const [err,setErr] = useState(null);
    const url =window.location.href;
    const surahUrl = url.split("http://localhost:3000");
    useEffect(() => {
        const fetchSurat = async () => {
          try {
            const response = await Axios.get(
              Surat_URL + surahUrl[1] + ".json"
            );
            setSurat(response.data);
          } catch (error) {
            setErr(error.message);
          }
        };
    
        fetchSurat();
      }, []);

    if(surat === null) {
        return <div className="w-full h-screen"><img src={Loading} alt="" className="ml-[50rem] mt-[20rem]"/></div>;
    }

        return(
        <div className='w-full min-h-screen p-4'>
            {err && <h1>{err}</h1> }
            <div className="w-full h-auto flex justify-evenly mb-20">
                <h1 className='text-xl md:text-3xl text-center'>Surah ke {surat.number_of_surah}</h1>
                <div className="">
                    <h1 className='font-bold'>{surat.name}</h1>
                    <h3>{surat.name_translations.id}</h3>
                </div>
                <h1 className='text-xl md:text-2xl text-center'>{surat.name_translations.ar} </h1>
                <h3>{surat.number_of_ayah} ayat</h3>
            </div>
            <div className="w-full h-auto flex flex-col gap-8">{surat.verses.map((surat,index) => {
                return(
                <div className="w-full h-auto flex justify-between bg-white shadow-lg px-4 items-center" key={index}>
                    <h1 className='text-3xl text-center leading-[63px]'>{surat.number}</h1>
                    <div className="w-3/4 h-full flex flex-col gap-4">
                        <h1 className='font-bold text-end'>{surat.text}</h1>
                        <h3 className="text-end">{surat.translation_id}</h3>
                    </div>
                </div>

                )
            })}</div>
        </div>
    )
}

export default Surat;