'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useState } from 'react'

export default function Page() {
    const [loadStatus, setLoadStatus] = useState(null)
    const supabase = createClientComponentClient()


    async function generateOrders() {
        setLoadStatus("Getting ingredients...")
        const { data: ingredientData, error: ingredientError } = await supabase
        .from('ingredients')
        .select()
        if (ingredientError) {
            setLoadStatus("error getting ingredients...")
            return
        }
        // console.log(ingredientData)
        var ingredientsSorted = {
            "size-medium": {
                "sauce-none": {
                    "beauty": [],
                    "curiosity": [],
                    "sentiment": [],
                    "usefulness": [],
                    "humor": []
                },
                "sauce-mild": {
                    "beauty": [],
                    "curiosity": [],
                    "sentiment": [],
                    "usefulness": [],
                    "humor": []
                },
                "sauce-medium": {
                    "beauty": [],
                    "curiosity": [],
                    "sentiment": [],
                    "usefulness": [],
                    "humor": []
                },
                "sauce-spicy": {
                    "beauty": [],
                    "curiosity": [],
                    "sentiment": [],
                    "usefulness": [],
                    "humor": []
                },
            },
            "size-large": {
                "sauce-none": {
                    "beauty": [],
                    "curiosity": [],
                    "sentiment": [],
                    "usefulness": [],
                    "humor": []
                },
                "sauce-mild": {
                    "beauty": [],
                    "curiosity": [],
                    "sentiment": [],
                    "usefulness": [],
                    "humor": []
                },
                "sauce-medium": {
                    "beauty": [],
                    "curiosity": [],
                    "sentiment": [],
                    "usefulness": [],
                    "humor": []
                },
                "sauce-spicy": {
                    "beauty": [],
                    "curiosity": [],
                    "sentiment": [],
                    "usefulness": [],
                    "humor": []
                },
            }
        }
        for (let index = 0; index < ingredientData.length; index++) {
            const ingredient = ingredientData[index];
            // console.log(ingredient.size, ingredient.sauce, ingredient.category)
            ingredientsSorted[ingredient.size][ingredient.sauce][ingredient.category].push(ingredient)
        }
        // console.log(ingredientsSorted)

        setLoadStatus("Getting eggs...")
        const { data: eggData, error: eggError } = await supabase
        .from("eggs")
        .select()
        if (eggError) {
            setLoadStatus("error getting eggs...")
            return
        }
        // console.log(eggData)

        setLoadStatus("Getting orders...")
        const { data, error } = await supabase
            .from('orders')
            .select(`
        orderId: id,
        email: email,
        bowl_type: bowl_type,
        sauce: sauce,
        size: size,
        beauty: beauty,
        curiosity: curiosity,
        humor: humor,
        sentiment: sentiment,
        usefulness: usefulness,
        eggOrdered: egg
      `)
        if (!error) {
            setLoadStatus("Generating bowls")
            console.log(data)
            for (let orderIndex = 0; orderIndex < data.length; orderIndex++) {
                const order = data[orderIndex];
                console.log(order)
                var veggie1Type = null
                var veggie2Type = null
                var veggie3Type = null
                var veggieTypes = []
                if (order["beauty"]) veggieTypes.push("beauty")
                if (order["curiosity"]) veggieTypes.push("curiosity")
                if (order["humor"]) veggieTypes.push("humor")
                if (order["sentiment"]) veggieTypes.push("sentiment")
                if (order["usefulness"]) veggieTypes.push("usefulness")
                if (veggieTypes.length == 1) {
                    veggie1Type = veggieTypes[0]
                    veggie2Type = veggieTypes[0]
                    veggie3Type = veggieTypes[0]
                } else if (veggieTypes.length == 2) {
                    veggie1Type = veggieTypes[0]
                    veggie2Type = veggieTypes[1]
                    console.log("CASE 2", veggieTypes[Math.floor(Math.random() * 2)])
                    veggie3Type = veggieTypes[Math.floor(Math.random() * 2)]
                } else {
                    veggie1Type = veggieTypes[0]
                    veggie2Type = veggieTypes[1]
                    veggie3Type = veggieTypes[2]
                }
                var possibleVeggieList = ingredientsSorted[order.size][order.sauce][veggie1Type]
                const veggie1 = possibleVeggieList[Math.floor(Math.random() * possibleVeggieList.length)]
                var possibleVeggieList = ingredientsSorted[order.size][order.sauce][veggie2Type]
                const veggie2 = possibleVeggieList[Math.floor(Math.random() * possibleVeggieList.length)]
                var possibleVeggieList = ingredientsSorted[order.size][order.sauce][veggie3Type]
                const veggie3 = possibleVeggieList[Math.floor(Math.random() * possibleVeggieList.length)]

                var eggForOrder = null
                if (order.eggOrdered) {
                    eggData.forEach(egg => {
                       if (egg.email == order.email) {
                        eggForOrder = egg
                        return
                       } 
                    });
                }
                console.log(veggie1, veggie2, veggie3, eggForOrder)
                const { upsertData, upsertError } = await supabase
                    .from('bowls')
                    .upsert({ 
                       order_id: order.orderId,
                       email: order.email,
                       bowl_type: order.bowl_type,
                       size: order.size,
                       sauce: order.sauce,
                       veggie_1_type: veggie1Type,
                       veggie_1: veggie1.id,
                       veggie_2_type: veggie2Type,
                       veggie_2: veggie2.id,
                       veggie_3_type: veggie3Type,
                       veggie_3: veggie3.id,
                       egg: (eggForOrder? eggForOrder.id : null)
                    })
                if (error) {
                    setLoadStatus("Error crating bowls...")
                    return
                }

            }
            setLoadStatus("Bowls created!")
        } else {
            setLoadStatus("error...")
            return
        }
    }

    return (
        <div className="flex place-items-center justify-center w-64 sm:w-[500px] py-12">
            <button
                className="inline-flex justify-center rounded-md outline text-white bg-red outline-red sm:bg-white sm:text-red px-3 py-2 text-sm font-semibold shadow-sm hover:bg-red hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red"
                onClick={generateOrders}
            >
                {loadStatus ? loadStatus : "Generate Orders!"}
            </button>
        </div>
    )
}