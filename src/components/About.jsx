import React from 'react'
import bikeImage from "../assets/bg-harley.jpg";
import { Link } from "react-router-dom";
const About = () => {
    return (
        <div><main className="p-4">
            <section id="about" className="max-w-2xl mx-auto">
                <h2 className="text-3xl font-semibold mb-4">Welcome to Motor Bike Rental</h2>
                <p className="mb-4">At Motor Bike Rental, we are passionate about motorcycles and want to provide everyone with the opportunity to experience the thrill of riding.</p>

                <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
                <p className="mb-4">Our mission is to make motor bike rentals accessible, convenient, and affordable for locals and tourists alike. Whether you want to explore the city, ride through scenic routes, or go on an adventurous journey, we have the perfect motorbike for you.</p>

                <h3 className="text-2xl font-semibold mb-2">Wide Range of Motorcycles</h3>
                <p className="mb-4">At Motor Bike Rental, we offer a diverse range of motorcycles to suit your preferences. From powerful cruisers for long rides to nimble sports bikes for a thrilling experience, we have it all. Our fleet is well-maintained to ensure your safety and enjoyment on the road.</p>

               

                <h3 className="text-2xl font-semibold mb-2">Ride with Confidence</h3>
                <p className="mb-4">Your safety is our top priority. Before each rental, our team ensures that each motorcycle is in excellent condition and ready for the road. We provide helmets and safety gear, and we'll give you a quick overview of the bike's features before you set off on your adventure.</p>

                
                {/* Add a bike image */}
                <img
                    src={bikeImage}
                    alt="Bike Rental"
                    className="w-full h-auto mt-6 rounded-lg shadow-lg"
                />

                {/* Creative Call-to-Action Button */}
                <div className="mt-6 flex justify-center">
                    <ul>
                        <li>
                            <Link to="/"><h1 className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-lg font-semibold">Rent a Bike Now</h1></Link>
                        </li>
                    </ul>
                </div>
            </section>
        </main></div>
    )
}

export default About