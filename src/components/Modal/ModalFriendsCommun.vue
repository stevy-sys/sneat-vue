<script lang="ts" setup>
import { ref } from 'vue';
import ContentFriendsCommun from '@/components/Modal/ContentFriendsCommun.vue'
defineProps({
    isLoading: {
        type: Boolean
    },
    count: {
        type: Number
    },
    type: {
        type: String
    }
})

const dialogm1 = ref('');
const dialog = ref(false);
</script>

<template>
    <v-dialog v-model="dialog" scrollable width="auto" :overlay-opacity="0.1">
        <template v-slot:activator="{ props }">
            <span v-if="type == 'friends'" v-bind="props" style="cursor: pointer;">{{ count }} amis en commun</span>
            <span v-if="type == 'groupe'" v-bind="props" style="cursor: pointer;">8 Membres</span>
        </template>
        <ContentFriendsCommun />
    </v-dialog>
</template>

<style lang="scss">
</style>
