

<template>
  <section class="bg-white  flex items-center px-8 py-48">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

      <div>
        <h1 class="text-4xl md:text-5xl font-bold text-[#22543D] mb-6">
          Precision Mapping & Land Surveying
        </h1>
        <p class="text-lg text-text mb-8">
          Empowering your projects with accurate geospatial data. We offer drone mapping, land surveying, and boundary verification services for developers, architects, and property owners.
        </p>

        <div class="flex flex-wrap gap-4">
          <NuxtLink
            to="/services"
            class="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition"
          >
            View Services
          </NuxtLink>

          <NuxtLink
            to="/contact"
            class="px-6 py-3 bg-white border border-primary text-primary font-semibold rounded-lg hover:bg-[#E6FFFA] transition"
          >
            Contact Us
          </NuxtLink>
        </div>
      </div>
      <div class="relative w-full h-96 hidden md:block">
        <img
          src="/static/images/jes-image.jpg"
          alt="Surveying Equipment"
          class="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  </section>
  <section>
    <Carousel/>
  </section>
</template>
