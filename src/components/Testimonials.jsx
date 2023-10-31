import React from 'react'

const Testimonials = () => {
    return (
        <>
            <div class="py-16 white">
                <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <h2 class="mb-12 text-center text-2xl text-gray-900 font-bold md:text-4xl">What's our customers say</h2>
                    <div class="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
                        <div class="row-span-2 p-6 border border-gray-100 rounded-xl bg-gray-50 text-center sm:p-8">
                            <div class="h-full flex flex-col justify-center space-y-4">
                                <img class="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/second_user.webp" alt="user avatar" height="220" width="220" loading="lazy" />
                                <p class="text-gray-600 md:text-xl"> <span class="font-serif">"</span> I found my dream job through DPD's Employment News. The platform is a game-changer for job seekers. It's user-friendly and provides up-to-date information. Thank you, DPD!<span class="font-serif">"</span></p>
                                <div>
                                    <h6 class="text-lg font-semibold leading-none">Jane Doe</h6>
                                    <span class="text-xs text-gray-500">Public Speaker</span>
                                </div>
                            </div>
                        </div>

                        <div class="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
                            <img class="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/first_user.webp" alt="user avatar" height="220" width="220" loading="lazy" />
                            <div class="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                                <p class="text-gray-600"> <span class="font-serif">"</span> DPD's book selection is impressive. I ordered a few books, and the delivery was quick. The quality of their publications is top-notch. Highly recommended! <span class="font-serif">"</span></p>
                                <div>
                                    <h6 class="text-lg font-semibold leading-none">Rohit Kumar</h6>
                                    <span class="text-xs text-gray-500">Writer</span>
                                </div>
                            </div>
                        </div>
                        <div class="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
                            <img class="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/third_user.webp" alt="user avatar" height="220" width="220" loading="lazy" />
                            <div class="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                                <p class="text-gray-600"> <span class="font-serif">"</span>As a language enthusiast, I rely on DPD for journals in multiple languages. The content is diverse and enriching. It's a valuable resource for anyone passionate about languages and culture.<span class="font-serif">"</span></p>
                                <div>
                                    <h6 class="text-lg font-semibold leading-none">Ramesh Kumar</h6>
                                    <span class="text-xs text-gray-500">Teacher</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials