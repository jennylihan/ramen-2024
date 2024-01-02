'use client'
import { useCallback, useState, useEffect } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import Bowl from '../components/bowl';


export default function BowlPage() {
    let router = useRouter()
    const [gotData, setData] = useState(false)
    const [isLoading, setLoading] = useState(true)
    const [veggie1, setVeggie1] = useState(null)
    const [veggie2, setVeggie2] = useState(null)
    const [veggie3, setVeggie3] = useState(null)
    const [bowlType, setBowlType] = useState(null)
    const [egg, setEgg] = useState(null)
    const supabase = createClientComponentClient()


    //get search params from url using next app router  
    const searchParams = useSearchParams()
    const orderEmail = searchParams.get('email')
    const orderId = searchParams.get('id');

    const getBowl = useCallback(async () => {
        try {
            setLoading(true)

            const { data, error, status } = await supabase
                .from('bowls')
                .select(`
        veggie_1:veggie_1 (
            category,
            link,
            action
        ),
        veggie_2:veggie_2 (
            category,
            link,
            action    
        ),
        veggie_3:veggie_3 (
            category,
            link,
            action
        ),
        egg (
            link,
            note
        ),
        bowl_type
        `)
                .eq("order_id", orderId)
                .eq("email", orderEmail)
                .limit(1)
                .single()

            if (error) {
                throw error
            }

            if (data) {
                console.log(data)
                //@ts-ignore
                setVeggie1(data.veggie_1)
                //@ts-ignore
                setVeggie2(data.veggie_2)
                //@ts-ignore
                setVeggie3(data.veggie_3)
                //@ts-ignore
                setEgg(data.egg)
                setBowlType(data.bowl_type)
                setData(true)
            }
        } catch (error) {
            console.log("error getting bowl data")
            //   alert('Error loading user data!')
            console.log(error)
            setData(false)
        } finally {
            setLoading(false)
        }
    }, [orderId, orderEmail, supabase])

    useEffect(() => {
        getBowl()
    }, [orderId, orderEmail, getBowl])

    async function finishedEating() {
        router.push(`/bowl/review}`)
    }
    let soupBackground = {
        "bowl-veggie": "[#97B375]",
        "bowl-red": "[#ED9F9B]",
        "bowl-green": "[#97B375]",
        "bowl-black": "[#DC5757]",
        "bowl-original": "[#ED9F9B]",

    }

    if (isLoading) return <p>Loading...</p>
    if (!gotData) return <p>Sorry, something went wrong getting your bowl. Check to make sure your email and order ID are correct.</p>
    return (
        <>
            <div className={`min-h-screen w-screen bg-${bowlType ? soupBackground[bowlType] : "red"}`}>
                <div className="m-24 md:m-12 lg:m-2">
                    <h1 className="lg:hidden text-4xl font-bold text-center">Your order has arrived!</h1>
                    <p className="text-center">Click on the veggies to consume</p>
                </div>
                <Bowl bowlType={bowlType} veggie1={veggie1} veggie2={veggie2} veggie3={veggie3} egg={egg} />
            </div>
            <div className="bg-black text-white absolute bottom-[20px] right-2 rounded-md p-4">
                <button onClick={finishedEating}>Finished Eating? Leave a review</button>
            </div>
        </>
    )
}