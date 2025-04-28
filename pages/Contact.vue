<template>
    <section class="bg-white min-h-screen flex items-center justify-center px-4">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
  
        <div>
          <h1 class="text-4xl md:text-4xl font-bold text-primary mb-6">Contact Us</h1>
          <p class="text-lg text-text mb-8">
            We'd love to hear from you! Whether you have a question, feedback, or want to get started with our services, feel free to reach out.
          </p>
  
          <form class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" id="name" name="name" required class="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
            </div>
  
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" id="email" name="email" required class="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
            </div>
  
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows="4" required class="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
            </div>
  
            <button type="submit" class="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition">
              Send Message
            </button>
          </form>

          <p class="text-xl semi-bold from-neutral-400 mt-4 mb-4">Or reach out to us on Facebook:</p>
          <div class="flex flex-row gap-6 items-center justify-center">
            <div class="mt-2">
                <a href="https://www.facebook.com/jessurveying" target="_blank" class="inline-flex items-center py-3 px-6 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
                <i class="fab fa-facebook mr-2"></i> Contact Us on Facebook
                </a>
            </div>
            <div class="mt-2">
            <a href="https://www.facebook.com/jessurveying" target="_blank" class="inline-flex items-center py-3 px-6 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
                <i class="fab fa-facebook-messenger  mr-2"></i>
                Message me on Facebook
            </a>
            </div>
          </div>
        
        </div>
  
        <div class=" justify-center items-center hidden md:block">
          <div class="relative w-full h-96 md:h-auto">
            <img
              src="/static/images/contact.jpg"
              alt="Contact Us"
              class="w-full h-full object-cover rounded-lg shadow-lg"
            /> 
          </div>
        </div>
      
      </div>
    </section>
  </template>
  