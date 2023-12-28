
'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import greenOnionIcon from "./assets/spring-onion.png"
import seaweedIcon from "./assets/seaweed.png"
import garlicIcon from "./assets/garlic.png"
import mushroomIcon from "./assets/mushroom.png"
import cabbageIcon from "./assets/cabbage.png"


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
    { id: "veggie-beauty", name: 'Green Onion', description: 'beauty', icon: greenOnionIcon },
    { id: "veggie-usefulness", name: 'Mushroom', description: 'usefulness', icon: mushroomIcon  },
    { id: "veggie-curiosity", name: 'Seaweed', description: 'curiosity', icon: seaweedIcon  },
    { id: "veggie-humor", name: 'Cabbage', description: 'humor', icon: cabbageIcon  },
    { id: "veggie-sentiment", name: 'Garlic', description: 'sentiment', icon: garlicIcon  },
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
              <legend className="sr-only">Ramen Flavor</legend>
              <div className="grid grid-cols-[25px_2fr_2fr] grid-rows-3 border-2 border-black justify-items-center items-center">
                <div className="flex row-span-3 w-full h-full outline justify-items-center items-center">
                  <h2 className="vertical text-xs tracking-tighter uppercase font-semibold m-1">Ramen Flavor</h2>
                </div>
                {
                  bowlList.map((bowl) => {
                    return (
                      <div key={bowl.id} className="radio flex w-full h-full outline flex-row gap-x-3 p-3 justify-center items-center">
                        <input
                          id={bowl.id}
                          value={bowl.id}
                          name="bowl"
                          type="radio"
                          className=""
                        />
                        <label htmlFor={bowl.id} className="relative cursor-pointer">
                          <svg className="circle big-circle" viewBox="0 0 160 64">
                            <path fill="none" stroke="#ff0050" stroke-miterlimit="10" d="M14.578,36.821C13.386,38.543 12.377,40.349 11.811,42.216C10.989,44.925 11.087,47.764 12.886,50.671C13.662,51.926 14.707,52.703 15.896,53.211C17.628,53.95 19.669,54.109 21.6,54.368C22.48,54.486 23.352,54.574 24.217,54.635C28.796,57.489 34.516,58.76 40.301,58.466C41.615,58.399 42.93,58.291 44.244,58.149C45.956,58.344 47.676,58.426 49.399,58.427C54.197,58.432 59.02,57.815 63.773,57.299C66.983,56.95 70.201,56.662 73.424,56.408C80.947,55.817 88.494,55.413 96.009,54.856C99.447,54.602 102.87,54.302 106.289,53.973C109.708,53.644 113.123,53.287 116.549,52.916C117.463,52.817 118.375,52.702 119.285,52.578C120.644,52.393 122,52.19 123.362,51.999L125.484,51.733C125.695,51.707 126.216,51.64 126.357,51.608C126.467,51.583 126.534,51.543 126.561,51.526C126.706,51.432 126.758,51.314 126.784,51.23C126.833,51.068 126.813,50.912 126.707,50.764C126.686,50.734 126.567,50.535 126.217,50.535C126.138,50.535 126.063,50.552 125.995,50.583C125.813,50.609 125.483,50.656 125.351,50.672L123.211,50.94C121.851,51.137 120.497,51.345 119.141,51.537C118.241,51.664 117.339,51.784 116.434,51.887C113.015,52.277 109.606,52.655 106.193,53.003C102.783,53.351 99.369,53.67 95.939,53.944C88.426,54.543 80.881,54.992 73.36,55.624C70.131,55.895 66.907,56.199 63.691,56.564C58.966,57.101 54.171,57.74 49.398,57.759C48.766,57.762 48.134,57.753 47.503,57.732C48.306,57.614 49.107,57.486 49.908,57.35C57.3,56.089 64.662,54.098 71.922,52.737C76.829,51.81 81.744,50.976 86.664,50.189C98.158,48.35 109.679,46.775 121.196,44.938C126.183,44.142 131.614,43.276 136.709,41.683C140.146,40.608 143.43,39.201 146.325,37.265C148.136,36.052 149.954,34.565 151.005,32.696C151.709,31.444 152.072,30.021 151.865,28.395C151.657,26.749 150.983,25.223 150.045,23.836C148.664,21.793 146.71,20.053 144.846,18.679C141.726,16.379 138.21,14.614 134.519,13.201C133.715,12.893 132.902,12.603 132.085,12.327C128.795,10.908 125.427,9.854 122.696,8.994C121.432,8.596 120.177,8.228 118.914,7.892C117.65,7.556 116.377,7.253 115.077,6.986C109.825,5.906 104.577,4.972 99.296,4.372C94.011,3.772 88.693,3.507 83.304,3.767C75.053,4.165 66.83,5.713 58.805,8.004C50.781,10.294 42.955,13.325 35.497,16.688C29.538,19.376 22.589,22.588 18.397,27.506C16.196,30.088 14.746,33.137 14.578,36.821ZM32.81,54.498C32.209,54.551 31.607,54.598 31.005,54.635C29.236,54.745 27.457,54.783 25.655,54.714C29.927,57.045 35.072,58.064 40.267,57.795C40.659,57.775 41.052,57.751 41.444,57.723C40.899,57.618 40.354,57.5 39.811,57.367C37.771,56.867 35.235,55.882 32.81,54.498ZM135.388,13.91C136.52,14.515 137.61,15.175 138.625,15.897C141.968,18.274 144.506,21.327 145.107,25.32C145.832,30.143 143.454,33.579 139.828,36.077C134.658,39.638 126.934,41.278 122.272,42.363C115.073,44.04 107.772,45.383 100.428,46.524C89.428,48.233 78.334,49.491 67.353,50.742C62.136,51.338 56.895,51.623 51.667,52.105C49.433,52.311 47.202,52.554 44.976,52.872C41.184,53.417 37.518,54.027 33.846,54.4C35.989,55.527 38.169,56.334 39.957,56.763C41.331,57.092 42.712,57.327 44.097,57.486C45.998,57.281 47.897,57.005 49.794,56.681C57.182,55.418 64.54,53.428 71.797,52.067C76.712,51.151 81.635,50.326 86.563,49.552C98.063,47.745 109.589,46.211 121.113,44.411C126.079,43.635 131.489,42.794 136.566,41.225C139.965,40.175 143.214,38.799 146.079,36.896C147.839,35.727 149.614,34.298 150.639,32.489C151.305,31.313 151.651,29.976 151.463,28.445C151.267,26.861 150.621,25.391 149.722,24.053C148.372,22.043 146.454,20.331 144.626,18.977C141.817,16.895 138.685,15.248 135.388,13.91ZM46.818,15.905C43.245,16.944 39.723,18.186 36.362,19.685C29.795,22.615 23.843,26.527 19.339,31.82C17.982,33.415 16.497,35.128 15.21,36.937C15.168,37.98 15.234,39.075 15.419,40.227C16.41,46.406 19.718,50.941 24.218,53.859C24.404,53.979 24.592,54.097 24.782,54.212C26.875,54.344 28.933,54.324 30.978,54.202C31.375,54.178 31.772,54.151 32.168,54.12C30.629,53.188 29.16,52.095 27.918,50.864C25.594,48.56 24.067,45.773 24.334,42.655C24.73,37.965 26.961,33.536 30.095,29.586C34.696,23.789 41.239,19.022 46.703,15.969L46.818,15.905ZM14.564,37.879C13.614,39.326 12.821,40.829 12.342,42.378C11.549,44.944 11.631,47.636 13.323,50.402C14.034,51.563 14.998,52.281 16.092,52.754C17.782,53.484 19.778,53.638 21.664,53.899C22.246,53.98 22.826,54.047 23.402,54.102C18.994,51.078 15.772,46.495 14.788,40.328C14.653,39.483 14.58,38.667 14.564,37.879ZM130.013,12.014C125.867,10.743 121.609,9.818 117.524,9.001C111.036,7.707 104.533,6.442 97.972,5.751C93.608,5.291 89.219,5.085 84.791,5.295C78.143,5.609 71.571,6.749 65.215,8.623C60.743,9.942 56.378,11.623 52.169,13.635C57.18,12.428 62.178,11.564 66.866,10.903C70.264,10.424 73.596,9.896 76.956,9.712C79.211,9.589 81.478,9.62 83.785,9.92C84.615,10.028 86.383,10.096 87.596,10.594C88.321,10.892 88.856,11.348 89.053,11.969C89.142,12.25 88.985,12.551 88.704,12.639C88.422,12.728 88.122,12.571 88.033,12.29C87.965,12.072 87.797,11.911 87.585,11.775C87.347,11.623 87.055,11.508 86.74,11.415C85.656,11.094 84.321,11.04 83.648,10.948C81.406,10.642 79.201,10.6 77.008,10.707C73.674,10.87 70.366,11.375 66.994,11.83C61.195,12.612 54.916,13.701 48.729,15.37C48.123,15.692 47.52,16.021 46.921,16.358C41.508,19.395 35.027,24.131 30.476,29.887C27.412,33.763 25.223,38.101 24.844,42.697C24.604,45.661 26.089,48.291 28.307,50.469C29.714,51.851 31.417,53.05 33.175,54.035C37.053,53.68 40.915,53.033 44.918,52.465C47.15,52.146 49.389,51.903 51.63,51.696C56.854,51.214 62.092,50.927 67.306,50.331C78.28,49.073 89.368,47.809 100.361,46.093C107.693,44.948 114.982,43.602 122.169,41.923C126.787,40.843 134.443,39.224 139.562,35.691C143.034,33.295 145.331,30.012 144.632,25.392C144.048,21.531 141.576,18.592 138.342,16.296C135.851,14.529 132.91,13.141 130.013,12.014ZM126.068,51.583C126.11,51.596 126.159,51.604 126.217,51.604C126.165,51.604 126.115,51.597 126.068,51.583ZM125.515,10.421C124.47,10.079 123.47,9.767 122.544,9.476C121.287,9.082 120.04,8.717 118.783,8.384C117.528,8.051 116.265,7.752 114.974,7.488C109.736,6.416 104.503,5.488 99.237,4.896C93.98,4.305 88.69,4.047 83.33,4.311C75.122,4.717 66.944,6.267 58.963,8.555C50.969,10.846 43.173,13.877 35.745,17.237C29.868,19.895 23.004,23.054 18.872,27.911C16.972,30.145 15.656,32.741 15.297,35.817C16.442,34.272 17.697,32.799 18.861,31.416C23.4,26.022 29.413,22.017 36.056,19.007C40.553,16.97 45.338,15.388 50.15,14.139C54.944,11.725 59.952,9.74 65.1,8.231C71.489,6.359 78.094,5.221 84.774,4.916C89.221,4.712 93.628,4.925 98.01,5.392C104.581,6.093 111.093,7.367 117.59,8.67C120.187,9.189 122.853,9.754 125.515,10.421Z"/>
                          </svg>
                          <p className="font-medium font-semibold text-base text-gray-900 text-center uppercase">{bowl.name}</p>
                          <p className="mt-1 text-sm text-gray-600 text-center">{bowl.description ? "(" + bowl.description + ")" : ""}</p>
                        </label>
                      </div>
                    )
                  })
                }
                <div className="flex w-full h-full outline flex-row gap-x-3 p-3 justify-center items-center"></div>
              </div>
            </fieldset>
          </div>


          <div id="options">
            <p className="p-3 text-sm leading-6 text-gray-600">
              Now customize your ramen below.
            </p>
            <div className="grid grid-cols-[25px_1fr] grid-rows-3 border-2 border-black justify-items-center items-center">
              <div className="flex row-span-3 w-full h-full bg-black outline-black justify-items-center items-center">
                <h2 className="vertical text-xs tracking-tighter uppercase font-semibold m-1 text-white">Soup Settings</h2>
              </div>
              <fieldset id="sauce" className="w-full h-full grid grid-cols-[70px_1fr]">
                <div className="flex w-full h-full outline justify-center items-center p-3">
                  <legend className="sr-only">Sauce</legend>
                  <h3 className="text-sm text-gray-600">Sauce</h3>
                </div>
                <div className="flex flex-wrap gap-3 outline justify-around items-center p-3">
                  {
                    sauceList.map((sauce) => {
                      return (
                        <div key={sauce.value} className="radio flex flex-row items-center">
                          <input
                            id={sauce.id}
                            value={sauce.id}
                            name="sauce"
                            type="radio"
                          // className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                          <label htmlFor={sauce.id} className="block text-base font-medium leading-6 text-gray-900 cursor-pointer">
                            {sauce.name}
                          </label>
                        </div>

                      )
                    })
                  }

                </div>
              </fieldset>

              <fieldset id="size" className="w-full h-full grid grid-cols-[70px_1fr]">
                <div className="flex w-full h-full outline justify-center items-center p-3">
                  <legend className="sr-only">Size</legend>
                  <h3 className="text-sm text-gray-600">Size</h3>
                </div>
                <div className="flex flex-wrap gap-3 outline justify-around items-center p-3">
                  {
                    sizeList.map((size) => {
                      return (
                        <div key={size.value} className="flex flex-row items-center">
                          <input
                            id={size.id}
                            name="size"
                            value={size.id}
                            type="radio"
                          // className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                          <label htmlFor={size.id} className="block text-base font-medium leading-6 text-gray-900 cursor-pointer">
                            {size.name}
                          </label>
                        </div>
                      )
                    })
                  }
                </div>
              </fieldset>
              <fieldset id="egg-section" className="w-full h-full grid grid-cols-[70px_1fr]">
                <div className="flex w-full h-full outline justify-center items-center p-3">
                  <legend className="sr-only">Egg?</legend>
                  <h3 className="text-sm text-gray-600">Egg?</h3>
                </div>
                <div className="checkbox flex flex-wrap gap-3 outline justify-center items-center p-3">
                  <div className="pl-7">
                  <input
                    id="egg"
                    name="egg"
                    type="checkbox"
                  // className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="egg" className="text-base font-medium text-gray-900 cursor-pointer">
                    <svg id="checkbox_empty" viewBox="0 0 33.18 33.34">
                      <path fill="none" stroke="#000" stroke-miterlimit="10" d="M31.74 0v18c0 2.74 1.29 12.29-.5 13.96-1.65 1.53-7.08-.9-8.91-1-2.68-.15-5.44.04-8.13.04-2.41 0-12.1-1.27-13.53.63C1.16 26.5.74 21.15.74 16c0-2.65-.17-5.36-.02-8 .08-1.5.58-2.6 1.05-4.02.67-2.02-.31-1.91 2.46-1.99C9.59 1.85 14.97 2 20.32 2c2.97 0 5.95-.08 8.92-.01 1.95.05 1.97-.23 2.53 1.47.44 1.34.28 2.19.96 3.54" />
                    </svg>
                    <svg className="checkmark" viewBox="0 0 37.92 33.3" preserveAspectRatio="none">
                      <path fill="none" stroke="#000" stroke-miterlimit="10" d="M.59 19.57c1.41.11 2.74 1.49 3.93 2.22 1.96 1.22 4.34 1.97 6.16 3.29 1.94 1.41 3.17 3.68 5.03 5.09-1.01-1.05-2.52-1.47-3.7-2.3-2.15-1.5-4.06-2.99-6.49-4.1-1.46-.67-6.06-1.54-4.8-4.07 1.76-.33 5.43 3.09 6.68 4.15 1.47 1.24 2.42 2.87 3.98 4 2.01 1.45 2.09 1.24 3.97-.52 1.43-1.34 2.28-2.68 3.24-4.25 1.04-1.71 2.62-3.12 3.79-4.72.31-.42.64-1.52.93-2 .87-1.48 2.1-2.58 3.3-3.77 2.23-2.22 4.27-4.42 6.27-6.8.59-.7 1.46-1.2 2-1.93.58-.77.73-1.66 1.33-2.42C33 3 31.46 7.7 29.34 10.35c-1.99 2.48-4.31 4.87-5.75 7.71-2.38 4.67-5.6 10.27-9.65 13.43.83-1.6 2.49-2.55 3.65-3.87 1.51-1.72 2.8-3.72 4.22-5.52 1.87-2.37 3.39-4.85 4.96-7.23 1.27-1.94 3.29-4.64 5.02-6.3 1.25-1.19 2.15-1.5 3.07-3 .61-.99.87-1.86 1.83-2.6-4.07 4.06-7.78 8.84-11.07 13.55-2.11 3.02-4.17 6.06-6.3 9.07-1 1.42-3.02 5.22-4.37 5.89.89-1.76 2.86-2.94 4.07-4.49 2.66-3.42 4.5-7.43 7.04-10.94 1.59-1.98 3.18-3.97 4.77-5.96.41-.84.74-1.72 1-2.62.72-1.07 1.95-1.79 2.76-2.91" />
                    </svg>
                    <p className="text-base">Yes</p>
                  </label>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>

          <div id="veggies" className="">
            <fieldset>
              <legend className="sr-only">Vegetables -- Select up to 3.</legend>
              <div className="grid grid-cols-[25px_1fr] grid-rows-1 border-2 border-black justify-items-center items-center">
                <div className="flex w-full h-full outline justify-items-center items-center">
                  <h2 className="vertical text-xs tracking-tighter uppercase font-semibold m-1">Vegetables * 3 max</h2>
                </div>
                <div className="flex flex-col w-full h-full outline sm:flex-wrap sm:flex-row">
                    {
                      veggieList.map((veggie) => {
                        return (
                          <div key={veggie.id} className="checkbox flex flex-row sm:basis-6/12 p-3">
                            <div className="flex place-items-center pl-7 w-full h-full">
                              <input
                                id={veggie.id}
                                name={veggie.id}
                                type="checkbox"
                              //className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              />
                              <label htmlFor={veggie.id} className="font-medium text-gray-900 cursor-pointer">
                                <svg id="checkbox_empty" viewBox="0 0 33.18 33.34">
                                  <path fill="none" stroke="#000" stroke-miterlimit="10" d="M31.74 0v18c0 2.74 1.29 12.29-.5 13.96-1.65 1.53-7.08-.9-8.91-1-2.68-.15-5.44.04-8.13.04-2.41 0-12.1-1.27-13.53.63C1.16 26.5.74 21.15.74 16c0-2.65-.17-5.36-.02-8 .08-1.5.58-2.6 1.05-4.02.67-2.02-.31-1.91 2.46-1.99C9.59 1.85 14.97 2 20.32 2c2.97 0 5.95-.08 8.92-.01 1.95.05 1.97-.23 2.53 1.47.44 1.34.28 2.19.96 3.54" />
                                </svg>
                                <svg className="checkmark" viewBox="0 0 37.92 33.3" preserveAspectRatio="none">
                                  <path fill="none" stroke="#000" stroke-miterlimit="10" d="M.59 19.57c1.41.11 2.74 1.49 3.93 2.22 1.96 1.22 4.34 1.97 6.16 3.29 1.94 1.41 3.17 3.68 5.03 5.09-1.01-1.05-2.52-1.47-3.7-2.3-2.15-1.5-4.06-2.99-6.49-4.1-1.46-.67-6.06-1.54-4.8-4.07 1.76-.33 5.43 3.09 6.68 4.15 1.47 1.24 2.42 2.87 3.98 4 2.01 1.45 2.09 1.24 3.97-.52 1.43-1.34 2.28-2.68 3.24-4.25 1.04-1.71 2.62-3.12 3.79-4.72.31-.42.64-1.52.93-2 .87-1.48 2.1-2.58 3.3-3.77 2.23-2.22 4.27-4.42 6.27-6.8.59-.7 1.46-1.2 2-1.93.58-.77.73-1.66 1.33-2.42C33 3 31.46 7.7 29.34 10.35c-1.99 2.48-4.31 4.87-5.75 7.71-2.38 4.67-5.6 10.27-9.65 13.43.83-1.6 2.49-2.55 3.65-3.87 1.51-1.72 2.8-3.72 4.22-5.52 1.87-2.37 3.39-4.85 4.96-7.23 1.27-1.94 3.29-4.64 5.02-6.3 1.25-1.19 2.15-1.5 3.07-3 .61-.99.87-1.86 1.83-2.6-4.07 4.06-7.78 8.84-11.07 13.55-2.11 3.02-4.17 6.06-6.3 9.07-1 1.42-3.02 5.22-4.37 5.89.89-1.76 2.86-2.94 4.07-4.49 2.66-3.42 4.5-7.43 7.04-10.94 1.59-1.98 3.18-3.97 4.77-5.96.41-.84.74-1.72 1-2.62.72-1.07 1.95-1.79 2.76-2.91" />
                                </svg>
                                <div className="grid grid-cols-2">
                                <img className="object-scale-down h-12 place-self-center"
                                src={veggie.icon.src} alt={veggie.name + " icon"} />
                                  <div>
                                <p className="text-base font-medium text-gray-900">{veggie.name}</p>
                                <p className="mt-1 text-sm text-gray-600">({veggie.description})</p>
                                  </div>
                                </div>
                              </label>
                            </div>
                          </div>
                        )
                      })
                    }
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


