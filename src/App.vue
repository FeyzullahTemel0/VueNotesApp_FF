<template>
  <v-app>
    <Navbar />

    <v-main>
      <div v-if="!storeAuth.userLoading" class="main-container pa-4 pt-6">
        <RouterView />
        <Snackbar />
      </div>
    </v-main>
  </v-app>
</template>

<script setup>
//  imports
import { onMounted } from 'vue';
import Navbar from '@/components/Layout/Navbar.vue';
import Snackbar from '@/components/Shared/Snackbar.vue';
import { useStoreAuth } from '@/stores/storeAuth';

// store
const storeAuth = useStoreAuth();

onMounted(() => {
  storeAuth.init();
});
</script>

<style>
.v-navigation-drawer {
  height: 9rem !important;
  overflow-y: hidden;
}

.v-navigation-drawer__content {
  overflow-y: hidden !important;
}
.v-toolbar__content,
.main-container {
  max-width: 48rem;
  margin: 0 auto;
}

.v-toolbar-title__placeholder {
  overflow: visible !important;
}
.v-main {
  background-color: #e3f2fd;
}

/* Scrollbar */
::-webkit-scrollbar {
  width: 0.6rem;
}

::-webkit-scrollbar-track {
  background-color: #e3f2fd;
}

::-webkit-scrollbar-thumb {
  background: #1867c0;
  border-radius: 1rem;
}
</style>
