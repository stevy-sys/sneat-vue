<script lang="ts" setup>
import avatar1 from '@images/avatars/avatar-1.png';
import eCommerce2 from '@images/eCommerce/2.png'
import HeaderPub from './HeaderPub.vue';
defineProps({
    type: {
        type: String,
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
        <div v-if="type == 'shareStatuMedia'"
            class="d-flex justify-space-between flex-wrap flex-md-nowrap flex-column flex-md-row">
            <div>
                <HeaderPub :type="type" :avatar="avatar1" :moreList="moreList" />

                <VCardText>
                    <p class="clamp-text mb-0 textedescription">
                        Lorem ipsum dolor sit amet.
                    </p>
                </VCardText>
            </div>
            <VDivider :vertical="$vuetify.display.mdAndUp" />
            <div class="ma-auto pa-5">
                <VImg width="250" height="176" :src="eCommerce2" />
            </div>
        </div>
        <div v-if="(type == 'shareStatut') || (type == 'sharePubGroupe')">
            <HeaderPub :type="type" :avatar="avatar1" :moreList="moreList" />

            <VCardText>
                <p class="clamp-text mb-0 textedescription">
                    Lorem ipsum dolor sit amet.
                </p>
            </VCardText>
        </div>
    </VCard>
</template>

<style lang="scss">
</style>
