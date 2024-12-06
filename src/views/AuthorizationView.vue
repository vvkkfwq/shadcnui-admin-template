<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/toast'
import { ref } from 'vue'
import { Loader, User } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { useRouter } from 'vue-router'

const router = useRouter()

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

const isLoading = ref(false)

const formSchema = toTypedSchema(
  z.object({
    username: z.string().min(2).max(50),
    password: z.string().min(6).max(50),
  }),
)

const { handleSubmit } = useForm({
  validationSchema: formSchema,
})

const onSubmit = handleSubmit(async (values) => {
  console.log('Submitted values:', values)
  isLoading.value = true

  // 模拟异步请求
  await new Promise((resolve) => setTimeout(resolve, 3000))

  isLoading.value = false
  toast({
    description: 'Successfully logged in.',
  })
  router.push('/component')
})
</script>

<template>
  <div
    class="relative hidden flex-1 flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0"
  >
    <a
      href="/home"
      :class="
        cn(buttonVariants({ variant: 'ghost' }), 'absolute right-4 top-4 md:right-8 md:top-8')
      "
    >
      Back to home
    </a>
    <div class="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
      <div class="absolute inset-0 bg-zinc-900" />
      <div class="relative z-20 flex items-center text-lg font-medium">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          class="mr-2 h-6 w-6"
        >
          <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
        </svg>
        Acme Inc
      </div>
      <div class="relative z-20 mt-auto">
        <blockquote class="space-y-2">
          <p class="text-lg">
            &ldquo;This library has saved me countless hours of work and helped me deliver stunning
            designs to my clients faster than ever before.&rdquo;
          </p>
          <footer class="text-sm">Sofia Davis</footer>
        </blockquote>
      </div>
    </div>
    <div class="lg:p-8">
      <div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div class="flex flex-col space-y-2 text-center">
          <div class="flex justify-center items-center">
            <User />
            <h1 class="ml-2 text-2xl font-semibold tracking-tight">Login</h1>
          </div>
          <p class="text-sm text-muted-foreground">
            Enter your usename and password below to Login
          </p>
        </div>
        <!-- 登陆表单 -->
        <form class="space-y-4" @submit="onSubmit">
          <!-- Username Field -->
          <FormField v-slot="{ componentField }" name="username">
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="username"
                  v-bind="componentField"
                  :disabled="isLoading"
                />
              </FormControl>
              <FormDescription> Please enter any at least 2 characters. </FormDescription>
              <FormMessage />
            </FormItem>
          </FormField>
          <!-- Password Field -->
          <FormField v-slot="{ componentField }" name="password">
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="password"
                  v-bind="componentField"
                  :disabled="isLoading"
                />
              </FormControl>
              <FormDescription> Please enter any at least 6 characters. </FormDescription>
              <FormMessage />
            </FormItem>
          </FormField>
          <Button class="w-full" :disabled="isLoading" type="submit">
            <Loader v-if="isLoading" class="mr-2 h-4 w-4 animate-spin" />
            Submit
          </Button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
