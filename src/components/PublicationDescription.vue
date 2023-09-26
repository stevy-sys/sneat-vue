<script setup>
import { onMounted } from 'vue';
import { VSkeletonLoader } from 'vuetify/lib/labs/components.mjs';

const props = defineProps({
    actionType: {
        type: String,
    },
    isLoading: {
        type: Boolean
    }
})

const text = ref('')

const getType = () => {
    switch (props.actionType) {
        case 'statut':
            text.value = 'John Doe a actualise un statut'
            break;
        case 'statutMedia':
            text.value = 'John Doe a actualise un photo'
            break;
        case 'shareStatut':
            text.value = 'John Doe a partage un statut de Jane Doe'
            break;
        case 'shareStatuMedia':
            text.value = 'John Doe a partage un photo de Jane Doe'
            break;
        case 'sharePubGroupe':
            text.value = 'John Doe > Gasikaratsika'
            break;

        default:
            break;
    }
}
onMounted(() => {
    getType()
})

</script>

<template>
    <span v-if="!props.isLoading" class="ms-2 avatar-name">{{ text }}</span>
    <span v-if="props.isLoading" class="ms-2 skeleton-descirption">
        <VSkeletonLoader max-width="500" type="text" animation-speed="250" />
    </span>
</template>

<style lang="scss" scoped>
span.ms-2.skeleton-descirption {
    width: 500% !important;
    display: block;
}

// publication user
span.ms-2.avatar-name {
    font-size: 11px;
}
</style>
