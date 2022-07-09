<template>
  <layout-header></layout-header>
  <div class="layout-content">
    <router-view />
  </div>
  <layout-footer></layout-footer>
</template>

<script lang="ts" setup>
import LayoutHeader from '@/components/layout/LayoutHeader.vue';
import LayoutFooter from '@/components/layout/LayoutFooter.vue';
</script>
