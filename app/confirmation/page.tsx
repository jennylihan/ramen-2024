'use client'
import { useSearchParams } from 'next/navigation'

export default function ConfirmationPage() {
    //get search params from url using next app router  
    const searchParams = useSearchParams()
    const orderName = searchParams.get('name')
    const orderId = searchParams.get('id');

    return (
        <>
            <div className="min-h-screen w-screen bg-red flex flex-col justify-center items-center">
                <div className="grow flex flex-col items-left justify-between w-64 sm:w-[500px] sm:max-h-[65vh] my-12 p-4 sm:p-8 bg-white border-8 border-black font-receipt">
                        <div>
                        <p className="text-2xl">{`ORDER PLACED, ${orderName}!`}</p>
                        <p>ORDER ID:<br />{`${orderId}`}</p>
                        <p>ORDER PLACED:<br />{`${(new Date).toDateString()}`}</p>
                        <p>ORDER READY BY:<br />Mon Jan 1 2024</p>
                        </div>
                        <div>
                        <p className="text-xl">AMOUNT DUE: $0.00</p>
                        </div>
                        <div>
                        <p>SEND TO A FRIEND!</p>
                        <p>THANK YOU FOR SHOPPING LOCAL!</p>
                        </div>
                </div>
            </div>
        </>
    )
}