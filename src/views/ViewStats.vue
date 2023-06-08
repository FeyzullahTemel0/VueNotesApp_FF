<template>
  <div class="stats">
    <v-table class="elevation-1 rounded">
      <thead>
        <tr>
          <th class="text-left font-weight-bold">Notlar</th>
          <th class="text-left font-weight-bold">Veriler</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Toplam Not Sayısı</td>
          <td>{{ storeNotes.getNumberOfNotes }}</td>
        </tr>
        <tr>
          <td>Tüm Notların Karekter Sayısı</td>
          <td>{{ storeNotes.getTotalCharactersOfAllNotes }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script setup>
// imports
import { useStoreNotes } from '@/stores/storeNotes';

// store
const storeNotes = useStoreNotes();
</script>
