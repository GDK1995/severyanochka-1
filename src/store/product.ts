import { defineStore } from 'pinia'
import { products as allProducts } from './../store/data'
import type { Product } from './types'

export const useProductStore = defineStore('product', {
  state: (): {
    products: Product[]
    searched: Product[]
    query: string
  } => ({
    products: allProducts,
    searched: [],
    query: ''
  }),
  getters: {
    limitedProducts: (state) => state.products.slice(0, 4),
    limitedSaleProducts: (state) => state.products.filter(product => product.sale_price).slice(0, 4),
    shuffledProducts: (state) => [...state.products].sort(() => Math.random() - 0.5).slice(0, 4)
  },
  actions: {
    searchProduct(q: string) {
      this.query = q.trim()
      if (!this.query) {
        this.searched = []
        return
      }
      this.searched = this.products.filter(product =>
        product.title.toLowerCase().includes(this.query.toLowerCase())
      )
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'product',
        storage: localStorage,
        paths: ['query', 'searched']
      }
    ]
  }
})