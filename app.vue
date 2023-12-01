<style src="@/assets/css/tailwind.css"></style>
<template>
  <div class="min-h-screen flex items-center justify-center bg-cover bg-center" style="background-image: url('https://free4kwallpapers.com/uploads/originals/2016/02/04/barack-obama-in-black--white-wallpaper.jpg');">
    <div class="m-10 max-w-3xl bg-black bg-opacity-80 p-8 rounded-md shadow-md">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/sMQXdOjcsP8?si=Lgu_uqiOVx24QnX0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <p class="mt-4 text-white">Number of views: {{ viewCount }}</p>

      <!-- Project Information Section -->
      <div class="mt-8">
        <h2 class="text-2xl font-semibold text-purple-400 text-white">Project Information</h2>
        <p class="mt-2 text-gray-400 text-white">
          This project is built using Feathers.js, Nuxt.js, and MongoDB.
        </p>
        <div class="mt-4">
          <h3 class="text-lg font-semibold text-purple-300 text-white">GitHub Repository:</h3>
          <a href="https://github.com/your-username/your-repo" class="text-blue-500 hover:underline">https://github.com/your-username/your-repo</a>
        </div>
        <div class="mt-2">
          <h3 class="text-lg font-semibold text-purple-300 text-white">Feathers.js:</h3>
          <p class="text-green-400 text-white">Feathers.js is a web framework for building real-time applications.</p>
        </div>
        <div class="mt-2">
          <h3 class="text-lg font-semibold text-purple-300 text-white">Nuxt.js:</h3>
          <p class="text-blue-400 text-white">Nuxt.js is a framework for building Vue.js applications.</p>
        </div>
        <div class="mt-2">
          <h3 class="text-lg font-semibold text-purple-300 text-white">MongoDB:</h3>
          <p class="text-green-400 text-white">MongoDB is a NoSQL database used in this project.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      viewCount: "Loading...",
    };
  },
  beforeMount() {
    this.fetchViewCount();
  },
  methods: {
    fetchViewCount() {
      axios.get('http://localhost:3030/contadorVis')
        .then(response => {
          console.log(response.data);
          this.viewCount = response.data;
        })
        .catch(error => {
          console.error('Error fetching view count:', error);
        });
    },
  },
};
</script>
