import React, { useState, useEffect } from 'react';
import './App.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWrench, FaClock, FaFire, FaSnowflake, FaCheckCircle, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const heroSlides = [
    {
      title: 'Commercial & Industrial Plumbing Excellence',
      subtitle: 'Expert plumbing, heating, and emergency services in Massachusetts',
      image: 'https://images.squarespace-cdn.com/content/v1/64511737c534fa5ced8ebf32/716707e2-2848-486d-8b36-c9e61b3b176e/Trucks.jpeg'
    },
    {
      title: 'Installation & Maintenance',
      subtitle: 'Quality installation and maintenance of plumbing systems for commercial and industrial facilities',
      image: 'https://images.squarespace-cdn.com/content/v1/64511737c534fa5ced8ebf32/5e8955f5-5d6a-4609-af3d-48147ddcee03/Pipes.jpeg'
    },
    {
      title: '24/7 Emergency Services',
      subtitle: 'Round-the-clock emergency plumbing services for industrial establishments',
      image: 'https://images.squarespace-cdn.com/content/v1/64511737c534fa5ced8ebf32/716375ec-7fab-43b0-a84c-f7013c76e96d/IMG-2302.jpg'
    }
  ];

  const services = [
    {
      icon: <FaWrench className="w-16 h-16" />,
      title: 'Installation/Maintenance of Plumbing Systems',
      description: 'Commercial and industrial plumbing systems are built to manage enormous amounts of water and waste, and they may necessitate the use of specialty equipment such as high-capacity water heaters, pumps, and filtration systems. Schindler Plumbing and Heating can install, maintain, and repair these systems to ensure that they work effectively and efficiently.',
      image: 'https://images.squarespace-cdn.com/content/v1/64511737c534fa5ced8ebf32/abf8588b-b6d4-428c-a1cc-553f42119df1/poump.png'
    },
    {
      icon: <FaClock className="w-16 h-16" />,
      title: 'Emergency Services',
      description: 'Emergencies involving industrial plumbing can be expensive, risky, and disruptive to corporate operations. To manage plumbing crises in industrial establishments, Schindler Plumbing and Heating services can offer 24/7 emergency services.',
      image: 'https://images.squarespace-cdn.com/content/v1/64511737c534fa5ced8ebf32/4f2b57e7-e905-45aa-b093-ff12341d815b/emergency.png'
    },
    {
      icon: <FaFire className="w-16 h-16" />,
      title: 'Process Piping',
      description: 'Specialized process pipe systems are frequently required in industrial facilities to move chemicals, gases, and other materials throughout the facility. Adam Schindler Plumbing and Heating can install, maintain, and repair these systems to ensure their safety and efficiency.',
      image: 'https://images.squarespace-cdn.com/content/v1/64511737c534fa5ced8ebf32/4e735673-9aee-482a-b4da-16bec173020b/Med+gas.png'
    },
    {
      icon: <FaSnowflake className="w-16 h-16" />,
      title: 'Heating',
      description: 'Specialized heating systems are frequently required in industrial facilities. Industrial plumbing services may install, maintain, and repair these systems to ensure their safety and efficiency.',
      image: 'https://images.squarespace-cdn.com/content/v1/624b503b5d73881124e70a44/1649102911144-UJ8X7BWIEGOJVX8EW0IW/Group+67Icon+components.png'
    }
  ];

  const stats = [
    { label: '15+ Years', sublabel: 'Experience' },
    { label: 'Public Contracts', sublabel: 'Trusted by Government' },
    { label: 'Private Contracts', sublabel: 'Commercial Excellence' },
    { label: 'Safety Standards', sublabel: 'Certified & Compliant' },
    { label: 'Full Service', sublabel: 'Complete Solutions' },
    { label: 'Free Estimates', sublabel: 'No Obligation' },
    { label: 'Insured', sublabel: 'Licensed & Trained' }
  ];

  const testimonials = [
    {
      name: 'John Newton',
      text: 'I called because I needed a plumber ASAP to fix an issue that would cause a leak with my toilet. He responded quickly and fit me into his schedule, arrived on time and did a great job. Very nice guy too. Would recommend using him!',
      rating: 5
    },
    {
      name: 'Debbie Cox',
      text: 'Prompt, great work, very reasonable prices. Highly recommend',
      rating: 5
    },
    {
      name: 'R.H.',
      text: 'Highly recommended. Adam was professional, courteous, and communicative. He took time to interact with me about my questions and specific situation. He made sure he was prepared for my situation beforehand and he arrived promptly. He also immediately scanned me some paperwork I needed. I would turn to him again any day.',
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50 top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <img 
                src="https://images.squarespace-cdn.com/content/v1/64511737c534fa5ced8ebf32/2672bb42-3964-4e22-9e99-4ce3958e6ed2/Logo.png" 
                alt="Adam Schindler Plumbing & Heating Logo" 
                className="h-12 sm:h-16 w-auto"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-primary-600 font-medium transition">Services</a>
              <a href="#about" className="text-gray-700 hover:text-primary-600 font-medium transition">About</a>
              <a href="#areas" className="text-gray-700 hover:text-primary-600 font-medium transition">Service Areas</a>
              <a href="#testimonials" className="text-gray-700 hover:text-primary-600 font-medium transition">Testimonials</a>
              <a href="#contact" className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition font-semibold">Contact Us</a>
            </div>
            <a href="#contact" className="md:hidden bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition font-semibold text-sm">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Carousel */}
      <section className="relative h-screen mt-20">
        <div className="absolute inset-0 overflow-hidden">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-700/80 z-10"></div>
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className="text-center text-white px-4 max-w-4xl">
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">{slide.title}</h1>
                  <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay">{slide.subtitle}</p>
                  <a href="#contact" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition inline-block animate-fade-in-delay-2">
                    Schedule a Consultation
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/30 hover:bg-white/50 text-white p-4 rounded-full transition"
          aria-label="Previous slide"
        >
          <FaChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/30 hover:bg-white/50 text-white p-4 rounded-full transition"
          aria-label="Next slide"
        >
          <FaChevronRight className="w-6 h-6" />
        </button>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive plumbing and heating solutions for commercial and industrial facilities</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
                <div className="p-8">
                  <div className="flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-6 text-primary-600">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  <button className="mt-6 text-primary-600 font-semibold hover:text-primary-700 transition">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats/Experience Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <FaCheckCircle className="w-8 h-8 mx-auto mb-3" />
                <h3 className="text-lg font-bold mb-1">{stat.label}</h3>
                <p className="text-sm text-primary-100">{stat.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Dependable, High Performance Plumbing & Heating</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our team of professionals strive to treat every customer and the product we are providing them with care, courtesy, and respect. Our performance is crucial to our success.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                When your focus is on a demanding construction schedule with hard deadlines and no room for delays, you'll appreciate the proven approach to project planning and management that Adam Schindler Plumbing & Heating brings to the table.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our combination of practical experience and the application of cutting edge technologies brings an exceptional level of consistency to our work. Plumbing and heating are areas you won't have to worry about.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.squarespace-cdn.com/content/v1/64511737c534fa5ced8ebf32/5e8955f5-5d6a-4609-af3d-48147ddcee03/Pipes.jpeg"
                alt="Professional plumbing work"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section id="areas" className="py-20 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Service Areas</h2>
          <div className="flex items-center justify-center mb-8">
            <FaMapMarkerAlt className="w-8 h-8 text-primary-600 mr-3" />
            <p className="text-2xl font-semibold text-gray-800">Essex • Middlesex • Norfolk • Suffolk Counties</p>
          </div>
          <p className="text-xl text-gray-700 mb-4">Serving the Greater Boston Area</p>
          <p className="text-lg text-gray-600 italic">
            Please reach out if unsure - we may have the ability to serve you beyond this region!
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real feedback from satisfied customers</p>
          </div>
          <div className="relative">
            <div className="bg-gray-50 rounded-xl shadow-lg p-8 md:p-12">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <FaStar key={i} className="w-6 h-6 text-yellow-400" />
                ))}
              </div>
              <p className="text-xl text-gray-700 mb-6 italic leading-relaxed text-center">
                "{testimonials[currentTestimonial].text}"
              </p>
              <p className="text-lg font-semibold text-gray-900 text-center">
                - {testimonials[currentTestimonial].name}
              </p>
            </div>
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full transition"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full transition"
              aria-label="Next testimonial"
            >
              <FaChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-primary-100">Ready to schedule a consultation? Contact us today!</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition">
              <FaPhone className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-primary-100">Available 24/7 for emergencies</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition">
              <FaEnvelope className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-primary-100">Get a response within 24 hours</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition">
              <FaMapMarkerAlt className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-primary-100">Serving Greater Boston Area</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Adam Schindler Plumbing & Heating</h3>
              <p className="text-gray-400">Expert commercial and industrial plumbing, heating, and emergency services in Massachusetts.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-white transition">Services</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition">About</a></li>
                <li><a href="#areas" className="text-gray-400 hover:text-white transition">Service Areas</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white transition">Testimonials</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Essex, Middlesex, Norfolk, Suffolk Counties</li>
                <li>Greater Boston Area</li>
                <li className="font-semibold text-white">Insured • Licensed • Trained</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Adam Schindler Plumbing & Heating. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;