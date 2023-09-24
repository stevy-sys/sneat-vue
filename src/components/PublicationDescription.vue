<script setup>
import { onMounted } from 'vue';

const props = defineProps({
    actionType: {
        type: String,
    }
})

const text = ref('')

const getType = () => {
    console.log(props.actionType)
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
    <span class="ms-2 avatar-name">{{ text }}</span>
</template>

<style lang="scss">
</style>
