<template>
    <h1>Suggestion amis</h1>
    <VRow class="friend-suggest-virtual">
        <v-virtual-scroll height="auto" :items="['1']">
            <template v-slot:default="{ item }">
                <FriendSuggest :isLoading="isLoading" />
                <FriendSuggest :isLoading="isLoading" />
                <FriendSuggest :isLoading="isLoading" />
                <FriendSuggest :isLoading="isLoading" />
                <FriendSuggest :isLoading="isLoading" />
                <FriendSuggest :isLoading="isLoading" />
                <FriendSuggest :isLoading="isLoading" />
                <FriendSuggest :isLoading="isLoading" />
                <FriendSuggest :isLoading="isLoading" />

            </template>
        </v-virtual-scroll>
    </VRow>

    <VRow class="mt-10">
        <VCol cols="2" lg="12" md="12" sm="12" xs="12">
            <v-container>
                <v-form class="form-coms" @submit.prevent="addComment">
                    <VTextField class="input-coms" label="Dire bonjour" required></VTextField>
                    <v-btn class="submit-coms" type="submit" color="primary">Publiez</v-btn>
                </v-form>
                <v-col class="other-pub">
                    <v-chip-group multiple selected-class="text-primary">
                        <v-chip>
                            <VIcon size="20" icon="bx-image" />
                        </v-chip>
                    </v-chip-group>
                </v-col>
            </v-container>
        </VCol>
    </VRow>

    <VRow>
        <VCol cols="12" md="6" lg="8">
            <h1>Actualite</h1>
            <!-- status -->
            <VCard class="pub-status">
                <HeaderPub :isLoading="isLoading" type="statut" :avatar="avatar1" :moreList="moreList" />

                <VCardText>
                    <p class="clamp-text mb-0 textedescription">
                        <RouterLink v-if="!isLoading" to="publication" class="text-publication">Lorem ipsum dolor sit amet.
                        </RouterLink>
                        <VSkeletonLoader class="skeleton-text-publication" v-if="isLoading" max-width="500" type="text"
                            animation-speed="250" />
                    </p>
                    <ActionPub :isLoading="isLoading" @emmitShowComment="(value) => { isCardDetailsVisible = value }"
                        :isCardDetailsVisible="isCardDetailsVisible" />
                </VCardText>

                <VExpandTransition>
                    <div class="form-coms-component" v-show="isCardDetailsVisible">
                        <CommentPub @EmitChargeComms="chargeComms" :loading="loading" :items="items" />
                    </div>
                </VExpandTransition>
            </VCard>


            <!-- media publication -->
            <VCard class="mt-3 pub-status">
                <div class="d-flex justify-space-between flex-wrap flex-md-nowrap flex-column flex-md-row">
                    <div>
                        <HeaderPub type="statutMedia" :avatar="avatar1" :moreList="moreList" />

                        <VCardText>
                            <p class="clamp-text mb-0 textedescription">
                                <RouterLink to="publication" class="text-publication">Lorem ipsum dolor sit amet.
                                </RouterLink>
                            </p>
                            <ActionPub @emmitShowComment="(value) => { isCardDetailsVisible = value }"
                                :isCardDetailsVisible="isCardDetailsVisible" />
                        </VCardText>

                        <VExpandTransition>
                            <div class="form-coms-component" v-show="isCardDetailsVisible">
                                <CommentPub @EmitChargeComms="chargeComms" :loading="loading" :items="items" />
                            </div>
                        </VExpandTransition>
                    </div>
                    <VDivider :vertical="$vuetify.display.mdAndUp" />
                    <div class="ma-auto pa-5">
                        <VImg width="250" height="176" :src="eCommerce2" />
                    </div>
                </div>
            </VCard>

            <!-- share une status -->
            <VCard class="mt-3 pub-status ">
                <HeaderPub type="shareStatut" :avatar="avatar1" :moreList="moreList" />
                <VCardText>
                    <p class="clamp-text mb-3 textedescription">
                        Lorem ipsum dolor sit amet.
                    </p>
                    <VCard class="pub-share">
                        <HeaderPub type="shareStatut" :avatar="avatar1" :moreList="moreList" />

                        <VCardText>
                            <p class="clamp-text mb-0 textedescription">
                                Lorem ipsum dolor sit amet.
                            </p>
                        </VCardText>
                    </VCard>
                    <ActionPub @emmitShowComment="(value) => { isCardDetailsVisible = value }"
                        :isCardDetailsVisible="isCardDetailsVisible" />
                </VCardText>

                <VExpandTransition>
                    <div class="form-coms-component" v-show="isCardDetailsVisible">
                        <CommentPub @EmitChargeComms="chargeComms" :loading="loading" :items="items" />
                    </div>
                </VExpandTransition>
            </VCard>

            <!-- publication dans une groupe a partir de actualite -->
            <VCard class="mt-3 pub-status ">
                <HeaderPub type="statut" :avatar="avatar1" :moreList="moreList" />
                <VCardText>
                    <p class="clamp-text mb-3 textedescription">
                        Lorem ipsum dolor sit amet.
                    </p>
                    <VCard class="pub-share">
                        <HeaderPub type="sharePubGroupe" :avatar="avatar1" :moreList="moreList" />

                        <VCardText>
                            <p class="clamp-text mb-0 textedescription">
                                Lorem ipsum dolor sit amet.
                            </p>
                        </VCardText>
                    </VCard>
                    <ActionPub @emmitShowComment="(value) => { isCardDetailsVisible = value }"
                        :isCardDetailsVisible="isCardDetailsVisible" />
                </VCardText>

                <VExpandTransition>
                    <div class="form-coms-component" v-show="isCardDetailsVisible">
                        <CommentPub @EmitChargeComms="chargeComms" :loading="loading" :items="items" />
                    </div>
                </VExpandTransition>
            </VCard>

            <!-- share une status with media  -->
            <VCard class="mt-3 pub-status ">
                <HeaderPub type="shareStatuMedia" :avatar="avatar1" :moreList="moreList" />
                <VCardText>
                    <p class="clamp-text mb-3 textedescription">
                        Lorem ipsum dolor sit amet.
                    </p>
                    <VCard class="pub-share">
                        <div class="d-flex justify-space-between flex-wrap flex-md-nowrap flex-column flex-md-row">
                            <div>
                                <HeaderPub type="shareStatuMedia" :avatar="avatar1" :moreList="moreList" />

                                <VCardText>
                                    <p class="clamp-text mb-0 textedescription">
                                        Lorem ipsum dolor sit amet.
                                    </p>
                                    <!-- <ActionPub @emmitShowComment="(value) => { isCardDetailsVisible = value }"
                                        :isCardDetailsVisible="isCardDetailsVisible" /> -->
                                </VCardText>

                                <!-- <VExpandTransition>
                                    <div class="form-coms-component" v-show="isCardDetailsVisible">
                                        <CommentPub @EmitChargeComms="chargeComms" :loading="loading" :items="items" />
                                    </div>
                                </VExpandTransition> -->
                            </div>
                            <VDivider :vertical="$vuetify.display.mdAndUp" />
                            <div class="ma-auto pa-5">
                                <VImg width="250" height="176" :src="eCommerce2" />
                            </div>
                        </div>
                    </VCard>
                    <ActionPub @emmitShowComment="(value) => { isCardDetailsVisible = value }"
                        :isCardDetailsVisible="isCardDetailsVisible" />
                </VCardText>

                <VExpandTransition>
                    <div class="form-coms-component" v-show="isCardDetailsVisible">
                        <CommentPub @EmitChargeComms="chargeComms" :loading="loading" :items="items" />
                    </div>
                </VExpandTransition>
            </VCard>
        </VCol>

        <VCol cols="12" md="6" lg="4">
            <h1 class="mb-3">Post Trends</h1>
            <VRow class="post-trends-virtual">
                <v-virtual-scroll :height="300" :items="['1']">
                    <template v-slot:default="{ item }">
                        <VCol v-for=" data  in  solidCardData2 " :key="data.icon" cols="12" md="6" lg="12">
                            <VCard class="pub-status">
                                <HeaderPub type="statut" :avatar="avatar1" :moreList="moreList" />

                                <VCardText>
                                    <p class="clamp-text mb-0 textedescription">
                                        Lorem ipsum dolor sit amet.
                                    </p>
                                    <ActionPub @emmitShowComment="(value) => { isCardDetailsVisible = value }"
                                        :isCardDetailsVisible="isCardDetailsVisible" />
                                </VCardText>
                            </VCard>
                        </VCol>
                    </template>
                </v-virtual-scroll>
            </VRow>
            <h1 class="mb-3 mt-10">Group suggestion</h1>
            <VRow class="group-suggest">
                <v-virtual-scroll width="100%" :height="400" :items="['1']">
                    <template v-slot:default="{ item }">
                        <VCol v-for="groupe in data" cols="12" md="6" lg="6">
                            <GroupSuggest />
                        </VCol>
                    </template>
                </v-virtual-scroll>
            </VRow>
        </VCol>
    </VRow>
