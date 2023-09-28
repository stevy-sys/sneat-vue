<script lang="ts" setup>
import avatar1 from '@images/avatars/avatar-1.png';
import eCommerce2 from '@images/eCommerce/2.png'
import HeaderPub from './HeaderPub.vue';
import { VSkeletonLoader } from 'vuetify/lib/labs/components.mjs';
const props = defineProps({
    type: {
        type: String,
        required: false,
    },
    actionType: {
        type: String,
        required: false,
    },
    isLoading: {
        type: Boolean,
        required: false,
    },
    share: {
        type: Object,
        required: false,
    },
    user: {
        type: Object,
        required: false,
    }
})
const moreList = [
    {
        title: 'Share',
        value: 'Share',
    },
    {
        title: 'Refresh',
        value: 'Refresh',
    },
    {
        title: 'Update',
        value: 'Update',
    },
]
</script>

<template>
    <VCard class="pub-share">
        <div v-if="props?.type == 'media_pub'"
            class="d-flex justify-space-between flex-wrap flex-md-nowrap flex-column flex-md-row">
            <div>
                <HeaderPub :isLoading="props?.isLoading" :user="props?.share?.user" :actionType="props?.share?.actionType"
                    :avatar="avatar1" :moreList="moreList" />
                <VCardText>
                    <RouterLink v-if="!props?.isLoading" to="/publication" class="text-publication">
                        {{ props?.share?.description }}
                    </RouterLink>
                    <VSkeletonLoader class="skeleton-text-publication" v-if="props?.isLoading" max-width="500" type="text"
                        animation-speed="250" />
                </VCardText>
            </div>
            <VDivider :vertical="$vuetify.display.mdAndUp" />
            <div class="ma-auto pa-5">
                <VImg width="250" height="176" :src="eCommerce2" />
            </div>
        </div>
        <div v-if="props?.type == 'simple_pub'">
            <HeaderPub :isLoading="props?.isLoading" :actionType="props?.share?.actionType" :user="props?.share?.user"
                :type="props?.share?.type" :avatar="avatar1" :moreList="moreList" />

            <VCardText>
                <RouterLink v-if="!props?.isLoading" to="/publication" class="text-publication">
                    {{ props?.share?.description }}
                </RouterLink>
                <!-- <p class="clamp-text mb-0 textedescription">
                    {{ props?.share?.description }}
                </p> -->
                <VSkeletonLoader class="skeleton-text-publication" v-if="props?.isLoading" max-width="500" type="text"
                    animation-speed="250" />
            </VCardText>
        </div>
    </VCard>
</template>

<style lang="scss" scoped>
.v-card.v-theme--dark.v-card--density-default.v-card--variant-elevated.mt-3.pub-status .pub-share {
    background-color: #232333 !important;
}

.v-card.v-theme--light.v-card--density-default.v-card--variant-elevated.mt-3.pub-status .pub-share {
    background-color: #f5f5f9 !important;
}
</style>
