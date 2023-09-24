<script lang="ts" setup>
import { ref } from 'vue';
const dialog = ref(true)
const addComment = (value) => {

}
</script>

<template>
    <v-card class="modal-friends">
        <v-card-title class="text-center">Modifier commentaire</v-card-title>
        <v-divider></v-divider>
        <div class="v-list-item v-list-item--density-default v-list-item--two-line v-list-item--variant-text list-coms">
            <div class="v-list-item__prepend">
                <div class="v-avatar v-avatar--density-default v-avatar--size-default v-avatar--variant-flat">
                    <div class="v-responsive v-img" aria-label="">
                        <div class="v-responsive__sizer" style="padding-bottom: 100%;"></div>
                        <img class="v-img__img v-img__img--cover" src="https://cdn.vuetifyjs.com/images/lists/1.jpg" alt=""
                            style="">
                    </div>
                    <span class="v-avatar__underlay"></span>
                </div>
            </div>
            <div class="v-list-item__content" data-no-activator="">
                <div class="v-list-item-title">
                    <RouterLink class="link-user" to="/profile">John Doe</RouterLink>
                </div>
                <div class="v-list-item-subtitle">
                    <div data-v-f940dfa7="">
                        commentaire
                    </div>
                </div>
            </div>
        </div>
        <v-divider></v-divider>
        <v-container>
            <v-form class="form-coms" @submit.prevent="addComment">
                <VTextField class="input-coms" label="commentaire" required></VTextField>
            </v-form>
            <v-col class="other-pub">
                <v-chip-group multiple selected-class="text-primary">
                    <v-chip>
                        <VIcon size="20" icon="bx-image" />
                    </v-chip>
                </v-chip-group>
            </v-col>
        </v-container>
        <v-divider></v-divider>
        <v-card-actions class="text-center">
            <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                Close
            </v-btn>
            <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                Save
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<style lang="scss" scoped>
.v-card-actions.text-center {
    justify-content: space-between;
}
</style>
