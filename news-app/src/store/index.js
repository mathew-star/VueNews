import { createStore } from 'vuex'
import axios from 'axios'

const BASE_URL = "https://newsapi.org/v2/top-headlines";

const API_KEY = process.env.VUE_APP_API_KEY
if (!API_KEY) {
  console.error('News API Key is not defined in environment variables!')
}

export default createStore({
  state: {
    articles: [],
    loading: false,
    error: null,
    selectedCountry: localStorage.getItem('selectedCountry') || 'us',
    selectedCategory: localStorage.getItem('selectedCategory') || 'general',
    countries: [
      { code: 'us', name: 'United States' },
      { code: 'gb', name: 'United Kingdom' },
      { code: 'in', name: 'India' },
      { code: 'au', name: 'Australia' },
      { code: 'ca', name: 'Canada' },
      { code: 'de', name: 'Germany' },
      { code: 'fr', name: 'France' }
    ],
    categories: [
      { id: 'business', name: 'Business' },
      { id: 'entertainment', name: 'Entertainment' },
      { id: 'general', name: 'General' },
      { id: 'health', name: 'Health' },
      { id: 'science', name: 'Science' },
      { id: 'sports', name: 'Sports' },
      { id: 'technology', name: 'Technology' }
    ]
  },

  mutations: {
    SET_ARTICLES(state, articles) {
      state.articles = articles
    },
    SET_LOADING(state, loading) {
      state.loading = loading
    },
    SET_ERROR(state, error) {
      state.error = error
    },
    SET_COUNTRY(state, country) {
      state.selectedCountry = country
      localStorage.setItem('selectedCountry', country)
    },
    SET_CATEGORY(state, category) {
      state.selectedCategory = category
      localStorage.setItem('selectedCategory', category)
    }
  },

  actions: {
    async fetchNews({ commit, state }) {
      commit('SET_LOADING', true)
      commit('SET_ERROR', null)
      
      try {
        const response = await axios.get( BASE_URL, {
          params: {
            country: state.selectedCountry,
            category: state.selectedCategory,
            apiKey: API_KEY,
            pageSize: 100
          }
        })
        commit('SET_ARTICLES', response.data.articles)
      } catch (error) {
        commit('SET_ERROR', error.message)
      } finally {
        commit('SET_LOADING', false)
      }
    },

    updateCountry({ commit, dispatch }, country) {
      commit('SET_COUNTRY', country)
      dispatch('fetchNews')
    },

    updateCategory({ commit, dispatch }, category) {
      commit('SET_CATEGORY', category)
      dispatch('fetchNews')
    }
  },

  getters: {
    getArticles: state => state.articles,
    isLoading: state => state.loading,
    getError: state => state.error,
    getCountries: state => state.countries,
    getCategories: state => state.categories,
    getSelectedCountry: state => state.selectedCountry,
    getSelectedCategory: state => state.selectedCategory
  }
})
