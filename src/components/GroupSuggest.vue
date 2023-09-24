<script lang="ts" setup>
import avatar2 from '@images/avatars/avatar-2.png';
import pages2 from '@images/pages/2.png';
import { ref } from 'vue';
import ContentListMembre from './Modal/ContentListMembre.vue';
const dialogm1 = ref('');
const dialog = ref(false);
</script>

<template>
    <VCard class="suggest-groupe">
        <VImg class="img-groupe" :src="pages2" />

        <VCardText class="position-relative content">
            <!-- User Avatar -->
            <!-- Title, Subtitle & Action Button -->
            <div class="d-flex justify-space-between flex-wrap">
                <div class="me-2 mb-2">
                    <VCardTitle class="pa-0 name-groupe-suggest">
                        <RouterLink to="/groupe">Robert Meyer</RouterLink>
                    </VCardTitle>
                    <VCardSubtitle class="text-caption pa-0 description-groupe">
                        London, UK
                    </VCardSubtitle>
                </div>
                <VBtn class="send-request">Rejoindre</VBtn>
            </div>

            <!--  Mutual Friends -->
            <div class="d-flex justify-space-between align-center">
                <span class="font-weight-medium mutual-friends">
                    <v-dialog v-model="dialog" scrollable width="auto" :overlay-opacity="0.1">
                        <template v-slot:activator="{ props }">
                            <span v-bind="props">+8 membres</span>
                        </template>
                        <ContentListMembre />
                    </v-dialog>
                </span>

                <div class="v-avatar-group avatar-commun">
                    <RouterLink to="/profile">
                        <VAvatar class="one-avatar" :image="avatar2" size="30" />
                    </RouterLink>
                    <RouterLink to="/profile">
                        <VAvatar class="one-avatar" :image="avatar2" size="30" />
                    </RouterLink>
                    <RouterLink to="/profile">
                        <VAvatar class="one-avatar" :image="avatar2" size="30" />
                    </RouterLink>
                </div>
            </div>
        </VCardText>
    </VCard>
</template>

<style lang="scss" scoped>
.suggest-groupe button.v-btn.v-btn--elevated.v-theme--light.bg-primary.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated.send-request {
    height: calc(var(--v-btn-height) - 20px);
    width: 67px;
    font-size: 10px;
}

.suggest-groupe button.v-btn.v-btn--elevated.v-theme--dark.bg-primary.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated.send-request {
    height: calc(var(--v-btn-height) - 20px);
    width: 67px;
    font-size: 10px;
}

.suggest-groupe .v-card-text.position-relative.content {
    padding: 0.5rem;
}

.suggest-groupe .v-avatar.v-theme--light.v-avatar--density-default.v-avatar--variant-flat.one-avatar {
    width: 30px !important;
    height: 30px !important;
}

.suggest-groupe .v-avatar.v-theme--dark.v-avatar--density-default.v-avatar--variant-flat.one-avatar {
    width: 30px !important;
    height: 30px !important;
}

.suggest-groupe span.font-weight-medium.mutual-friends {
    font-size: 10px;
    line-height: 10px;
}

.suggest-groupe .v-card-title.pa-0.name-groupe-suggest {
    font-size: 9px;
    font-weight: 600;
}

.suggest-groupe .v-card-subtitle.text-caption.pa-0.description-groupe {
    font-size: 7px !important;
}
</style>
