<template>
  <v-dialog v-model="dialog" persistent width="auto">
    <v-card>
      <v-card-title class="text-h5 d-flex align-center justify-space-between">
        Çıkış mı?
        <v-icon @click="closeLogOutDialog" :size="22" color="grey" icon="mdi-close"></v-icon>
      </v-card-title>
      <v-divider />
      <v-card-text> Çıkmak istediğine emin misin? </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn variant="text" @click="closeLogOutDialog"> Vazgeç </v-btn>
        <v-btn color="primary" variant="text" @click="logOut"> Çıkış Yap </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from 'vue';
import { useStoreAuth } from '@/stores/storeAuth';

const storeAuth = useStoreAuth();

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits('update:modelValue');

const dialog = ref(true);

const logOut = () => {
  closeLogOutDialog();
  storeAuth.logOut();
};

const closeLogOutDialog = () => {
  emit('update:modelValue', false);
};
</script>
