
'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/24/outline'

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
    <form onSubmit={handleSubmit}>
      <div className="space-y-8 sm:space-y-8 my-12 mx-36">
        <div>
          <h2 className="text-3xl font-semibold leading-7 text-gray-900">We'll make you a bowl of ramen (online).</h2>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-600">
            Description tbd.
          </p>
          <div className="mt-10 space-y-8 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                Email address
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                Name
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  id="name"
                  name="name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6"
                />
              </div>
            </div>


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
        </div>

        <div>
          <h2 className="text-base font-semibold leading-7 text-gray-900">Circle how you like it.</h2>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-600">
            Description tbd.
          </p>

          <div className="mt-10 space-y-10 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
            <fieldset>
              <legend className="sr-only">Select up to 3.</legend>
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:py-6">
                <div className="text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">
                  Vegetables -- Select up to 3.
                </div>
                <div className="mt-4 sm:col-span-2 sm:mt-0">
                  <div className="max-w-lg grid grid-cols-3 gap-y-6">
                    {
                      veggieList.map((veggie) => {
                        return (
                          <div key={veggie.id} className="flex flex-row gap-x-3">
                            <div className="flex h-6 items-center">
                              <input
                                id={veggie.id}
                                name={veggie.id}
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              />
                            </div>
                            <div className="text-sm">
                              <label htmlFor={veggie.id} className="font-medium text-gray-900">
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
        </div>
      </div >

      <div className="my-12 mx-36 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form >
  )
}


