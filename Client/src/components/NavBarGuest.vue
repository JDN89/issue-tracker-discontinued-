<script setup lang="ts">
import { isDark, toggleDark } from '~/composables'

const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <!-- style inherited from mainclass in the layouts folder -->
  <nav text-xl mt-6 mb-4>
    <router-link class="icon-btn mx-2" to="/" :title="t('button.home')">
      <div i-carbon-campsite />
    </router-link>
    <router-link class="icon-btn mx-2" to="/login" :title="t('button.login')">
      <div i-carbon-login />
    </router-link>

    <router-link
      class="icon-btn mx-2"
      to="/register"
      :title="t('button.register')"
    >
      <div i-carbon-group-account />
    </router-link>

    <a
      class="icon-btn mx-2"
      rel="noreferrer"
      href="https://github.com/JDN89/issue-tracker"
      target="_blank"
      title="GitHub"
    >
      <div i-carbon-logo-github />
    </a>
    <!--
    <router-link
      class="icon-nav-btn mx-2"
      to="/about"
      :title="t('button.about')"
    >
      <div i-eva-question-mark-circle-fill />
    </router-link> -->

    <div class="icon-btn mx-2" />
    <div class="icon-btn mx-2" />
    <button
      class="icon-btn mx-2 !outline-none"
      :title="t('button.toggle_dark')"
      @click="toggleDark()"
    >
      <div i="dark:carbon-moon carbon-sun" />
    </button>

    <a
      class="icon-btn mx-2"
      :title="t('button.toggle_langs')"
      @click="toggleLocales"
    >
      <div i-carbon-language />
    </a>
  </nav>
</template>
