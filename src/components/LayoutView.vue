<script setup lang="ts">
import HeaderView from '@/components/HeaderView.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <HeaderView />
    <main class="h-full flex flex-1 flex-col items-center justify-center">
      <RouterView />
    </main>
  </div>
</template>
