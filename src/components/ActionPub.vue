<script setup>
import avatar2 from '@images/avatars/avatar-2.png';
import { VSkeletonLoader } from 'vuetify/lib/labs/components.mjs';

const emit = defineEmits(['emmitShowComment'])
defineProps({
    isCardDetailsVisible: {
        type: Boolean
    },
    isLoading: {
        type: Boolean
    },
    countComments: {
        type: Number
    },
})

const showComment = (value) => {
    let oldValue = value;
    emit('emmitShowComment', !oldValue);
}
</script>

<template>
    <div v-if="!isLoading" class="d-flex align-center action-pub">
        <IconBtn icon="bx-heart" color="#97a2ac" class="me-1" />
        <div class="v-avatar-group avatar-commun">
            <VAvatar class="one-avatar" :image="avatar2" size="40" />
            <VAvatar class="one-avatar" :image="avatar2" size="40" />
            <VAvatar class="one-avatar" :image="avatar2" size="40" />
        </div>

        <span class="text-subtitle-2  me-4">6K</span>
        <IconBtn @click="showComment(isCardDetailsVisible)" icon="bx-comment" color="#97a2ac" class="me-1" />
        <span class="text-subtitle-2 me-4">{{ countComments }}</span>
        <IconBtn icon="bx-share-alt" color="#97a2ac" class="me-1" />
        <span class="text-subtitle-2 ">9K</span>
    </div>
    <div v-if="isLoading" class="d-flex align-center action-pub ">
        <div class="footer-skeleton">
            <VSkeletonLoader max-width="1500" type="text" animation-speed="250" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.footer-skeleton {
    width: 40%;
}

.v-avatar.v-theme--light.v-avatar--density-default.v-avatar--variant-flat.one-avatar {
    width: 25px !important;
    height: 25px !important;
}

.v-avatar.v-theme--dark.v-avatar--density-default.v-avatar--variant-flat.one-avatar {
    width: 25px !important;
    height: 25px !important;
}

button.v-btn.v-btn--icon.v-theme--light.v-btn--density-default.v-btn--size-small.v-btn--variant-text.me-1 {
    width: 19px;
}

button.v-btn.v-btn--icon.v-theme--dark.v-btn--density-default.v-btn--size-small.v-btn--variant-text.me-1 {
    width: 19px;
}
</style>
