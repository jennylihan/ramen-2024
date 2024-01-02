'use client'
import { useCallback, useState, useEffect } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useSearchParams } from 'next/navigation'
import Bowl from '../components/bowl';


export default function BowlPage() {
    type Veggie = {
        category: string;
        link: string;
        action: string;
    };

    const [gotData, setData] = useState(false)
    const [isLoading, setLoading] = useState<boolean>(true)
    const [veggie1, setVeggie1] = useState<Veggie | null>(null)
    const [veggie2, setVeggie2] = useState<Veggie | null>(null)
    const [veggie3, setVeggie3] = useState<Veggie | null>(null)
    const [bowlType, setBowlType] = useState<string | null>(null)
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
                setVeggie1(data.veggie_1)
                setVeggie2(data.veggie_2)
                setVeggie3(data.veggie_3)
                setBowlType(data.bowl_type)
                setData(true)
            }
        } catch (error) {
            console.log("error getting bowl data")
            //   alert('Error loading user data!')
            setData(false)
        } finally {
            setLoading(false)
        }
    }, [orderId, orderEmail, supabase])

    useEffect(() => {
        getBowl()
    }, [orderId, orderEmail, getBowl])

    if (isLoading) return <p>Loading...</p>
    if (!gotData) return <p>Sorry, something went wrong getting your bowl. Check to make sure your email and order ID are correct.</p>
    return (
        <>
            <div className="min-h-screen w-screen bg-red">
                <Bowl bowlType={bowlType} veggie1={veggie1} veggie2={veggie2} veggie3={veggie3} />
            </div>
        </>
    )
}