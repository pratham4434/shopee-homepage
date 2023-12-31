import React from 'react'
import blog from '../assets/blog1.jpg'

const Blog = () => {
    return (
        <section class="shadow-xl bg-white dark:bg-gray-800">
            <div class="container px-6 py-10 mx-auto">
                <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">From the blog</h1>

                <div class=" mt-8 lg:-mx-6 lg:flex lg:items-center">
                    <img class="shadow-2xl object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src={blog} alt=""/>

                        <div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                            <p class="text-md text-blue-300 uppercase">category</p>

                            <a href="#" class="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl">
                            DPD's Employment News: Your Gateway to Government Job Opportunities
                            </a>

                            <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                            Stay updated with the latest government job opportunities and employment-related news through the Directorate of Publications Division (DPD). In this blog post, we'll explore how DPD's Employment News journal plays a crucial role in keeping job seekers informed and connected to career prospects in the public sector. Find out how this valuable resource can be your key to a promising future.
                            </p>

                            <a href="#" class="inline-block mt-2 text-blue-500  hover:text-blue-300">Read more</a>

                            <div class="flex items-center mt-6">
                                <img class="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt=""/>

                                    <div class="mx-4">
                                        <h1 class="text-sm text-gray-700 dark:text-gray-200">Rajesh Kumar</h1>
                                        <p class="text-sm text-gray-500 dark:text-gray-400">Directorate of Publications Division (DPD)</p>
                                    </div>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Blog