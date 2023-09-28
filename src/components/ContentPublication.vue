<script setup>
import { VSkeletonLoader } from 'vuetify/lib/labs/components.mjs';
import avatar1 from '@images/avatars/avatar-1.png';
import ActionPub from './ActionPub.vue';
// import CommentPub from './CommentPub.vue';
import HeaderPub from './HeaderPub.vue';
import SharePub from './SharePub.vue';
import ListComment from './ListComment.vue';

const props = defineProps({
    user: {
        type: Object,
        required: false,
    },
    publication: {
        type: Object,
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
    },
    isLoading: {
        type: Boolean,
        required: true,
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


</script>

<template>
    <div v-if="props.publication">
        <HeaderPub :user="props?.user" :actionType="props?.publication?.actionType" :isLoading="props?.isLoading"
            :type="props?.publication?.type" :avatar="avatar1" :moreList="moreList" />

        <VCardText>
            <p class="clamp-text mb-0 textedescription">
                <RouterLink v-if="!props?.isLoading" to="/publication" class="text-publication">{{
                    props?.publication?.description
                }}
                </RouterLink>
                <VSkeletonLoader class="skeleton-text-publication" v-if="props?.isLoading" max-width="500" type="text"
                    animation-speed="250" />
            </p>
            <SharePub v-if="props?.publication?.share" :isLoading="props?.isLoading" :user="props?.publication?.share?.user"
                :type="props?.publication?.share?.type" :share="props?.publication?.share" />

            <ActionPub v-if="showComms" :isLoading="props?.isLoading"
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
