<script setup lang="ts">
import ThemeButton from '../components/ThemeButton.vue'
import { RouterLink } from 'vue-router'
import { Button } from '@/components/ui/button'
</script>

<template>
  <header class="sticky top-0 bg-background/80 backdrop-blur-lg border-b border-border">
    <div class="flex justify-between h-[--header-height] px-10 items-center">
      <div class="right-box flex items-center">
        <div class="title-box flex items-center">
          <svg class="h-6 w-6" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_102_1338)">
              <path
                d="M208 128L128 208"
                stroke="#41B883"
                stroke-width="16"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M192 40L40 192"
                stroke="#41B883"
                stroke-width="16"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_102_1338">
                <rect width="256" height="256" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
          <div class="flex items-center font-bold ml-2">Shadcn Admin</div>
        </div>
        <nav class="flex items-center ml-4 text-sm font-medium text-foreground/60">
          <RouterLink class="hover:text-foreground/80" to="/home" active-class="active-nav"
            >Home</RouterLink
          >
          <RouterLink class="hover:text-foreground/80 ml-2" to="/authorization" active-class="active-nav"
          >
            Authorization
          </RouterLink
          >
          <RouterLink class="hover:text-foreground/80 ml-2" to="/component" active-class="active-nav"
          >
            Component
          </RouterLink
          >
        </nav>
      </div>

      <div class="button-box flex items-center">
        <a href="https://github.com/vvkkfwq/vue3-project-template">
          <Button variant="ghost" size="icon"
            ><svg viewBox="0 0 15 15" width="1.2em" height="1.2em" class="w-5 h-5">
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M7.5.25a7.25 7.25 0 0 0-2.292 14.13c.363.066.495-.158.495-.35c0-.172-.006-.628-.01-1.233c-2.016.438-2.442-.972-2.442-.972c-.33-.838-.805-1.06-.805-1.06c-.658-.45.05-.441.05-.441c.728.051 1.11.747 1.11.747c.647 1.108 1.697.788 2.11.602c.066-.468.254-.788.46-.969c-1.61-.183-3.302-.805-3.302-3.583a2.8 2.8 0 0 1 .747-1.945c-.075-.184-.324-.92.07-1.92c0 0 .61-.194 1.994.744A7 7 0 0 1 7.5 3.756A7 7 0 0 1 9.315 4c1.384-.938 1.992-.743 1.992-.743c.396.998.147 1.735.072 1.919c.465.507.745 1.153.745 1.945c0 2.785-1.695 3.398-3.31 3.577c.26.224.492.667.492 1.343c0 .97-.009 1.751-.009 1.989c0 .194.131.42.499.349A7.25 7.25 0 0 0 7.499.25"
                clip-rule="evenodd"
              ></path></svg
          ></Button>
        </a>

        <ThemeButton></ThemeButton>
      </div>
    </div>
  </header>
</template>
