
'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/24/outline'

//import sprite from './assets/sprite2.svg'

export default function Page() {
  const [orderPlaced, setOrderPlaced] = useState(false)

  const bowlList = [
    { id: "bowl-original", name: 'Original King', description: '' },
    { id: "bowl-red", name: 'Red King', description: 'Spicy' },
    { id: "bowl-black", name: 'Black King', description: 'Squid Ink' },
    { id: "bowl-green", name: 'Green King', description: 'Basil' },
    { id: "bowl-veggie", name: 'Veggie King', description: 'Non-vegan. Contains milk.' },
  ]
  const veggieList = [
    { id: "veggie-beauty", name: 'Green Onion', description: 'beauty' },
    { id: "veggie-usefulness", name: 'Mushroom', description: 'usefulness' },
    { id: "veggie-curiosity", name: 'Seaweed', description: 'curiosity' },
    { id: "veggie-humor", name: 'Cabbage', description: 'humor' },
    { id: "veggie-sentiment", name: 'Garlic', description: 'sentiment' },
  ]

  const sauceList = [
    { id: "sauce-none", name: 'None', value: 0 },
    { id: "sauce-mild", name: 'Mild', value: 1 },
    { id: "sauce-medium", name: 'Medium', value: 2 },
    { id: "sauce-spicy", name: 'Spicy', value: 3 },
  ]

  const sizeList = [
    { id: "size-medium", name: 'Medium', value: 0 },
    { id: "size-large", name: 'Large', value: 1 },

  ]

  const supabase = createClientComponentClient()


  async function handleSubmit(event: any) {
    event.preventDefault()
    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData)

    // if data has less than 1 ormore than 3 veggie keys, alert user 
    const veggieKeys = Object.keys(data).filter((key) => key.includes("veggie"))
    if (veggieKeys.length == 0 || veggieKeys.length > 3) {
      alert("Please select at least 1 vegetable, but no more than 3 vegetables.")
      return
    }

    console.log({ data })
    const { error } = await supabase
      .from('orders')
      .upsert({ email: data.email, name: data.name, bowl_type: data.bowl, sauce: data.sauce, size: data.size, beauty: data["veggie-beauty"], usefulness: data["veggie-usefulness"], curiosity: data["veggie-curiosity"], humor: data["veggie-humor"], sentiment: data["veggie-sentiment"], egg: data.egg })
    if (!error) {
      setOrderPlaced(true)
    }
  }
  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
  }

  if (orderPlaced) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <p>order placed! :)</p>
      </div>)
  }

  return (
    <div className="w-64 sm:w-[500px] py-12">
      <form onSubmit={handleSubmit}>
        <div id="form-body" className="border-8 border-black">
          <div id="header" className="flex items-center flex-col p-4 gap-2 outline outline-1">
            <h1 className="text-3xl font-bold text-center">OMOTENASHI SHEET</h1>
            <h2 className="text-base font-serif text-gray-900 uppercase text-center">Customize your favorite ramen. Circle how you like it!</h2>
            <p className="text-sm text-gray-600 text-center">
              All items are online only. Not available for take out or packed to go.
            </p>
          </div>
            <div id="contact" className="grid grid-cols-[25px_50px_1fr] grid-rows-2 border-2 border-black justify-items-center items-center">
              <div className="row-span-2 w-full h-full outline outline-black bg-black justify-items-center items-center">
              <h2 className="vertical text-xs tracking-tighter uppercase text-white font-semibold m-1">Contact</h2>
              </div>
              <div className="flex w-full h-full outline justify-center items-center">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                Email
              </label>
              </div>
              <div className="flex w-full h-full outline justify-center items-center">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full h-full outline text-sm text-gray-900"
                />
              </div>
              <div className="flex w-full h-full outline justify-center items-center">
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                Name
              </label>
              </div>
              <div className="flex w-full h-full outline justify-center items-center">
                <input
                  id="name"
                  name="name"
                  className="block w-full h-full outline text-sm text-gray-900"
                />
              </div>
            </div>

          <div id="flavor">
            <fieldset>
              <legend className="sr-only">Bowl</legend>
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:py-6">
                <div className="text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">
                  Bowl
                </div>
                <div className="mt-4 sm:col-span-2 sm:mt-0">
                  <div className="max-w-lg grid grid-cols-3 gap-y-6">
                    {
                      bowlList.map((bowl) => {
                        return (
                          <div key={bowl.id} className="flex flex-row gap-x-3">
                            <div className="flex h-6 items-center">
                              <input
                                id={bowl.id}
                                value={bowl.id}
                                name="bowl"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              />
                            </div>
                            <div className="text-sm">
                              <label htmlFor={bowl.id} className="font-medium text-gray-900">
                                {bowl.name}
                              </label>
                              <p className="mt-1 text-gray-600">{bowl.description ? "(" + bowl.description + ")" : ""}</p>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            </fieldset>
          </div>


          <div id="options">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Circle how you like it.</h2>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-600">
              Description tbd.
            </p>
            <fieldset>
              <legend className="sr-only">Sauce</legend>
              <div className="sm:grid sm:grid-cols-3 sm:items-baseline sm:gap-4 sm:py-6">
                <div className="text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">
                  Sauce
                </div>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <div className="max-w-lg">
                    <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                      {
                        sauceList.map((sauce) => {
                          return (
                            <div key={sauce.value} className="flex flex-row items-center gap-x-3">
                              <input
                                id={sauce.id}
                                value={sauce.id}
                                name="sauce"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              />
                              <label htmlFor={sauce.id} className="block text-sm font-medium leading-6 text-gray-900">
                                {sauce.name}
                              </label>
                            </div>

                          )
                        })
                      }
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend className="sr-only">Size</legend>
              <div className="sm:grid sm:grid-cols-3 sm:items-baseline sm:gap-4 sm:py-6">
                <div className="text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">
                  Size
                </div>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <div className="max-w-lg">
                    <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                      {
                        sizeList.map((size) => {
                          return (
                            <div key={size.value} className="flex flex-row items-center gap-x-3">
                              <input
                                id={size.id}
                                name="size"
                                value={size.id}
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              />
                              <label htmlFor={size.id} className="block text-sm font-medium leading-6 text-gray-900">
                                {size.name}
                              </label>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend className="sr-only">Add egg?</legend>
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:py-6">
                <div className="text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">
                  Add egg? (no additional charge)
                </div>
                <div className="mt-4 sm:col-span-2 sm:mt-0">
                  <div className="max-w-lg grid grid-cols-3 gap-y-6">
                    <div className="flex flex-row gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="egg"
                          name="egg"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm">
                        <label htmlFor="egg" className="font-medium text-gray-900">
                          Yes
                        </label>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </fieldset>
          </div>

          <div id="veggies" className="mt-10 space-y-10 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
            <fieldset>
              <legend className="sr-only">Select up to 3.</legend>
              <div className="veggie-list sm:grid sm:grid-cols-3 sm:gap-4 sm:py-6">
                <div className="text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">
                  Vegetables -- Select up to 3.
                </div>
                <div className="mt-4 sm:col-span-2 sm:mt-0">
                  <div className="max-w-lg grid grid-cols-3 gap-y-6">
                    {
                      veggieList.map((veggie) => {
                        return (
                          <div key={veggie.id} className="flex flex-row gap-x-3">
                            <div className="pl-7">
                              <input
                                id={veggie.id}
                                name={veggie.id}
                                type="checkbox"
                              //className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              />
                              <label htmlFor={veggie.id} className="font-medium text-gray-900">
                                <svg id="checkbox_empty" viewBox="0 0 33.18 33.34">
                                  <path fill="none" stroke="#000" stroke-miterlimit="10" d="M31.74 0v18c0 2.74 1.29 12.29-.5 13.96-1.65 1.53-7.08-.9-8.91-1-2.68-.15-5.44.04-8.13.04-2.41 0-12.1-1.27-13.53.63C1.16 26.5.74 21.15.74 16c0-2.65-.17-5.36-.02-8 .08-1.5.58-2.6 1.05-4.02.67-2.02-.31-1.91 2.46-1.99C9.59 1.85 14.97 2 20.32 2c2.97 0 5.95-.08 8.92-.01 1.95.05 1.97-.23 2.53 1.47.44 1.34.28 2.19.96 3.54" />
                                </svg>
                                <svg className="checkmark" viewBox="0 0 37.92 33.3" preserveAspectRatio="none">
                                  <path fill="none" stroke="#000" stroke-miterlimit="10" d="M.59 19.57c1.41.11 2.74 1.49 3.93 2.22 1.96 1.22 4.34 1.97 6.16 3.29 1.94 1.41 3.17 3.68 5.03 5.09-1.01-1.05-2.52-1.47-3.7-2.3-2.15-1.5-4.06-2.99-6.49-4.1-1.46-.67-6.06-1.54-4.8-4.07 1.76-.33 5.43 3.09 6.68 4.15 1.47 1.24 2.42 2.87 3.98 4 2.01 1.45 2.09 1.24 3.97-.52 1.43-1.34 2.28-2.68 3.24-4.25 1.04-1.71 2.62-3.12 3.79-4.72.31-.42.64-1.52.93-2 .87-1.48 2.1-2.58 3.3-3.77 2.23-2.22 4.27-4.42 6.27-6.8.59-.7 1.46-1.2 2-1.93.58-.77.73-1.66 1.33-2.42C33 3 31.46 7.7 29.34 10.35c-1.99 2.48-4.31 4.87-5.75 7.71-2.38 4.67-5.6 10.27-9.65 13.43.83-1.6 2.49-2.55 3.65-3.87 1.51-1.72 2.8-3.72 4.22-5.52 1.87-2.37 3.39-4.85 4.96-7.23 1.27-1.94 3.29-4.64 5.02-6.3 1.25-1.19 2.15-1.5 3.07-3 .61-.99.87-1.86 1.83-2.6-4.07 4.06-7.78 8.84-11.07 13.55-2.11 3.02-4.17 6.06-6.3 9.07-1 1.42-3.02 5.22-4.37 5.89.89-1.76 2.86-2.94 4.07-4.49 2.66-3.42 4.5-7.43 7.04-10.94 1.59-1.98 3.18-3.97 4.77-5.96.41-.84.74-1.72 1-2.62.72-1.07 1.95-1.79 2.76-2.91" />
                                </svg>
                                {veggie.name}
                              </label>
                              <p className="mt-1 text-gray-600">{veggie.description}</p>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
        </div>

        <div className="my-12 mx-36 flex items-center justify-end gap-x-6">
          <button
            type="submit"
            className="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form >
    </div>
  )
}


