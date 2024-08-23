import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import axios from 'axios';
import { useEffect, useState } from 'react';

const Mercadopago = () => {

    const publicKey = import.meta.env.VITE_APP_MP_PUBLIC_KEY || "";    

    useEffect(() => {
      initMercadoPago(publicKey, {
        locale: "es-UY",
    });  
    }, [])    

    const [preferenceId, setPreferenceId] = useState(null);

    const createPreference = async () => {
        try {
            const response = await axios.post("http://localhost:3000/create_preference", [
                {
                    title: "Calefactor algo",
                    quantity: 1,
                    price: 500
                },
                {
                    title: "Calefactor otro",
                    quantity: 1,
                    price: 300
                }
        ]);

            const {id} = response.data;
            return id;
        } catch (err) {
            console.log(err);            
        }
    }

    const handleBuy = async () => {
        const id = await createPreference();
        if (id) {
            setPreferenceId(id)
        }
    }

    return (
        <>
            <button className="bg-gray-100 hover:bg-gray-200 text-black border rounded p-1 w-full" onClick={handleBuy}>Comprar Online</button>
            {preferenceId && <Wallet initialization={{ preferenceId: preferenceId}} customization={{ texts:{ valueProp: 'smart_option'}}} />}
        </>
    )
}

export default Mercadopago;