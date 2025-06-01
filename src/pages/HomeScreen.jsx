import React, {useState} from "react";
import { Church, Play } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

import Services from "../components/services/Services";
import Footer from "../components/footer/Footer";

const HomeScreen = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-amber-50">
      <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div>
                <h1 className="text-xl font-bold text-gray-900"> Faith and Focus </h1>
                <p className="text-sm text-gray-600">Spreading Hope Through Digital Ministry</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Testimonials</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-amber-100 text-blue-800 border border-blue-200">
            Digital Evangelism Excellence
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Illuminate the World with{" "}
            <span className="bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text text-transparent">
              Faith and Focus
            </span>
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Empowering churches and ministries to share the Gospel through compelling media content that reaches hearts, transforms lives, and spreads hope across every digital platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <Play className="mr-2 h-5 w-5" />
              Start Your Project
            </Button>
            <Button variant="outline" className="px-8 py-3 text-lg transition-all duration-300">
              View Our Work
            </Button>
          </div>
        </div>
      </section>

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

    {/* Services section */}
    <div id="services"> 
        <Services />
    </div>

    {/* Footer */}
    <Footer />
    </div>
  );
};

export default HomeScreen;
