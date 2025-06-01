import React from "react";

const About = () => {
    return(
         <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
            <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Numbers Don't Lie</h2>
                    <p className="mt-3 text-xl leading-relaxed text-gray-600 md:mt-8"> With Faith and Focus every direction and steps taken lead to impact </p>
                </div>

                <div className="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
                    <div>
                        <h3 className="font-bold text-7xl">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600"> 3+ </span>
                        </h3>
                        <p className="mt-4 text-xl font-medium text-gray-900">Years in business</p>
                        <p className="text-base mt-0.5 text-gray-500">Creating the successful direction</p>
                    </div>

                    <div>
                        <h3 className="font-bold text-7xl">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600"> 10k </span>
                        </h3>
                        <p className="mt-4 text-xl font-medium text-gray-900"> Souls Won </p>
                        <p className="text-base mt-0.5 text-gray-500">In last 3 years</p>
                    </div>

                    <div>
                        <h3 className="font-bold text-7xl">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600"> 37+ </span>
                        </h3>
                        <p className="mt-4 text-xl font-medium text-gray-900"> Church Size </p>
                        <p className="text-base mt-0.5 text-gray-500"> Spreading the word </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;