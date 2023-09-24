<script setup>
const emit = defineEmits(['emmitShowComment'])
defineProps({
    data: {
        type: Object,
        required: true,
    },
    isCardDetailsVisible: {
        type: Boolean
    }
})

const showComment = (value) => {
    let oldValue = value;
    emit('emmitShowComment', !oldValue);
}
</script>

<template>
    <div class="d-flex align-center action-pub">
        <IconBtn icon="bx-heart" color="#97a2ac" class="me-1" />
        <span class="text-subtitle-2  me-4">6K</span>
        <IconBtn @click="showComment(isCardDetailsVisible)" icon="bx-comment" color="#97a2ac" class="me-1" />
        <span class="text-subtitle-2 me-4">2L</span>
        <IconBtn icon="bx-share-alt" color="#97a2ac" class="me-1" />
        <span class="text-subtitle-2 ">9K</span>
    </div>
</template>

<style lang="scss">
</style>
