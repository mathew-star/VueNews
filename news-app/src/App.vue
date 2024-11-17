<!-- App.vue -->
<template>

    <div class="container-fluid">
    <nav class="navbar navbar-dark bg-primary mb-4 rounded-bottom">
      <div class="container">
        <span class="navbar-brand mb-0 h1">Global News Hub</span>
      </div>
    </nav>

    <div class="container">
      <NewsFilters />
      <NewsList />
    </div>
  </div>

</template>


<script>
import NewsFilters from './components/NewsFilters.vue'
import NewsList from './components/NewsList.vue'

export default {
  name: 'App',
  components: {
    NewsFilters,
    NewsList
  },
  created() {
    this.$store.dispatch('fetchNews')
  }
}
</script>