</template>
<script setup>
import FriendSuggest from '@/components/FriendSuggest.vue'
import GroupSuggest from '@/components/GroupSuggest.vue'
import HeaderPub from '@/components/HeaderPub.vue'
import CommentPub from '@/components/CommentPub.vue'
import ActionPub from '@/components/ActionPub.vue'
import avatar1 from '@images/avatars/avatar-1.png';
import eCommerce2 from '@images/eCommerce/2.png'
import { VSkeletonLoader } from 'vuetify/lib/labs/components.mjs'
const isCardDetailsVisible = ref(false)
// const loading = ref(false)
const isLoading = ref(false)

const chargeComms = (val) => {
    loading.value = !loading.value
    setTimeout(() => (loading.value = !loading.value), 2000)
}
const items = [
    {
        img: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        user: 'John Doe',
        comment: ` I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
    },
    {
        img: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        user: 'Jane Doe',
        comment: `Wish I could come, but I'm out of town this weekend.`,
    }
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

const data = [1, 2, 3, 4, 5, 6]

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

const addComment = () => {

}

const solidCardData2 = [
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

</script>
<style lang="scss">
.member-pricing-bg {
    position: relative;
    background-color: rgba(var(--v-theme-on-surface), var(--v-hover-opacity));
}

.membership-pricing {
    sup {
        inset-block-start: 9px;
    }
}

//pub statut share
.v-card.v-theme--dark.v-card--density-default.v-card--variant-elevated.mt-3.pub-status .pub-share {
    background-color: #232333 !important;
}

.v-card.v-theme--light.v-card--density-default.v-card--variant-elevated.mt-3.pub-status .pub-share {
    background-color: #f5f5f9 !important;
}


// publication user
span.ms-2.avatar-name {
    font-size: 11px;
}


//publication media
.v-card.v-theme--light.v-card--density-default.v-card--variant-elevated.mt-3.pub-media {
    background-color: #696cff;
}

//commentaire
form.v-form.form-coms {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

button.v-btn.v-btn--elevated.v-theme--dark.bg-primary.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated.submit-coms {
    border-radius: 36px;
    margin: 10px;

}

button.v-btn.v-btn--elevated.v-theme--light.bg-primary.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated.submit-coms {
    border-radius: 36px;
    margin: 10px;
}

.v-overlay {
    // background: none;
}

.v-overlay.v-overlay--active.v-theme--light.v-locale--is-ltr.v-dialog.v-dialog--scrollable .v-overlay__scrim {
    pointer-events: auto;
    background: rgb(var(--v-theme-on-surface));
    border-radius: inherit;
    bottom: 0;
    left: 0;
    opacity: 0.2 !important;
    position: fixed;
    right: 0;
    top: 0;
}

.v-card.v-theme--light.pub-status span.ms-2.avatar-name {
    color: #8e9aa5;
}

.v-card.v-theme--light.pub-media span.ms-2.avatar-name {
    color: #8e9aa5;
}

.v-card.v-theme--light.v-card--density-default.v-card--variant-elevated.pub-status {
    background-color: #fff !important;
}

.v-card.v-theme--dark.v-card--density-default.v-card--variant-elevated.pub-status {
    background-color: #2b2c40 !important;
}



.v-card.v-theme--light.v-card--density-default.v-card--variant-elevated.pub-media {
    background-color: #fff !important;
}


.v-col.other-pub {
    margin: 0 !important;
    padding: 0 !important;
}

.other-pub .v-chip-group .v-chip {
    margin: 0 !important;
}

.pub-status a.text-publication {
    color: #a3a4b5;
}

.pub-media a.text-publication {
    color: #a3a4b5 !important;
}


//virtual 

.group-suggest .v-virtual-scroll__item {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.friend-suggest-virtual .v-virtual-scroll__item {
    display: flex;
}




//squeletton
/* Exemple de styles CSS personnalisés */
/* Exemple de styles CSS personnalisés pour le squelette */
.custom-card-skeleton {
    /* Styles pour la carte */
}

.custom-header-skeleton {
    /* Styles pour l'en-tête */
}

.custom-card-text-skeleton {
    /* Styles pour le texte de la carte */
}

.custom-action-skeleton {
    /* Styles pour les actions */
}
</style>
