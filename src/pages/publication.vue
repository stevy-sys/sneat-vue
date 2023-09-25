<script setup>
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
                <VCard class="pub-status" style="" v-for=" data  in  solidCardData " :key="data.icon" :color="data.cardBg">
                    <VCardItem class="pb-3 ">
                        <VCardTitle class="mb-1">
                            <VAvatar size="34" :image="data.avatarImg" />
                            <span class=" ms-2 avatar-name">{{ data.avatarName }} a actualiser une statut</span>
                        </VCardTitle>

                        <template #append>
                            <div class="me-n3 mt-n8">
                                <MoreBtn :menu-list="moreList" />
                            </div>
                        </template>
                    </VCardItem>

                    <VCardText>
                        <p class="clamp-text  mb-0 textedescription">
                            {{ data.text }}
                        </p>
                        <div class="d-flex align-center action-pub">
                            <IconBtn icon="bx-heart" color="#97a2ac" class="me-1" />
                            <span class="text-subtitle-2  me-4">{{ data.likes }}</span>
                            <IconBtn icon="bx-comment" color="#97a2ac" class="me-1" />
                            <span class="text-subtitle-2  me-4">{{ data.likes }}</span>
                            <IconBtn icon="bx-share-alt" color="#97a2ac" class="me-1" />
                            <span class="text-subtitle-2 ">{{ data.share }}</span>
                        </div>
                    </VCardText>
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
                            <div v-for=" item  in  items "
                                class="v-list-item v-list-item--density-default v-list-item--two-line v-list-item--variant-text">
                                <div class="v-list-item__prepend">
                                    <div
                                        class="v-avatar v-avatar--density-default v-avatar--size-default v-avatar--variant-flat">
                                        <div class="v-responsive v-img" aria-label="">
                                            <div class="v-responsive__sizer" style="padding-bottom: 100%;"></div>
                                            <img class="v-img__img v-img__img--cover" :src="item.img" alt="" style="">
                                        </div>
                                        <span class="v-avatar__underlay"></span>
                                    </div>
                                </div>
                                <div class="v-list-item__content" data-no-activator="">
                                    <div class="v-list-item-title">{{ item.user }}</div>
                                    <div class="v-list-item-subtitle">
                                        <div data-v-f940dfa7="">
                                            {{ item.comment }}
                                        </div>
                                    </div>
                                    <div class="v-list-item__footer" data-no-activator="">
                                        <a class="mr-2 jaime-comms" href="#">jaime </a>
                                        <a class="mr-2 modif-comms" href="#">modifer</a>
                                        <a class="mr-2 delete-comms" href="#">suprimer</a>
                                    </div>
                                </div>
                            </div>
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
.v-card.v-theme--dark.v-card--density-default.v-card--variant-elevated.pub-status {
    background-color: #2b2c40 !important;
    box-shadow: none;
}

.v-col-sm-7.v-col-xl-8.v-col-12.publication-show.border-e {
    display: flex;
    height: 100vh;
    justify-content: center;
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
}
</style>
