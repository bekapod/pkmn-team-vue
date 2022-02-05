<template>
  <header
    class="flex items-center mb-5 py-3 px-4 bg-indigo-700 md:py-3 md:px-6"
  >
    <NuxtLink
      title="Dashboard"
      to="/"
      class="block mr-4 transition-transform duration-300 ease-out transform-gpu scale-100 hover:scale-110 focus:scale-110"
    >
      <PokeBall role="presentation" aria-hidden="true" class="block w-8 h-8" />
    </NuxtLink>
    <h1 class="m-0 text-xl font-bold text-white">
      <slot />
    </h1>
  </header>
</template>
