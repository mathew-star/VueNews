<template>
    <div class="row mb-4">
      <div class="col-md-6">
        <div class="d-flex gap-3">
          <div class="flex-grow-1">
            <label class="form-label">Select Country</label>
            <select 
              class="form-select" 
              v-model="selectedCountry" 
              @change="updateCountry"
            >
              <option 
                v-for="country in countries" 
                :key="country.code" 
                :value="country.code"
              >
                {{ country.name }}
              </option>
            </select>
          </div>
          <div class="flex-grow-1">
            <label class="form-label">Select Category</label>
            <select 
              class="form-select" 
              v-model="selectedCategory"
              @change="updateCategory"
            >
              <option 
                v-for="category in categories" 
                :key="category.id" 
                :value="category.id"
              >
                {{ category.name }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex'
  
  export default {
    name: 'NewsFilters',
    computed: {
      ...mapGetters([
        'getCountries',
        'getCategories',
        'getSelectedCountry',
        'getSelectedCategory'
      ]),
      countries() {
        return this.getCountries
      },
      categories() {
        return this.getCategories
      },
      selectedCountry: {
        get() {
          return this.getSelectedCountry
        },
        set(value) {
          this.$store.dispatch('updateCountry', value)
        }
      },
      selectedCategory: {
        get() {
          return this.getSelectedCategory
        },
        set(value) {
          this.$store.dispatch('updateCategory', value)
        }
      }
    },
    methods: {
      updateCountry() {
        this.$store.dispatch('fetchNews')
      },
      updateCategory() {
        this.$store.dispatch('fetchNews')
      }
    }
  }
  </script>
  