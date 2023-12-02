<style src="@/assets/css/tailwind.css"></style>
<template>
  <div class="min-h-screen flex items-center justify-center bg-cover bg-center" style="background-image: url('https://free4kwallpapers.com/uploads/originals/2016/02/04/barack-obama-in-black--white-wallpaper.jpg');">
    <div id="main_div" class="m-10 max-w-3xl bg-black bg-opacity-80 p-8 rounded-md shadow-md hover:bg-opacity-100 transition-all duration-300">
      <div class="flex flex-col items-center">
        <iframe
          class="rounded-md"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/sMQXdOjcsP8?si=Lgu_uqiOVx24QnX0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <p class="mt-4 text-white text-center">Number of views:</p>
        <p class="text-white text-center">{{ viewCount }}</p>
      </div>

      <!-- Project Information Section -->
      <div class="mt-8">
        <h2 class="text-2xl font-semibold text-purple-400 text-white text-center">Project Information</h2>
        <p class="mt-2 text-gray-400 text-white text-center">
          This project is built using Feathers.js for the backend, Nuxt.js for the frontend, and MongoDB for the DB. Both frontend and backend are hosted in AWS Amplify. 
        </p>
        <div class="mt-10 flex flex-col items-center">
          <div>
            <a class="text-lg font-semibold text-white hover:text-gray-500" href="https://github.com/PDominguezW/recruitmentTaskLedgeFrontend">Frontend GitHub Repository</a>
          </div>
          <div>
            <a class="text-lg font-semibold text-white hover:text-gray-500" href="https://github.com/PDominguezW/recruitmentTaskLedgeBackend">Backend GitHub Repository</a>
          </div>
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
      loadingAnimationState: 0, // 0 represents '...', 1 represents '..', 2 represents '.'
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

          // Update loading animation in a cycle
          setInterval(() => {
            this.loadingAnimationState = (this.loadingAnimationState + 1) % 3;
            switch (this.loadingAnimationState) {
              case 0:
                this.viewCount = "Loading.";
                break;
              case 1:
                this.viewCount = "Loading..";
                break;
              case 2:
                this.viewCount = "Loading...";
                break;
            }
          }, 500);
        });
    },
  },
};
</script>