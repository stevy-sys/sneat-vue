<script setup>
import PublicationDescription from '@/components/PublicationDescription.vue'
import { VSkeletonLoader } from 'vuetify/lib/labs/components.mjs';

const props = defineProps({
    avatar: {
        type: String,
        required: true,
    },
    actionType: {
        type: String,
        required: true,
    },
    isLoading: {
        type: Boolean
    },
    user: {
        type: Object
    },
    type: {
        type: String,
    },
    time: {
        type: String,
    },
    moreList: {
        type: Array
    }
})
const isTooltipVisible = ref(false);

const showTooltip = () => {
    console.log('show')
    isTooltipVisible.value = true;
};


</script>

<template>
    <VCardItem class="pb-3 ">
        <VCardTitle class="mb-1 header-cart">
            <div>
                <RouterLink to="/profile">
                    <VAvatar class="avatar-container" v-if="!props?.isLoading" size="34" :image="props?.avatar" />
                    <VAvatar v-if="props?.isLoading" class="squeleton-avatar">
                        <VSkeletonLoader max-width="500" type="avatar" animation-speed="250" />
                    </VAvatar>
                </RouterLink>
            </div>
            <div class="descript">
                <div>
                    <PublicationDescription :actionType="props?.actionType" :user="props?.user"
                        :isLoading="props?.isLoading" :type="props?.type" />
                </div>
                <div v-if="!props?.isLoading" class="timestamps">{{ time }}</div>
                <div v-if="props?.isLoading" class="timestamps squeleton-timestamps">
                    <VSkeletonLoader max-width="500" type="text" animation-speed="250" />
                </div>
            </div>
        </VCardTitle>

        <template #append>
            <div v-if="!props?.isLoading" class="me-n3 mt-n8">
                <MoreBtn :menu-list="moreList" />
            </div>
            <div v-if="props?.isLoading" class="me-n3 mt-n8 more-btn-skeleton">
                <button v-if="props?.isLoading">
                    <VSkeletonLoader max-width="500" type="text" animation-speed="250" />
                </button>
            </div>
        </template>
    </VCardItem>
</template>

<style lang="scss" scoped>
.tooltip-user {
    padding: 0 !important;
    margin: 0 !important;
}


.me-n3.mt-n8.more-btn-skeleton {
    margin-right: 0px !important;

    button {
        width: 320%;
    }
}

.timestamps.squeleton-timestamps {
    width: 190% !important;
    margin: 0;
}

.v-card-title.mb-1.header-cart {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.v-card-title.mb-1.header-cart .descript .timestamps {
    padding-left: 8px;
    font-size: 10px;
}

.v-card-title.mb-1.header-cart .descript {
    line-height: 12px;
}
</style>
