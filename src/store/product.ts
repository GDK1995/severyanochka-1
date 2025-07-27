import { defineStore } from 'pinia'
import { products as allProducts } from './../store/data'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: allProducts,
    query: '',
  }),
  getters: {
    limitedProducts: (state) => state.products.slice(0, 4),
    limitedSaleProducts: (state) => state.products.filter(product => product.sale_price).slice(0, 4),
    shuffledProducts: (state) => [...state.products].sort(() => Math.random() - 0.5).slice(0, 4),
    searchedProducts(state) {
      const q = state.query.trim().toLowerCase()
      if (!q) return []
      return state.products.filter(product => product.title.toLowerCase().includes(q))
    }
  }
})