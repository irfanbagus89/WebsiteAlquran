import '../tailwind-output-style.css';
import { NavLink } from 'react-router-dom';

const DaftarSurat = (props) => {
    return(
        <div className='w-full h-full py-8'>
            <div className="w-full h-full flex flex-wrap justify-evenly gap-10">{
                props.dataSurat.map((surat,index) => {
                    return(
                        <NavLink className="w-2/3 h-1/2 bg-white shadow-lg cursor-pointer flex" key={index} to={'/surah/'+(index+1)}>
                            <div className="w-1/6 h-full py-4">
                                <h1 className='text-3xl text-center'>{surat.number_of_surah}</h1>
                            </div>
                            <div className="w-1/2 h-full">
                                <h1 className='font-bold'>{surat.name}</h1>
                                <h3>{surat.name_translations.id}</h3>
                                <h3>{surat.number_of_ayah} ayat</h3>
                            </div>
                            <div className="w-1/3 h-full py-4">
                                <h1 className='text-2xl text-center'>{surat.name_translations.ar} </h1>
                            </div>

                        </NavLink>
                )})
            }</div>
        </div>
    )
}

export default DaftarSurat