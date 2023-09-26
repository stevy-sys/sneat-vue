<script  setup>
import ContentDeleteCommentaire from './Modal/ContentDeleteCommentaire.vue';
import ContentUpdateCommentaire from './Modal/ContentUpdateCommentaire.vue';

defineProps({
    id: {
        type: Number,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },

})
const dialog = ref(false);
const dialog2 = ref(false);
</script>

<template>
    <div class="v-list-item v-list-item--density-default v-list-item--two-line v-list-item--variant-text list-coms">
        <div class="v-list-item__prepend">
            <div class="v-avatar v-avatar--density-default v-avatar--size-default v-avatar--variant-flat">
                <div class="v-responsive v-img" aria-label="">
                    <div class="v-responsive__sizer" style="padding-bottom: 100%;"></div>
                    <img class="v-img__img v-img__img--cover" :src="img" alt="" style="">
                </div>
                <span class="v-avatar__underlay"></span>
            </div>
        </div>
        <div class="v-list-item__content" data-no-activator="">
            <div class="v-list-item-title">
                <RouterLink class="link-user" to="/profile">{{ user }}</RouterLink>
            </div>
            <div class="v-list-item-subtitle">
                <div data-v-f940dfa7="">
                    {{ comment }}
                </div>
            </div>
            <div class="v-list-item__footer" data-no-activator="">
                <a class="mr-2 jaime-comms" href="#">jaime </a>
                <v-dialog v-model="dialog" scrollable width="auto" :overlay-opacity="0.1">
                    <template v-slot:activator="{ props }">
                        <span v-bind="props" style="cursor: pointer;" class="mr-2 modif-comms">modifer</span>
                    </template>
                    <ContentUpdateCommentaire :id="id" />
                </v-dialog>
                <v-dialog v-model="dialog2" scrollable width="auto" :overlay-opacity="0.1">
                    <template v-slot:activator="{ props }">
                        <span v-bind="props" style="cursor: pointer;" class="mr-2 modif-comms">suprimer</span>
                    </template>
                    <ContentDeleteCommentaire :id="id" />
                </v-dialog>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
</style>
