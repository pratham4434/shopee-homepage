import React from 'react'

const Navbar = () => {
  return (
    <header class="w-full text-gray-700 bg-white border-t border-gray-100 shadow-sm body-font mt-0 mb-5">
    <div class="container flex flex-col items-start justify-between p-6 mx-auto md:flex-row">
      <a class="flex items-center mb-4 font-medium text-black title-font md:mb-0">
        <h1>Shopee</h1>
      </a>
      <nav class="flex flex-wrap items-center justify-center pl-24 text-base md:ml-auto md:mr-auto">
        <a href="#_" class="mr-5 font-medium hover:text-gray-900">Home</a>
        <a href="#_" class="mr-5 font-medium hover:text-gray-900">About</a>
        <a href="#_" class="font-medium hover:text-gray-900">Contact</a>
      </nav>
      <div class="items-center h-full">
        <a href="#_" class="mr-5 font-medium hover:text-gray-900">Login</a>
        <a href="#_"
          class="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-teal-500 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease">
          Sign Up
        </a>
      </div>
    </div>
  </header>
  )
}

export default Navbar