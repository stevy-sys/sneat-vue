<script lang="ts" setup>
import { ref } from 'vue';
import ContentFriendsCommun from '@/components/Modal/ContentFriendsCommun.vue'


const dialogm1 = ref('');
const dialog = ref(false);
</script>

<template>
    <v-dialog v-model="dialog" scrollable width="auto" :overlay-opacity="0.1">
        <template v-slot:activator="{ props }">
            <span v-bind="props" style="cursor: pointer;">8 amis en commun</span>
        </template>
        <ContentFriendsCommun />
    </v-dialog>
</template>

<style lang="scss">
</style>
