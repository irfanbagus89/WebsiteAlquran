import '../tailwind-output-style.css';

const Footer = () => {
    return(
        <div className="w-full h-auto p-12 text-lg bg-black text-white flex flex-col items-center">
            <div className="w-full h-auto  flex flex-wrap justify-around">
                <div className="w-72 h-auto opacity-80 py-4">
                    <h3 className='font-bold'>Alquran Online</h3>
                    <br />
                    <p className='text-justify'>Alquran Online membantu muslim untuk dapat membaca Alquran dimana saja dan kapan saja</p>
                </div>
                <div className="w-72 h-auto opacity-80 py-4">
                    <h3 className='font-bold'>Country</h3>
                    <br />
                    <p className='text-justify'>Indonesia</p>
                </div>
                <div className="w-72 h-auto opacity-80 py-4">
                    <h3 className='font-bold'>Info Kontak</h3>
                    <br />
                    <p className='text-justify'>081*****196</p>
                </div>
                <div className="w-72 h-auto opacity-80 py-4">
                    <h3 className='font-bold'>Visitor</h3>
                    <br />
                    <p className='text-justify'>Terima kasih telah mengunjungi website kami. Diharapkan website kami dapat terus berkembang kedepannya</p>
                </div>
            </div>
            <hr className='w-11/12 mx-auto bg-white opacity-80' />
            <h3 className='mt-8 opacity-80'>Alquran Online Developed by Irfan Bagus</h3>
        </div>
    )
}

export default Footer