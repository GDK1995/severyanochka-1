import { defineStore } from 'pinia'
import { products as allProducts, categoryList } from './../store/data'
import type { Product, Category, Item } from './types'

export const useProductStore = defineStore('product', {
  state: (): {
    products: Product[]
    categories: Category[]
    searched: Product[]
    query: string
  } => ({
    products: allProducts,
    categories: categoryList,
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
    },
    filterCategory(id: number): Item[] {
      const category = this.categories.filter(category => category.id === id)[0]
      return category.category
    },
    filterProductByCategory(id: number): Product[] {
      return this.products.filter(product => {
        console.log(product)
        product.category === id
      })
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