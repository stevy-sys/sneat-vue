<script setup>
import ContentPublication from '@/components/ContentPublication.vue';
import OneComment from '@/components/OneComment.vue';
import avatar1 from '@images/avatars/avatar-1.png';
const loading = ref(false)
const chargeComms = (val) => {
    loading.value = !loading.value
    setTimeout(() => (loading.value = !loading.value), 2000)
}

const addComment = () => {

}
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
const solidCardData = [
    {
        cardBg: '#696cff',
        title: 'Twitter Card',
        icon: 'bxl-twitter',
        text: '"Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."',
        avatarImg: avatar1,
        avatarName: 'Mary Vaughn',
        likes: '1.2k',
        share: '80',
    },
]

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
    <VCard>
        <VRow no-gutters>
            <VCol cols="12" sm="7" xl="8" class="publication-show"
                :class="$vuetify.display.smAndUp ? 'border-e' : 'border-b'">
                <VCard class="pub-status">
                    <ContentPublication :showComms="false" :isShare="true" type="shareStatuMedia" />
                </VCard>
            </VCol>

            <VCol class="publication-show" cols="12" sm="5" xl="4"
                :class="$vuetify.display.smAndUp ? 'border-e' : 'border-b'">

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
            </VCol>
        </VRow>
    </VCard>
</template>

<style lang="scss" scoped>
.v-col-sm-7.v-col-xl-8.v-col-12.publication-show.border-e {
    display: flex;
    height: 100vh;
    // justify-content: center;
    align-items: center;
}

span.ms-2.avatar-name {
    font-size: 11px;
}

.v-col-sm-5.v-col-xl-4.v-col-12.publication-show.border-e {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
}

.v-card.v-theme--light.pub-status span.ms-2.avatar-name {
    color: #8e9aa5;
}

.v-card.v-theme--light.v-card--density-default.v-card--variant-elevated.pub-status {
    background-color: #fff !important;
    box-shadow: none;
}

.v-card.v-theme--dark.v-card--density-default.v-card--variant-elevated.pub-status {
    background-color: #2b2c40 !important;
    box-shadow: none;
    width: 100%;
}

.v-card.v-theme--light.v-card--density-default.v-card--variant-elevated.pub-status {
    background-color: #fff !important;
    box-shadow: none;
    width: 100%;
}
</style>
