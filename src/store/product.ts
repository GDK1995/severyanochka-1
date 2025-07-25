import { defineStore } from 'pinia'
import { products as allProducts } from './../store/data'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: allProducts
  }),
  getters: {
    limitedSaleProducts: (state) => state.products.filter(product => product.sale_price).slice(0, 4)
  }
})