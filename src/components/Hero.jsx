import React from 'react'
import header from '../assets/OG.gif'
const Hero = () => {
    return (
        <>
            <div class="container flex flex-col mx-auto bg-white">

                <div class="grid w-full grid-cols-1 my-auto mt-12 mb-8 md:grid-cols-2 xl:gap-14 md:gap-5">
                    <div class="flex flex-col justify-center col-span-1 text-center lg:text-start">
                        <div class="flex items-center justify-center mb-4 lg:justify-normal">


                            <h4 class="ml-2 text-sm font-bold tracking-widest text-primary uppercase">🚀 Empower Your Journey </h4>
                        </div>
                        <h1 class="mb-8 text-4xl font-extrabold leading-tight lg:text-6xl text-dark-grey-900">Unlocking Knowledge, Fueling Careers</h1>
                        <p class="mb-6 text-base font-normal leading-7 lg:w-3/4 text-grey-900">
                        Welcome to our one-stop destination for books, journals, and employment news. Explore a wide array of resources from the Directorate of Publications Division and stay informed about exciting job prospects. Your path to knowledge and career growth begins here.
                        </p>
                        <div class="flex flex-col items-center gap-4 lg:flex-row">
                            <button class="flex items-center py-4 text-sm font-bold text-white px-7 bg-black hover:bg-purple-blue-600 focus:ring-4 focus:ring-purple-blue-100 transition duration-300 rounded-xl">Get started now</button>
                            <button class="flex items-center py-4 text-sm font-medium px-7 text-dark-grey-700 hover:text-dark-grey-900 transition duration-300 rounded-2xl">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mr-2">
                                    <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd"></path>
                                </svg> */}
                                Buy Now
                            </button>
                        </div>
                    </div>
                    <div class="items-center justify-end hidden col-span-1 md:flex">
                        <img class="w-12/12 rounded-md" src="https://tailus.io/sources/blocks/tech-startup/preview/images/globalization-cuate.svg" alt="header image" />
                    </div>
                </div>
            </div>
            {/* <div class="flex flex-wrap -mx-3 my-5">
                <div class="w-full max-w-full sm:w-3/4 mx-auto text-center">
                    <p class="text-sm text-slate-500 py-1">
                        Tailwind CSS Component from <a href="https://www.loopple.com/theme/motion-landing-library?ref=tailwindcomponents" class="text-slate-700 hover:text-slate-900" target="_blank">Motion Landing Library</a> by <a href="https://www.loopple.com" class="text-slate-700 hover:text-slate-900" target="_blank">Loopple Builder</a>.
                    </p>
                </div>
            </div> */}

        </>
    )
}

export default Hero