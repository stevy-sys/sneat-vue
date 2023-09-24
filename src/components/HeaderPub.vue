<script setup>
import PublicationDescription from '@/components/PublicationDescription.vue'

defineProps({
    avatar: {
        type: String,
        required: true,
    },
    type: {
        type: String,
    },
    moreList: {
        type: Array
    }
})
</script>

<template>
    <VCardItem class="pb-3 ">
        <VCardTitle class="mb-1">
            <VAvatar size="34" :image="avatar" />
            <PublicationDescription :actionType="type" />
            <!-- <span class="ms-2 avatar-name">John Doe a actualiser une statut</span> -->
        </VCardTitle>

        <template #append>
            <div class="me-n3 mt-n8">
                <MoreBtn :menu-list="moreList" />
            </div>
        </template>
    </VCardItem>
</template>

<style lang="scss" scoped>
</style>
