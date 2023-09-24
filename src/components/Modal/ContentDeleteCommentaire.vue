<script lang="ts" setup>
import { ref } from 'vue';
const dialog = ref(true)
const chargeComms = (value) => {

}
</script>

<template>
    <v-card class="modal-friends">
        <v-card-title class="text-center">Suppresion de commentaire</v-card-title>
        <v-divider></v-divider>
        <span class="text-confirm">
            Voulez vous supprimer le commentaire "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, officia."
            ?
        </span>
        <v-divider></v-divider>
        <v-card-actions class="text-center">
            <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                Non
            </v-btn>
            <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                Oui
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<style lang="scss" scoped>
.v-card-actions.text-center {
    justify-content: space-between;
}
</style>
