<template>
  <div class="notes">
    <p class="mb-2 text-h6 font-weight-regular">Merhaba, {{ storeAuth.user.email }}</p>

    <AddEditNote v-model="newNote" ref="addEditRef" bgColor="blue-darken-4" placeholder="Yeni Bir Not Ekle Kardeşş...">
      <template #buttons>
        <v-btn @click="addNote" variant="flat" color="blue-darken-2" :disabled="!newNote.trim()"> Not Ekle </v-btn>
      </template>
    </AddEditNote>

    <div v-if="!storeNotes.loading" class="text-center mt-10">
      <v-progress-circular :size="50" :width="5" color="primary" indeterminate></v-progress-circular>
    </div>

    <template v-else>
      <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />

      <div v-if="!storeNotes.notes.length" class="text-center text-h5 mt-8 text-primary">Kayıtlı Not Bulunmuyor</div>
    </template>
  </div>
</template>

<script setup>
//  imports
import { ref } from 'vue';
import Note from '@/components/Notes/Note.vue';
import AddEditNote from '@/components/Notes/AddEditNote.vue';
import { useStoreNotes } from '@/stores/storeNotes';
import { useStoreAuth } from '@/stores/storeAuth';

// store
const storeNotes = useStoreNotes();
const storeAuth = useStoreAuth();

// notes
const newNote = ref('');
const addEditRef = ref(null);

const addNote = () => {
  storeNotes.addNote(newNote.value.trim());
  newNote.value = '';
  addEditRef.value.textareaFocus();
  storeNotes.showSnackbar('Not Eklendi Doktor', 'green-darken-1');
};
</script>
