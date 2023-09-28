<script setup>
import { onMounted } from 'vue';
import { VSkeletonLoader } from 'vuetify/lib/labs/components.mjs';

const props = defineProps({
    type: {
        type: String,
    },
    actionType: {
        type: String,
        required: true,
    },
    isLoading: {
        type: Boolean
    },
    user: {
        type: Object,
        default: null
    }
})

const text = ref('')

const getType = () => {
    switch (props.actionType) {
        case 'statut':
            text.value = `${props?.user?.nom} a actualise un statut`
            break;
        case 'actu_group':
            text.value = `${props?.user?.nom} a publiez une statut dans une groupe`
            break;
        case 'statutMedia':
            text.value = `${props?.user?.nom} a actualise un photo`
            break;
        case 'share_statut':
            text.value = props?.user?.nom + ' a partage un statut de Jane Doe'
            break;
        case 'shareStatuMedia':
            text.value = props?.user?.nom + ' a partage un photo de Jane Doe'
            break;
        case 'sharePubGroupe':
            text.value = props?.user?.nom + ' John Doe > Gasikaratsika'
            break;
        case 'sharePubMediaGroupe':
            text.value = props?.user?.nom + ' John Doe a ubliez une photo dans Gasikaratsika'
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
    <span v-if="!props.isLoading" class="ms-2 avatar-name" v-html="text"></span>
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

span.name_groupe {
    font-weight: 900;
}
</style>
