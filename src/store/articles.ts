import { defineStore } from 'pinia'
import { articles as allArticles } from './../store/data'

export const useArticleStore = defineStore('article', {
  state: () => ({
    articles: allArticles
  }),
  getters: {
    limitedArticles: (state) => state.articles.slice(0, 3)
  }
})