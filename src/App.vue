<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import { store } from './store.js';
import axios from 'axios';
export default {
      components : {
        AppHeader,
        AppMain,
      },
      data() {
        return {
          store,
    }
  },
}
</script>
<template lang="">
<AppHeader />
<AppMain />
</template>
<style lang="scss">
@use './styles/generals.scss';
@use '../src/styles/partials/variables';
  
</style>