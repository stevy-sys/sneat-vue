<script setup>
import { VSkeletonLoader } from 'vuetify/lib/labs/components.mjs';
import avatar1 from '@images/avatars/avatar-1.png';
import ActionPub from './ActionPub.vue';
// import CommentPub from './CommentPub.vue';
import HeaderPub from './HeaderPub.vue';
import SharePub from './SharePub.vue';
import ListComment from './ListComment.vue';

const props = defineProps({
    type: {
        type: String,
        required: false,
    },
    isShare: {
        type: Boolean,
        required: true,
    },
    showComms: {
        type: Boolean,
        required: true,
        default: true
    }
})

const isCardDetailsVisible = ref(false)
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

const isLoading = ref(false)
</script>

<template>
    <div>
        <HeaderPub :isLoading="isLoading" :type="type" :avatar="avatar1" :moreList="moreList" />

        <VCardText>
            <p class="clamp-text mb-0 textedescription">
                <RouterLink v-if="!isLoading" to="/publication" class="text-publication">Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Impedit, porro.
                    amet.
                </RouterLink>
                <VSkeletonLoader class="skeleton-text-publication" v-if="isLoading" max-width="500" type="text"
                    animation-speed="250" />
            </p>

            <SharePub v-if="isShare" :type="type" />

            <ActionPub v-if="showComms" :isLoading="isLoading"
                @emmitShowComment="(value) => { isCardDetailsVisible = value }"
                :isCardDetailsVisible="isCardDetailsVisible" />
        </VCardText>

        <VExpandTransition v-if="showComms">
            <div class="form-coms-component" v-show="isCardDetailsVisible">
                <ListComment />
            </div>
        </VExpandTransition>
    </div>
</template>

<style lang="scss" scoped>
.pub-status a.text-publication {
    color: #a3a4b5;
}
</style>
