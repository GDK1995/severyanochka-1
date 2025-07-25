<script setup lang="ts">
import { computed } from 'vue'
import { useProductStore } from './../store/product'
import MainBanner from './../components/banner/MainBanner.vue'
import SpecialBanner from './../components/banner/SpecialBanner.vue'
import PartList from './../components/lists/PartList.vue'
import TabItems from './../components/items/TabItems.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const productStore = useProductStore()
const limitedProducts = computed(() => productStore.limitedProducts)
const limitedSaleProducts = computed(() => productStore.limitedSaleProducts)
const shuffledProducts = computed(() => productStore.shuffledProducts)

const products = [limitedSaleProducts, limitedProducts, shuffledProducts]

type titleItem = {
  title: string,
  linkTitle: string,
  link: string,
  type: string
}

const listTitels: titleItem[] = [
  {
    title: `${t('sales')}`,
    linkTitle: `${t('all_sales')}`,
    link: '',
    type: 'sale'
  },
  {
    title: `${t('new_items')}`,
    linkTitle: `${t('all_new_items')}`,
    link: '',
    type: 'news'
  },
  {
    title: `${t('bought_before')}`,
    linkTitle: `${t('all_bought_before')}`,
    link: '',
    type: 'last_bought'
  }
]
</script>

<template>
  <main>
    <MainBanner />
    <PartList
      v-for="(item, index) in listTitels"
      :key="item + index"
      :type="item.type"
      :title="item.title"
      :link-title="item.linkTitle"
      :link="item.link"
      :products="products[index].value"/>
    <SpecialBanner />
    <div class="shops">
      <h3 class="text_m_header">{{$t('our_shops')}}</h3>
      <tab-items />
    </div>
  </main>
</template>