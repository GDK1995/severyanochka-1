<script setup lang="ts">
import { defineProps } from 'vue'
import { FAV } from './../../store/icons'
import OutlineBttn from './../buttons/OutlineBttn.vue'
import RateStars from './RateStars.vue'
import SaleLabel from './SaleLabel.vue'

const props = defineProps<{
  product: Object,
  type: String
}>()
</script>

<template>
  <article class="card">
    <figure class="card_cover">
      <img width="270px" height="160px" :src="product.image" :alt="product.title">
      <div class="card_fav" v-html="FAV"/>
      <SaleLabel v-if="type === 'sale'" class="card_sale"/>
    </figure>
    <div class="card_desc">
      <div class="card_price">
        <div>
          <p class="text_m_bold">{{product.price}} {{product.currency}}</p>
          <span v-if="type === 'sale'">{{$t('with_card')}}</span>
        </div>
        <div v-if="type === 'sale'">
          <p class="text_s">{{product.sale_price}} {{product.currency}}</p>
          <span>{{$t('ordinary')}}</span>
        </div>
      </div>
      <h3 class="text_s card_titles">{{ product.title }}</h3>
      <p class="text_s card_titles">{{ product.desc }}</p>
      <RateStars :rate="product.rate"/>
      <outline-bttn />
    </div>
  </article>
</template>