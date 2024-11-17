<template>
    <div class="row">
      <div v-if="isLoading" class="col-12 text-center py-5">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
  
      <div v-else-if="getError" class="col-12">
        <div class="alert alert-danger" role="alert">
          {{ getError }}
        </div>
      </div>
  
      <template v-else>
        <div 
          v-for="(article, index) in getArticles" 
          :key="index" 
          class="col-md-6 col-lg-4 mb-4"
        >
          <div class="card h-100">
            <img
              v-if="article.urlToImage"
              :src="article.urlToImage"
              class="card-img-top"
              :alt="article.title"
              style="height: 200px; object-fit: cover;"
              @error="handleImageError"
            >
            <img
              v-else
              src= '../assets/74e6e7e382d0ff5d7773ca9a87e6f6f8817a68a6.jpeg'
              class="card-img-top"
              :alt="article.title"
              style="height: 200px; object-fit: cover;"
              @error="handleImageError"
            >
            <div class="card-body">
              <h5 class="card-title">{{ article.title }}</h5>
              <p class="card-text">{{ article.description }}</p>
            </div>
            <div class="card-footer bg-transparent">
              <div class="d-flex justify-content-between align-items-center">
                <small class="text-muted">
                  {{ formatDate(article.publishedAt) }}
                </small>
                <a 
                  :href="article.url" 
                  target="_blank" 
                  class="btn btn-primary btn-sm"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex'
  
  export default {
    name: 'NewsList',
    computed: {
      ...mapGetters(['getArticles', 'isLoading', 'getError'])
    },
    methods: {
      formatDate(dateString) {
        return new Date(dateString).toLocaleDateString()
      },
      handleImageError(event) {
        event.target.src = './assets/74e6e7e382d0ff5d7773ca9a87e6f6f8817a68a6.jpeg'
      }
    }
  }
  </script>