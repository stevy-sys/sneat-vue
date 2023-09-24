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
        <VCardTitle class="mb-1 header-cart">
            <div>
                <RouterLink to="/profile">
                    <VAvatar size="34" :image="avatar" />
                </RouterLink>
            </div>
            <div class="descript">
                <div>
                    <PublicationDescription :actionType="type" />
                </div>
                <div class="timestamps">4m</div>
            </div>
        </VCardTitle>

        <template #append>
            <div class="me-n3 mt-n8">
                <MoreBtn :menu-list="moreList" />
            </div>
        </template>
    </VCardItem>
</template>

<style lang="scss" scoped>
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
