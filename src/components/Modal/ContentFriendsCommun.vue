<script lang="ts" setup>
import { ref } from 'vue';

const dialogm1 = ref('');
const items = [
    {
        img: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        user: 'John Doe',
        comment: ` I'll be in your `,
    },
    {
        img: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        user: 'John Doe',
        comment: ` I'll be in your `,
    },
    {
        img: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        user: 'John Doe',
        comment: ` I'll be in your `,
    },
    {
        img: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        user: 'John Doe',
        comment: ` I'll be in your `,
    },
    {
        img: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        user: 'John Doe',
        comment: ` I'll be in your `,
    },
    {
        img: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        user: 'John Doe',
        comment: ` I'll be in your `,
    },
    {
        img: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        user: 'Jane Doe',
        comment: `Wish I could come could come`,
    }
]
const loading = ref(false);
const dialog = ref(true)
const chargeComms = (value) => {

}
</script>

<template>
    <v-card class="modal-friends">
        <v-card-title class="text-center">Amis communs</v-card-title>
        <v-divider></v-divider>
        <v-list>
            <div class="text-center btn-charger">
                <a v-if="!loading" @click="chargeComms(true)" class="href">voir precedent</a>
                <v-progress-circular v-if="loading" :loading="loading" indeterminate color="primary"></v-progress-circular>
            </div>
            <div v-for=" item  in  items "
                class="v-list-item v-list-item--density-default v-list-item--two-line v-list-item--variant-text list-coms">
                <div class="v-list-item__prepend">
                    <div class="v-avatar v-avatar--density-default v-avatar--size-default v-avatar--variant-flat">
                        <div class="v-responsive v-img" aria-label="">
                            <div class="v-responsive__sizer" style="padding-bottom: 100%;"></div>
                            <img class="v-img__img v-img__img--cover" :src="item.img" alt="" style="">
                        </div>
                        <span class="v-avatar__underlay"></span>
                    </div>
                </div>
                <div class="v-list-item__content" data-no-activator="">
                    <div class="v-list-item-title">
                        <RouterLink class="link-user" to="/profile">{{ item.user }}</RouterLink>
                    </div>
                    <div class="v-list-item-subtitle">
                        <div data-v-f940dfa7="">
                            {{ item.comment }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center btn-charger">
                <a v-if="!loading" @click="chargeComms(true)" class="href">voir suivant</a>
                <v-progress-circular v-if="loading" :loading="loading" indeterminate color="primary"></v-progress-circular>
            </div>
        </v-list>
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
