<script setup>
import Header from '@/components/Header'

import { register } from 'swiper/element/bundle';
register()

import zhCN from 'ant-design-vue/es/locale/zh_CN';
</script>

<template>
  <Header></Header>
  <main>
    <a-config-provider
      :locale="zhCN"
      :theme="{
        token: {
          colorPrimary: '#f08a00',
        },
      }"
    >
      <router-view/>
    </a-config-provider>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
