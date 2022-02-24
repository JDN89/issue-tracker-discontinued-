<script setup lang="ts">
import { ErrorMessage, Field, useForm } from 'vee-validate'
import * as yup from 'yup'
import { useRouter } from 'vue-router'
import { useUserStore } from '~/stores/user'

const { t } = useI18n()
const userStore = useUserStore()
const router = useRouter()

// Create a form context with the validation schema

const schema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
})

//  IsSubmitting disables the submit button until the yup rules are met

const { handleSubmit, values } = useForm({
  validationSchema: schema,
})

// Sync Userstore state with vee-validate state
// This is a one way binding
watch(values, (newFormData) => {
  userStore.$patch({ loginData: newFormData })
})

// create a handler to submit the store state
// the store action will only run when the user submits valid form data
const onSubmit = handleSubmit(async() => {
  // check if getLoginData is not null
  // logindata are the form values that the user filled inf
  if (userStore.getLoginData) {
    await userStore.loginUser(userStore.getLoginData)
    if (userStore.getToken !== null) {
      router.replace({
        name: 'myTodos',
      })
    }
  }
  else { console.error('login failed, could\'t retrieve login data') }
})

</script>

<template>
  <div mx-auto min-w-xs max-w-xs py-6 prose>
    <h2>{{ t("page.login") }}</h2>

    <form class="flex flex-col" @submit="onSubmit">
      <div class="flex flex-col relative">
        <div i-carbon-email class="mt-3 ml-4.5 absolute" />
        <Field name="email" type="email" placeholder="Email" class="field" />

        <ErrorMessage name="email" class="errorMessage" />
      </div>

      <div class="flex flex-col">
        <div i-carbon-password class="mt-3 ml-4.5 absolute" />
        <Field
          name="password"
          type="password"
          :placeholder="t('text.password') "
          :title="t('text.password')"
          class="field"
        />
        <ErrorMessage name="password" class="errorMessage" />
      </div>

      <button
        type="submit"
        class="mt-2 hover w-19 bg-red-900 dark:bg-teal-700 dark:text-light-50 text-yellow-300 rounded-2xl mx-auto"
      >
        {{ t("button.submit") }}
      </button>
    </form>
  </div>
</template>

<style scoped>
input{ padding-left: 48px;

}
</style>
