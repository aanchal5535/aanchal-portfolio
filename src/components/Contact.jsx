import React from 'react'
import { MdLocationOn } from "react-icons/md";
import { IoMdContact } from "react-icons/io";


const Contact = () => {
  return (
    <section class="min-h-screen flex items-center justify-center bg-slate-50">
    <div class="mx-auto max-w-7xl px-4 py-16 h-full sm:px-6 lg:px-8 lg:py-20">
        <div class="mb-4">
            <div class="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                <p class="text-base font-semibold uppercase tracking-wide text-purple-600 dark:text-purple-200">
                    Contact
                </p>
                <h2
                    class="font-heading mb-4 font-semibold  text-gray-900 text-2xl sm:text-4xl">
                    Get in Touch
                </h2>
            </div>
        </div>
        <div class="flex items-stretch justify-center">
            <div class="grid md:grid-cols-2">
                <div class="h-full pr-6">
                    <p class="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                       For any work or Projects , feel free to contact me. I am open for  collaboration and looking forward to hearing from you!
                    </p>
                    <ul class="mb-6 md:mb-0">
                        <li class="flex">
                            <div class="flex h-10 w-10 items-center justify-center rounded bg-purple-900 text-gray-50">
                            <MdLocationOn className='text-2xl'/>
                            </div>
                            <div class="ml-4 mb-4">
                                <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white"> Address
                                </h3>
                                <p class="text-gray-600 dark:text-slate-400">Bharatpur, Chitwan</p>
                            </div>
                        </li>
                        <li class="flex">
                            <div class="flex h-10 w-10 items-center justify-center rounded bg-purple-900 text-gray-50">
                            <IoMdContact className='text-2xl'/>
                            </div>
                            <div class="ml-4 mb-4">
                                <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Contact </h3>
                                <p class="text-gray-600 dark:text-slate-400">Mobile: 9842605922</p>
                                <p class="text-gray-600 dark:text-slate-400">Mail: aanchalsubedi005@gmail.com</p>
                            </div>
                        </li>
                       
                    </ul>
                </div>
                <div class="card h-fit max-w-6xl p-5 md:p-12" id="form">
                    <h2 class="mb-4 text-2xl font-bold">Ready to Get Started?</h2>
                    <form id="contactForm">
                        <div class="mb-6">
                            <div class="mx-0 mb-1 sm:mb-4">
                                <div class="mx-0 mb-1 sm:mb-4">
                                    <label for="name" class="pb-1 text-xs uppercase tracking-wider"></label>
                                    <input type="text" id="name" autocomplete="given-name" placeholder="Your name" class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="name"/>
                                </div>
                                <div class="mx-0 mb-1 sm:mb-4">
                                    <label for="email" class="pb-1 text-xs uppercase tracking-wider"></label>
                                    <input type="email" id="email" autocomplete="email" placeholder="Your email address" class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="email"/>
                                </div>
                            </div>
                            <div class="mx-0 mb-1 sm:mb-4">
                                <label for="textarea" class="pb-1 text-xs uppercase tracking-wider"></label><textarea id="textarea" name="textarea" cols="30" rows="5" placeholder="Write your message..." class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"></textarea>
                            </div>
                        </div>
                        <div class="text-center">
                            <button type="submit" class="w-full bg-purple-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0">Send Message</button>
                            
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Contact
