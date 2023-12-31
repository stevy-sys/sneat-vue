<script setup>
import avatar1 from '@images/avatars/avatar-1.png';
import avatar2 from '@images/avatars/avatar-2.png';
import ModalFriendsCommun from '@/components/Modal/ModalFriendsCommun.vue'
import pages2 from '@images/pages/2.png';
import { VSkeletonLoader } from 'vuetify/lib/labs/components.mjs';
import { useStore } from 'vuex';

defineProps({
    isLoading: {
        type: Boolean
    },
    type: {
        type: String
    },
    user: {
        type: Object
    },
    groupe: {
        type: Object
    },
});


const store = useStore(); // Obtenez l'instance du store Vuex
const snackbar = ref(false)
</script>

<template>
    <VCol cols="2" lg="2" md="4" sm="12" xs="12">
        <VCard class="suggest">
            <VImg :src="pages2" />

            <VCardText class="position-relative content">
                <VAvatar v-if="type == 'friends'" size="75" class="avatar-center" :image="avatar1" />
                <div class="d-flex justify-space-between flex-wrap" :class="type == 'friends' ? 'pt-12' : ''">
                    <div :class="isLoading == true ? 'skeleton-name-suggest' : ''" class="me-2 mb-2">
                        <VCardTitle class="pa-0 name-suggest">
                            <RouterLink :to="type == 'friends' ? '/profile/' + user?.id : '/groupe'" v-if="!isLoading">
                                {{ user.name }}
                            </RouterLink>
                            <VSkeletonLoader v-if="isLoading" max-width="500" type="text" animation-speed="250" />
                        </VCardTitle>
                        <VCardSubtitle class="text-caption pa-0 profession-suggest">
                            <span v-if="!isLoading">London, UK</span>
                            <VSkeletonLoader v-if="isLoading" max-width="500" type="text" animation-speed="250" />
                        </VCardSubtitle>
                    </div>
                    <VBtn @click="snackbar = true" v-if="!isLoading" class="send-request"> {{ type == 'friends' ?
                        'Ajouter' : 'Rejoindre' }}</VBtn>
                    <v-snackbar v-model="snackbar">
                        Invitation envoyer a {{ user.name }}
                        <template v-slot:actions>
                            <v-btn color="pink" variant="text" @click="snackbar = false">
                                Annuler
                            </v-btn>
                        </template>
                    </v-snackbar>
                    <div class="skeleton-send-request" v-if="isLoading">
                        <VSkeletonLoader v-if="isLoading" max-width="500" type="text" animation-speed="250" />
                    </div>
                </div>

                <!--  Mutual Friends -->
                <div class="d-flex justify-space-between align-center">
                    <span v-if="!isLoading" class="font-weight-medium mutual-friends">
                        <ModalFriendsCommun :count="user.amis_communs.length" :type="type" :isLoading="isLoading" />
                    </span>
                    <div v-if="isLoading" class="font-weight-medium skeleton-mutual-friends">
                        <VSkeletonLoader max-width="500" type="text" animation-speed="250" />
                    </div>

                    <div v-if="!isLoading" class="v-avatar-group avatar-commun">
                        <RouterLink v-for="commun in user.amis_communs" :to="'/profile/' + commun?.id">
                            <VAvatar class="one-avatar" :image="avatar2" size="30" />
                            <v-tooltip activator="parent" location="bottom">{{ commun.name }}</v-tooltip>
                        </RouterLink>
                        <!-- <RouterLink to="/profile">
                            <VAvatar class="one-avatar" :image="avatar2" size="30" />
                            <v-tooltip activator="parent" location="bottom">Tooltip</v-tooltip>
                        </RouterLink>
                        <RouterLink to="/profile">
                            <VAvatar class="one-avatar" :image="avatar2" size="30" />
                            <v-tooltip activator="parent" location="bottom">Tooltip</v-tooltip>
                        </RouterLink> -->
                    </div>
                    <div v-if="isLoading" class="v-avatar-group skeleton-avatar-commun">
                        <div class="width-skeleton">
                            <VSkeletonLoader max-width="500" type="text" animation-speed="250" />
                        </div>
                    </div>
                </div>
            </VCardText>
        </VCard>
    </VCol>
</template>

<style lang="scss" scoped>
.skeleton-avatar-commun .width-skeleton {
    width: 100% !important;
}

.v-avatar-group.skeleton-avatar-commun {
    width: 45%;
}

//skeleton
.font-weight-medium.skeleton-mutual-friends {
    width: 70px;
}

.skeleton-name-suggest.me-2.mb-2 {
    width: 63px;
}

.skeleton-send-request {
    width: 65px;
}

.suggest .d-flex.align-center.action-pub {
    margin-top: 8px;
}

.suggest .v-card-subtitle.text-caption.pa-0.profession-suggest {
    font-size: 7px !important;
}

.suggest .v-card-text.position-relative.content {
    padding: 0.5rem;
}

.suggest .avatar-center {
    position: absolute;
    border: 3px solid rgb(var(--v-theme-surface));
    inset-block-start: -2rem;
    inset-inline-start: 1rem;
}


.suggest button.v-btn.v-btn--elevated.v-theme--light.bg-primary.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated.send-request {
    height: calc(var(--v-btn-height) - 20px);
    width: 67px;
    font-size: 10px;
}

.suggest button.v-btn.v-btn--elevated.v-theme--dark.bg-primary.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated.send-request {
    height: calc(var(--v-btn-height) - 20px);
    width: 67px;
    font-size: 10px;
}

.suggest span.font-weight-medium.mutual-friends {
    font-size: 10px;
    line-height: 10px;
}

.suggest .v-avatar.v-theme--light.v-avatar--density-default.v-avatar--variant-flat.one-avatar {
    width: 30px !important;
    height: 30px !important;
}

.suggest .v-avatar.v-theme--dark.v-avatar--density-default.v-avatar--variant-flat.one-avatar {
    width: 30px !important;
    height: 30px !important;
}


.suggest .d-flex.align-center.action-pub {
    margin-top: 8px;
}

.suggest .v-card-title.pa-0.name-suggest {
    font-size: 9px;
    font-weight: 600;
}

.v-card.v-theme--light.v-card--density-default.v-card--variant-elevated.suggest {
    width: 152px;
}

.v-card.v-theme--dark.v-card--density-default.v-card--variant-elevated.suggest {
    width: 152px;
}
</style>
