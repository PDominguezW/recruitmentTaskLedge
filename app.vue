<template>
  <div class="min-h-screen flex items-center justify-center bg-cover bg-center" style="background-image: url('https://free4kwallpapers.com/uploads/originals/2016/02/04/barack-obama-in-black--white-wallpaper.jpg');">
    <div id="main_div" class="m-10 max-w-3xl bg-black bg-opacity-80 p-8 rounded-md shadow-md hover:bg-opacity-100 transition-all duration-300">
      <div class="flex flex-col items-center">
        <video
          ref="videoElement"
          class="rounded-md"
          width="560"
          height="315"
          controls
          @timeupdate="handleVideoTimeUpdate"
        >
          <source src="@/assets/videos/obama.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
        <p class="mt-4 text-white text-center">Number of views:</p>
        <!-- If viewcount is null, show loading spinner -->
        <div v-if="viewCount === null" class="mt-2 flex justify-center">
          <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
          </svg>
        </div>
        <!-- If viewcount is not null, show viewcount -->
        <div v-else class="mt-2 text-white text-center">
          {{ viewCount }}
        </div>

      </div>

      <!-- Project Information Section -->
      <!-- Project Information Section -->
      <div class="mt-8">
        <h2 class="text-2xl font-semibold text-purple-400 text-white text-center">Project Information</h2>
        <p class="mt-2 text-gray-400 text-white text-center">
          This project is built using Feathers.js for the backend, Nuxt.js for the frontend, and MongoDB for the DB. The frontend is hosted in AWS Amplify, while the backend is hosted in a AWS EC2 instance. 
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
      viewCount: null,
      viewedSeconds: new Set(),
      isPostTriggered: false,
      videoElement: null,
      videoDuration: null,
    };
  },
  beforeMount() {
    this.fetchViewCount();
  },
  mounted() {
    this.videoElement = this.$refs.videoElement;

    // Save video duration as seconds int
    this.videoDuration = Math.floor(this.videoElement.duration);
  },
  methods: {
    fetchViewCount() {
      axios.get('http://localhost:8000/contadorVis')
        .then(response => {
          console.log(response.data);
          this.viewCount = response.data;
        })
        .catch(error => {
          console.error('Error fetching view count:', error);
        });
    },
    increaseViewCount() {
      console.log('Increasing view count...');
      axios.post('http://localhost:8000/contadorVis')
        .then(response => {
          this.viewCount = response.data;
        })
        .catch(error => {
          console.error('Error increasing view count:', error);
        });
    },
    handleVideoTimeUpdate() {
      if (this.isPostTriggered) {
        return; // Post already triggered, no need to check again
      }
      const currentTime = this.videoElement.currentTime;

      // Truncate to seconds
      const currentTimeSeconds = Math.floor(currentTime);

      // Add the current time to the viewed seconds
      this.viewedSeconds.add(currentTimeSeconds);

      // Check if the video has reached 60%
      if (this.viewedSeconds.size >= this.videoDuration * 0.6) {
        this.increaseViewCount(); // Make your POST request here
        this.isPostTriggered = true; // Set flag to prevent multiple POSTs
      }
    },
  },
};
</script>
