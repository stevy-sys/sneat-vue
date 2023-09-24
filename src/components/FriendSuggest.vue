<script setup>
import avatar1 from '@images/avatars/avatar-1.png';
import avatar2 from '@images/avatars/avatar-2.png';
import pages2 from '@images/pages/2.png';
const dialogm1 = ref('')
const dialog = ref(false)
</script>

<template>
    <VCard class="suggest">
        <VImg :src="pages2" />

        <VCardText class="position-relative content">
            <!-- User Avatar -->
            <VAvatar size="75" class="avatar-center" :image="avatar1" />

            <!-- Title, Subtitle & Action Button -->
            <div class="d-flex justify-space-between flex-wrap pt-12">
                <div class="me-2 mb-2">
                    <VCardTitle class="pa-0 name-suggest">
                        <RouterLink to="/profile">Robert Meyer</RouterLink>
                    </VCardTitle>
                    <VCardSubtitle class="text-caption pa-0 profession-suggest">
                        London, UK
                    </VCardSubtitle>
                </div>
                <VBtn class="send-request">Ajouter</VBtn>
            </div>

            <!--  Mutual Friends -->
            <div class="d-flex justify-space-between align-center">
                <span class="font-weight-medium mutual-friends">
                    <v-dialog v-model="dialog" scrollable width="auto" :overlay-opacity="0.1">
                        <template v-slot:activator="{ props }">
                            <span v-bind="props" style="cursor: pointer;">8 amis en commun</span>
                        </template>
                        <v-card class="modal-friends">
                            <v-card-title>Select Country</v-card-title>
                            <v-divider></v-divider>
                            <v-card-text style="height: 300px;">
                                <v-radio-group v-model="dialogm1" column>
                                    <v-radio label="Bahamas, The" value="bahamas"></v-radio>
                                    <v-radio label="Bahrain" value="bahrain"></v-radio>
                                    <v-radio label="Bangladesh" value="bangladesh"></v-radio>
                                    <v-radio label="Barbados" value="barbados"></v-radio>
                                    <v-radio label="Belarus" value="belarus"></v-radio>
                                </v-radio-group>
                            </v-card-text>
                            <v-divider></v-divider>
                            <v-card-actions>
                                <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                                    Close
                                </v-btn>
                                <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                                    Save
                                </v-btn>
                            </v-card-actions>
                        </v-card>
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
</style>
