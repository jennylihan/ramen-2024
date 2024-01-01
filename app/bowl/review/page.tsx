'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useCallback, useState, useEffect } from 'react'

export default function Page() {
    const [loading, setLoading] = useState(false)
    const [reviews, setReviews] = useState(null)
    const [reviewsLoading, setReviewsLoading] = useState(true)
    const [reviewed, hasReviewed] = useState(false)
    const supabase = createClientComponentClient()

    const placeholderReviews = ["The wait took forever but it was totally worth it!", "Good food but the service could be improved...", "I found a ringtone in my ramen " + String.fromCodePoint(129314), "Ramen was a little dry...", "This was the best digital ramen I never tasted!"]

    function averageRating() {
        if (reviews) {
            var sum = 0
            reviews.forEach(review => {
                sum += review.rating
            })
            return (sum / reviews.length)

        } else {
            return (0)
        }

    }

    function numRatings() {
        return (reviews ? reviews.length : 0)
    }

    function ratingToStars() {
        const avg = averageRating()
        if (avg < .5) {
            return ("")
        } else if (avg < 1.5) {
            return ("★")
        } else if (avg < 2.5) {
            return ("★★")
        } else if (avg < 3.5) {
            return ("★★★")
        } else if (avg < 4.5) {
            return ("★★★★")
        } else {
            return ("★★★★★")
        }
    }

    const getReviews = useCallback(async () => {
        setReviewsLoading(true)

        const { data, error, status } = await supabase
            .from('reviews')
            .select()
        if (error) {
            throw error
        }
        if (data) {
            console.log(data)
            setReviews(data)
            setReviewsLoading(false)
        }
    }, [supabase])

    useEffect(() => {
        getReviews()
    }, [getReviews])

    async function handleSubmit(event: any) {
        event.preventDefault()
        setLoading(true)

        // if (hasReviewed) {
        //     alert("You've already submitted a rating.")
        //     return
        // }
        const formData = new FormData(event.target)
        const d = Object.fromEntries(formData)

        console.log({ d })

        // if user has already missed email, name, bowl, sauce, size, alert them 
        if (!d.rating) {
            alert("Please submit a rating.")
            setLoading(false)
            return
        }

        const { data, error } = await supabase
            .from('reviews')
            .upsert({
                rating: d.rating,
                review_text: (d.reviewText.length > 0) ? d.reviewText : null
            })
        if (!error) {
            hasReviewed(true)
            setLoading(false)
            getReviews()
        }
    }

    return (
        <div className="min-h-screen w-screen bg-red flex flex-col justify-center items-center">
            <h2 className='text-large sm:text-xl text-white p-4'>Thanks for visiting:</h2>
            <h1 className="title text-2xl sm:text-3xl text-center text-white font-title">Jenny and Jacob's<br />New Years Ramen Shop</h1>
            <h2 className="text-xl p-4 sm:text-2xl text-center text-white">{averageRating().toFixed(1)} {ratingToStars()} ({numRatings()})</h2>
            <div className="max-w-full overflow-x-hidden w-64 sm:w-[500px] py-12 flex flex-col sm:flex-row justify-center items-center">
                <div id="review-form" className='w-full sm:w-1/2 bg-white min-h-[19rem] my-4 mx-4 border-8 border-black p-4 flex justify-center items-center'>
                    {reviewed ? (
                        <div className="text-base font-bold text-gray-600">
                            <h2>Thanks!</h2>
                        </div>
                    ) : (
                        <div>
                            <div className='text-base font-bold text-gray-600'>
                                <h2>Leave a review:</h2>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <fieldset className='rating text-xl inline-block relative'>
                                    <label htmlFor="1-star">
                                        <input
                                            id='1-star'
                                            name="rating"
                                            value='1'
                                            type="radio"
                                        />
                                        <span className="icon">★</span>
                                    </label>
                                    <label htmlFor="2-star">
                                        <input
                                            id='2-star'
                                            name="rating"
                                            value='2'
                                            type="radio"
                                        />
                                        <span className="icon">★</span>
                                        <span className="icon">★</span>
                                    </label>
                                    <label htmlFor="3-star">
                                        <input
                                            id='3-star'
                                            name="rating"
                                            value='3'
                                            type="radio"
                                        />
                                        <span className="icon">★</span>
                                        <span className="icon">★</span>
                                        <span className="icon">★</span>
                                    </label>
                                    <label htmlFor="4-star">
                                        <input
                                            id='4-star'
                                            name="rating"
                                            value='4'
                                            type="radio"
                                        />
                                        <span className="icon">★</span>
                                        <span className="icon">★</span>
                                        <span className="icon">★</span>
                                        <span className="icon">★</span>
                                    </label>
                                    <label htmlFor="5-star">
                                        <input
                                            id='5-star'
                                            name="rating"
                                            value='5'
                                            type="radio"
                                        />
                                        <span className="icon">★</span>
                                        <span className="icon">★</span>
                                        <span className="icon">★</span>
                                        <span className="icon">★</span>
                                        <span className="icon">★</span>
                                    </label>
                                </fieldset>
                                <div className="flex w-full h-full justify-center items-center">
                                    <label htmlFor="review-text" className="block text-sm font-medium leading-6 text-gray-900">
                                        <textarea
                                            id="review-text"
                                            name="reviewText"
                                            cols="40"
                                            rows="4"
                                            placeholder={placeholderReviews[Math.floor(Math.random() * placeholderReviews.length)]}
                                            className="block w-full h-full text-base text-gray-900 rounded-md focus:border-red"
                                        />
                                    </label>
                                </div>
                                <div className='py-4'>
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center rounded-md outline text-white bg-red outline-red sm:bg-white sm:text-red px-3 py-2 text-sm font-semibold shadow-sm hover:bg-red hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red"
                                        disabled={reviewed}
                                    >
                                        {loading ? "Loading..." : "Submit"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
                <div id='review-page'
                    className='w-full sm:w-1/2 bg-white mx-4 border-8 border-black'>

                </div>
            </div>

        </div >
    )
}