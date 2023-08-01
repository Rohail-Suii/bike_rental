import React from 'react';

const ContactPage = () => {
    return (
        <div className="h-1/2 bg-gray-100 py-4 px-4 sm:px-4 lg:px-4">
            <div className="max-w-7xl mx-auto">
                <div className="md:flex md:items-center md:justify-between">
                    {/* Contact Information Column */}
                    <div className="md:w-1/3 pb-8 md:pb-0">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">Contact Information</h2>
                        <div className="flex items-start mb-2">
                            <svg
                                className="flex-shrink-0 h-6 w-6 text-green-400"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                            <p className="ml-3 text-lg text-gray-600">Address: 123 Main St, City, Country</p>
                        </div>
                        <div className="flex items-start mb-2">
                            <svg
                                className="flex-shrink-0 h-6 w-6 text-green-400"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                            <p className="ml-3 text-lg text-gray-600">Phone: +1 123-456-7890</p>
                        </div>
                        <div className="flex items-start">
                            <svg
                                className="flex-shrink-0 h-6 w-6 text-green-400"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                            <p className="ml-3 text-lg text-gray-600">Email: contact@example.com</p>
                        </div>
                    </div>

                    {/* Contact Form Column */}
                    <div className="md:w-2/3">
                        <div className="bg-white py-8 px-4 shadow sm:rounded-lg">
                            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
                                Contact Us
                            </h2>
                            <form>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="sm:col-span-2">
                                        <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            name="full-name"
                                            id="full-name"
                                            autoComplete="given-name"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            autoComplete="email"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="6" // Increase the number of rows for a larger textarea
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md resize-none" // Remove the resizing feature to keep a consistent size
                                        placeholder="Your message..."
                                    />
                                </div>
                                <div className="mt-6">
                                    <button
                                        type="submit"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
