<template>
  <v-dialog v-model="dialog" persistent width="auto">
    <v-card>
      <v-card-title class="text-h5 d-flex align-center justify-space-between">
        Notu silmek mi?
        <v-icon @click="closeDeleteDialog" :size="22" color="grey" icon="mdi-close"></v-icon>
      </v-card-title>
      <v-divider />
      <v-card-text> Bu notu silmek istediğine emin misin? </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn variant="text" @click="closeDeleteDialog"> Vazgeç </v-btn>
        <v-btn color="red" variant="text" @click="deleteNote(noteId)"> Notu Sil </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from 'vue';
import { useStoreNotes } from '@/stores/storeNotes';

const storeNotes = useStoreNotes();

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  noteId: {
    type: String,
    required: true
  }
});

const emit = defineEmits('update:modelValue');

const dialog = ref(true);

const deleteNote = id => {
  storeNotes.deleteNote(id);
  storeNotes.showSnackbar('Not başarıyla silindi!', 'green-darken-1');
};

const closeDeleteDialog = () => {
  emit('update:modelValue', false);
};
</script>
