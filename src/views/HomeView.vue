<script setup lang="ts">
import ThemeButton from '../components/ThemeButton.vue'
</script>

<template>
  <header class="sticky top-0 bg-background/80 backdrop-blur-lg border-b border-border">
    <div class="container flex justify-between h-14 items-center">
      <div class="flex items-center font-bold">Template System</div>
      <ThemeButton></ThemeButton>
    </div>
  </header>
  <main>
    <div class="container pt-4 flex items-center justify-center">Welcome to home page</div>
  </main>
</template>
