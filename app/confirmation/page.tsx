'use client'
import localFont from '@next/font/local'
import { useSearchParams } from 'next/navigation'
const receipt = localFont({
    src: [
        {
            path: '../assets/fake receipt.otf',
            weight: '400'
        },
    ],
    variable: '--font-receipt'
})
export default function ConfirmationPage() {
    //get search params from url using next app router  
    const searchParams = useSearchParams()
    const orderName = searchParams.get('name')
    const orderId = searchParams.get('id');

    return (
        <>
            <div className="h-screen w-screen bg-[#e2231b] flex justify-center items-center">
                <div className="flex flex-row items-center justify-center p-20 max-w-xl z-10 bg-white border-8 border-black">
                    <div className={`${receipt.variable}`}>
                        <p className="text-2xl">{`ORDER PLACED, ${orderName}!`}</p>
                        <div className="h-9"></div>
                        <p>{`ORDER ID: ${orderId}`}</p>
                        <p>{`ORDER PLACED: ${(new Date).toDateString()}`}</p>
                        <p>{`ORDER READY BY: Mon Jan 1, 2024`}</p>
                        <div className="h-36"></div>
                        <p>AMOUNT DUE: $0.00</p>
                        <div className="h-24"></div>
                        <p>SEND TO A FRIEND!</p>
                        <p>THANK YOU FOR SHOPPING LOCAL</p>
                    </div>
                </div>
            </div>
        </>
    )
}