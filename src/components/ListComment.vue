<script lang="ts" setup>
import OneComment from './OneComment.vue';

const items = [
    {
        img: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        user: 'John Doe',
        comment: ` I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
    },
    {
        img: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        user: 'John Doe',
        comment: ` I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
    },
    {
        img: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        user: 'John Doe',
        comment: ` I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
    },
    {
        img: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        user: 'Jane Doe',
        comment: `Wish I could come, but I'm out of town this weekend.`,
    },
    {
        img: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        user: 'Jane Doe',
        comment: `Wish I could come, but I'm out of town this weekend.`,
    },
    {
        img: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        user: 'Jane Doe',
        comment: `Wish I could come, but I'm out of town this weekend.`,
    },
    {
        img: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        user: 'Jane Doe',
        comment: `Wish I could come, but I'm out of town this weekend.`,
    },
    {
        img: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        user: 'Jane Doe',
        comment: `Wish I could come, but I'm out of town this weekend.`,
    }
]

const addComment = () => {

}
</script>

<template>
    <v-list>
        <!-- <div class="text-center btn-charger">
        <a v-if="!loading" @click="chargeComms(true)" class="href">voir precedent</a>
        <v-progress-circular v-if="loading" :loading="loading" indeterminate
            color="primary"></v-progress-circular>
        </div> -->
        <v-virtual-scroll width="100%" :height="400" :items="['1']">
            <template v-slot:default="{ item }">
                <OneComment v-for=" (item, key)  in  items " :id="key" :img="item.img" :user="item.user"
                    :comment="item.comment" />
            </template>
        </v-virtual-scroll>

        <!-- <div class="text-center btn-charger">
        <a v-if="!loading" @click="chargeComms(true)" class="href">voir suivant</a>
        <v-progress-circular v-if="loading" :loading="loading" indeterminate
            color="primary"></v-progress-circular>
        </div> -->
        <v-container>
            <v-form class="form-coms" @submit.prevent="addComment">
                <VTextField class="input-coms" label="Commentaire" required></VTextField>
                <v-btn class="submit-coms mt-5" type="submit" color="primary">Envoyer</v-btn>
            </v-form>
        </v-container>
    </v-list>
</template>

<style lang="scss">
</style>
