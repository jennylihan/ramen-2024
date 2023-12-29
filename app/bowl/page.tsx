'use client'
import { useSearchParams } from 'next/navigation'
import Bowl from '../components/bowl';


export default function BowlPage() {
    //get search params from url using next app router  
    // const searchParams = useSearchParams()
    // const orderName = searchParams.get('name')
    // const orderId = searchParams.get('id');


    return (
        <>
            <div className="min-h-screen w-screen bg-red flex flex-col justify-center items-center">
                <div className="w-64 max-w-[90vw] h-64 max-h-[90vh]">
                <Bowl />
                </div>
            </div>
        </>
    )
}