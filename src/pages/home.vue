<template>
    <h1>Suggestion amis</h1>
    <VRow>
        <VCol v-for="item in  data " cols="2" lg="2" md="4" sm="12" xs="12">
            <VCard class="suggest">
                <VImg :src="pages2" />

                <VCardText class="position-relative content">
                    <!-- User Avatar -->
                    <VAvatar size="75" class="avatar-center" :image="avatar1" />

                    <!-- Title, Subtitle & Action Button -->
                    <div class="d-flex justify-space-between flex-wrap pt-12">
                        <div class="me-2 mb-2">
                            <VCardTitle class="pa-0 name-suggest">
                                Robert Meyer
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
                                    <span v-bind="props">8 amis en commun</span>
                                </template>
                                <v-card>
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
                            <VAvatar class="one-avatar" :image="avatar2" size="40" />
                            <VAvatar class="one-avatar" :image="avatar2" size="40" />
                            <VAvatar class="one-avatar" :image="avatar2" size="40" />
                        </div>
                    </div>
                </VCardText>
            </VCard>
        </VCol>
    </VRow>


    <h1 class="mt-10">Actualite</h1>
    <VRow>
        <!-- status -->
        <VCol cols="12" md="6" lg="8">
            <VCard class="pub-status" style="" v-for=" data  in  solidCardData " :key="data.icon" :color="data.cardBg">

                <VCardItem class="pb-3 ">
                    <VCardTitle class="mb-1">
                        <VAvatar size="34" :image="data.avatarImg" />
                        <span class="text-white ms-2 avatar-name">{{ data.avatarName }} a avtualiser une statut</span>
                    </VCardTitle>

                    <template #append>
                        <div class="me-n3 mt-n8">
                            <MoreBtn :menu-list="moreList" />
                        </div>
                    </template>
                </VCardItem>

                <VCardText>
                    <p class="clamp-text text-white mb-0 textedescription">
                        {{ data.text }}
                    </p>
                    <div class="d-flex align-center action-pub">
                        <IconBtn icon="bx-heart" color="white" class="me-1" />
                        <span class="text-subtitle-2 text-white me-4">{{ data.likes }}</span>
                        <IconBtn @click="isCardDetailsVisible = !isCardDetailsVisible" icon="bx-comment" color="white"
                            class="me-1" />
                        <span class="text-subtitle-2 text-white me-4">{{ data.likes }}</span>
                        <IconBtn icon="bx-share-alt" color="white" class="me-1" />
                        <span class="text-subtitle-2 text-white">{{ data.share }}</span>
                    </div>
                </VCardText>

                <VExpandTransition>
                    <div v-show="isCardDetailsVisible">
                        <v-list>
                            <div class="text-center btn-charger">
                                <a v-if="!loading" @click="chargeComms(true)" class="href">voir precedent</a>
                                <v-progress-circular v-if="loading" :loading="loading" indeterminate
                                    color="primary"></v-progress-circular>
                            </div>
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
                                </div>
                            </div>
                            <div class="text-center btn-charger">
                                <a v-if="!loading" @click="chargeComms(true)" class="href">voir suivant</a>
                                <v-progress-circular v-if="loading" :loading="loading" indeterminate
                                    color="primary"></v-progress-circular>
                            </div>
                            <v-container>
                                <v-form class="form-coms" @submit.prevent="addComment">
                                    <VTextField class="input-coms" label="Commentaire" required></VTextField>
                                    <v-btn class="submit-coms" type="submit" color="primary">Envoyer</v-btn>
                                </v-form>
                            </v-container>
                        </v-list>
                    </div>
                </VExpandTransition>
            </VCard>

            <!-- media publication -->
            <VCard class="mt-3 pub-media">
                <div class="d-flex justify-space-between flex-wrap flex-md-nowrap flex-column flex-md-row">
                    <div class="ma-auto pa-5">
                        <VImg width="250" height="176" :src="eCommerce2" />
                    </div>

                    <VDivider :vertical="$vuetify.display.mdAndUp" />

                    <div>
                        <VCardItem>
                            <VCardText class="d-flex justify-space-between align-center flex-wrap">
                                <div class="text-no-wrap">
                                    <VAvatar size="34" :image="solidCardData[0].avatarImg" />
                                    <span class="text-white ms-2 avatar-name">{{ solidCardData[0].avatarName }} a partage
                                        une photo</span>
                                </div>
                            </VCardText>
                        </VCardItem>

                        <VCardText>
                            <p class="clamp-text text-white mb-0 textedescription">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, debitis.
                            </p>
                        </VCardText>

                        <VCardActions class="justify-space-between">
                            <div class="d-flex align-center action-pub">
                                <IconBtn icon="bx-heart" color="white" class="me-1" />
                                <span class="text-subtitle-2 text-white me-4">1.5K</span>
                                <IconBtn @click="isCardDetailsVisible = !isCardDetailsVisible" icon="bx-comment"
                                    color="white" class="me-1" />
                                <span class="text-subtitle-2 text-white me-4">55</span>
                                <IconBtn icon="bx-share-alt" color="white" class="me-1" />
                                <span class="text-subtitle-2 text-white">600</span>
                            </div>
                        </VCardActions>
                        <VExpandTransition>
                            <div v-show="isCardDetailsVisible">
                                <v-list>
                                    <div class="text-center btn-charger">
                                        <a v-if="!loading" @click="chargeComms(true)" class="href">voir precedent</a>
                                        <v-progress-circular v-if="loading" :loading="loading" indeterminate
                                            color="primary"></v-progress-circular>
                                    </div>
                                    <div v-for=" item  in  items "
                                        class="v-list-item v-list-item--density-default v-list-item--two-line v-list-item--variant-text">
                                        <div class="v-list-item__prepend">
                                            <div
                                                class="v-avatar v-avatar--density-default v-avatar--size-default v-avatar--variant-flat">
                                                <div class="v-responsive v-img" aria-label="">
                                                    <div class="v-responsive__sizer" style="padding-bottom: 100%;"></div>
                                                    <img class="v-img__img v-img__img--cover" :src="item.img" alt=""
                                                        style="">
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
                                        </div>
                                    </div>
                                    <div class="text-center btn-charger">
                                        <a v-if="!loading" @click="chargeComms(true)" class="href">voir suivant</a>
                                        <v-progress-circular v-if="loading" :loading="loading" indeterminate
                                            color="primary"></v-progress-circular>
                                    </div>
                                    <v-container>
                                        <v-form class="form-coms" @submit.prevent="addComment">
                                            <VTextField class="input-coms" label="Commentaire" required></VTextField>
                                            <v-btn class="submit-coms" type="submit" color="primary">Envoyer</v-btn>
                                        </v-form>
                                    </v-container>
                                </v-list>
                            </div>
                        </VExpandTransition>
                    </div>
                </div>
            </VCard>

            <!-- share une status -->
            <VCard class="mt-3 pub-status " v-for=" data  in  solidCardData " :key="data.icon" :color="data.cardBg">
                <VCardText class="d-flex justify-space-between align-center flex-wrap">
                    <div class="text-no-wrap">
                        <VAvatar size="34" :image="data.avatarImg" />
                        <span class="text-white ms-2 avatar-name">{{ data.avatarName }} a partage une publication de
                            John Doe</span>
                    </div>
                </VCardText>

                <VCardText>
                    <VCard class="mt-3 pub-share" v-for=" data  in  solidCardData " :key="data.icon" :color="data.cardBg">
                        <VCardText class="d-flex justify-space-between align-center flex-wrap">
                            <div class="text-no-wrap">
                                <VAvatar size="34" :image="data.avatarImg" />
                                <span class="text-white ms-2 avatar-name">{{ data.avatarName }}</span>
                            </div>
                        </VCardText>

                        <VCardText>
                            <p class="clamp-text text-white mb-0 textedescription">
                                {{ data.text }}
                            </p>
                            <div class="d-flex align-center action-pub">
                                <IconBtn icon="bx-heart" color="white" class="me-1" />
                                <span class="text-subtitle-2 text-white me-4">{{ data.likes }}</span>

                                <IconBtn icon="bx-share-alt" color="white" class="me-1" />
                                <span class="text-subtitle-2 text-white">{{ data.share }}</span>
                            </div>
                        </VCardText>
                    </VCard>
                    <div class="d-flex align-center action-pub">
                        <IconBtn icon="bx-heart" color="white" class="me-1" />
                        <span class="text-subtitle-2 text-white me-4">{{ data.likes }}</span>
                        <IconBtn @click="isCardDetailsVisible = !isCardDetailsVisible" icon="bx-comment" color="white"
                            class="me-1" />
                        <span class="text-subtitle-2 text-white me-4">55</span>
                        <IconBtn icon="bx-share-alt" color="white" class="me-1" />
                        <span class="text-subtitle-2 text-white">{{ data.share }}</span>
                    </div>
                    <VExpandTransition>
                        <div v-show="isCardDetailsVisible">
                            <v-list>
                                <div class="text-center btn-charger">
                                    <a v-if="!loading" @click="chargeComms(true)" class="href">voir precedent</a>
                                    <v-progress-circular v-if="loading" :loading="loading" indeterminate
                                        color="primary"></v-progress-circular>
                                </div>
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
                                    </div>
                                </div>
                                <div class="text-center btn-charger">
                                    <a v-if="!loading" @click="chargeComms(true)" class="href">voir suivant</a>
                                    <v-progress-circular v-if="loading" :loading="loading" indeterminate
                                        color="primary"></v-progress-circular>
                                </div>
                                <v-container>
                                    <v-form class="form-coms" @submit.prevent="addComment">
                                        <VTextField class="input-coms" label="Commentaire" required></VTextField>
                                        <v-btn class="submit-coms" type="submit" color="primary">Envoyer</v-btn>
                                    </v-form>
                                </v-container>
                            </v-list>
                        </div>
                    </VExpandTransition>
                </VCardText>
            </VCard>

            <!-- publication dans une groupe a partir de actualite -->
            <VCard class="mt-3 pub-status" v-for=" data  in  solidCardData " :key="data.icon" :color="data.cardBg">
                <VCardText class="d-flex justify-space-between align-center flex-wrap">
                    <div class="text-no-wrap">
                        <VAvatar size="34" :image="data.avatarImg" />
                        <span class="text-white ms-2 avatar-name">{{ data.avatarName }} a publiez dans un groupe
                            GASIKARATSIKA</span>
                    </div>
                </VCardText>

                <VCardText>
                    <VCard class="mt-3 pub-share" v-for=" data  in  solidCardData " :key="data.icon" :color="data.cardBg">
                        <VCardText class="d-flex justify-space-between align-center flex-wrap">
                            <div class="text-no-wrap">
                                <VAvatar size="34" :image="data.avatarImg" />
                                <span class="text-white ms-2 avatar-name">{{ data.avatarName }} > GASIKARATSIKA</span>
                            </div>
                        </VCardText>

                        <VCardText>
                            <p class="clamp-text text-white mb-0 textedescription">
                                {{ data.text }}
                            </p>
                            <div class="d-flex align-center action-pub">
                                <IconBtn icon="bx-heart" color="white" class="me-1" />
                                <span class="text-subtitle-2 text-white me-4">{{ data.likes }}</span>

                                <IconBtn icon="bx-share-alt" color="white" class="me-1" />
                                <span class="text-subtitle-2 text-white">{{ data.share }}</span>
                            </div>
                        </VCardText>
                    </VCard>
                </VCardText>
            </VCard>

            <!-- share une status with media  -->
            <VCard class="mt-3 pub-status" v-for=" data  in  solidCardData " :key="data.icon" :color="data.cardBg">
                <VCardText class="d-flex justify-space-between align-center flex-wrap">
                    <div class="text-no-wrap">
                        <VAvatar size="34" :image="data.avatarImg" />
                        <span class="text-white ms-2 avatar-name">{{ data.avatarName }} a partage une photo de
                            John Doe</span>
                    </div>
                </VCardText>

                <VCardText>
                    <VCard class="mt-3 pub-share">
                        <div class="d-flex justify-space-between flex-wrap flex-md-nowrap flex-column flex-md-row">
                            <div class="ma-auto pa-5">
                                <VImg width="250" height="176" :src="eCommerce2" />
                            </div>

                            <VDivider :vertical="$vuetify.display.mdAndUp" />

                            <div>
                                <VCardItem>
                                    <VCardText class="d-flex justify-space-between align-center flex-wrap">
                                        <div class="text-no-wrap">
                                            <VAvatar size="34" :image="solidCardData[0].avatarImg" />
                                            <span class="text-white ms-2 avatar-name">{{ solidCardData[0].avatarName }} a
                                                partage
                                                une photo</span>
                                        </div>
                                    </VCardText>
                                </VCardItem>

                                <VCardText>
                                    <p class="clamp-text text-white mb-0 textedescription">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, debitis.
                                    </p>
                                </VCardText>

                                <VCardActions class="justify-space-between">
                                    <div class="d-flex align-center action-pub">
                                        <IconBtn icon="bx-heart" color="white" class="me-1" />
                                        <span class="text-subtitle-2 text-white me-4">1.5K</span>

                                        <IconBtn icon="bx-share-alt" color="white" class="me-1" />
                                        <span class="text-subtitle-2 text-white">600</span>
                                    </div>
                                </VCardActions>
                            </div>
                        </div>
                    </VCard>
                    <div class="d-flex align-center action-pub">
                        <IconBtn icon="bx-heart" color="white" class="me-1" />
                        <span class="text-subtitle-2 text-white me-4">{{ data.likes }}</span>
                        <IconBtn @click="isCardDetailsVisible = !isCardDetailsVisible" icon="bx-comment" color="white"
                            class="me-1" />
                        <span class="text-subtitle-2 text-white me-4">55</span>
                        <IconBtn icon="bx-share-alt" color="white" class="me-1" />
                        <span class="text-subtitle-2 text-white">{{ data.share }}</span>
                    </div>
                    <VExpandTransition>
                        <div v-show="isCardDetailsVisible">
                            <v-list>
                                <div class="text-center btn-charger">
                                    <a v-if="!loading" @click="chargeComms(true)" class="href">voir precedent</a>
                                    <v-progress-circular v-if="loading" :loading="loading" indeterminate
                                        color="primary"></v-progress-circular>
                                </div>
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
                                    </div>
                                </div>
                                <div class="text-center btn-charger">
                                    <a v-if="!loading" @click="chargeComms(true)" class="href">voir suivant</a>
                                    <v-progress-circular v-if="loading" :loading="loading" indeterminate
                                        color="primary"></v-progress-circular>
                                </div>
                                <v-container>
                                    <v-form class="form-coms" @submit.prevent="addComment">
                                        <VTextField class="input-coms" label="Commentaire" required></VTextField>
                                        <v-btn class="submit-coms" type="submit" color="primary">Envoyer</v-btn>
                                    </v-form>
                                </v-container>
                            </v-list>
                        </div>
                    </VExpandTransition>
                </VCardText>
            </VCard>
        </VCol>
        <VCol cols="12" md="6" lg="4">
            <h1 class="mt-10">Post Trends</h1>
            <VRow>
                <VCol v-for=" data  in  solidCardData2 " :key="data.icon" cols="12" md="6" lg="12">
                    <VCard class="pub-status" :color="data.cardBg">
                        <VCardText class="d-flex justify-space-between align-center flex-wrap">
                            <div class="text-no-wrap">
                                <VAvatar size="34" :image="data.avatarImg" />
                                <span class="text-white ms-2 avatar-name">{{ data.avatarName }}</span>
                            </div>
                        </VCardText>

                        <VCardText>
                            <p class="clamp-text text-white mb-0 textedescription">
                                {{ data.text }}
                            </p>
                            <div class="d-flex align-center action-pub">
                                <IconBtn icon="bx-heart" color="white" class="me-1" />
                                <span class="text-subtitle-2 text-white me-4">{{ data.likes }}</span>

                                <IconBtn icon="bx-share-alt" color="white" class="me-1" />
                                <span class="text-subtitle-2 text-white">{{ data.share }}</span>
                            </div>
                        </VCardText>
                    </VCard>
                </VCol>
            </VRow>
            <h1 class="mt-10">Group suggestion</h1>
            <VRow>
                <VCol cols="12" md="6" lg="6">
                    <VCard class="suggest-groupe">
                        <VImg class="img-groupe" :src="pages2" />

                        <VCardText class="position-relative content">
                            <!-- User Avatar -->
                            <!-- Title, Subtitle & Action Button -->
                            <div class="d-flex justify-space-between flex-wrap">
                                <div class="me-2 mb-2">
                                    <VCardTitle class="pa-0 name-groupe-suggest">
                                        Robert Meyer
                                    </VCardTitle>
                                    <VCardSubtitle class="text-caption pa-0 description-groupe">
                                        London, UK
                                    </VCardSubtitle>
                                </div>
                                <VBtn class="send-request">Rejoindre</VBtn>
                            </div>

                            <!--  Mutual Friends -->
                            <div class="d-flex justify-space-between align-center">
                                <span class="font-weight-medium mutual-friends">+8 Membres</span>

                                <div class="v-avatar-group avatar-commun">
                                    <VAvatar class="one-avatar" :image="avatar2" size="40" />
                                    <VAvatar class="one-avatar" :image="avatar2" size="40" />
                                    <VAvatar class="one-avatar" :image="avatar2" size="40" />
                                </div>
                            </div>
                        </VCardText>
                    </VCard>
                </VCol>
                <VCol cols="12" md="6" lg="6">
                    <VCard class="suggest-groupe">
                        <VImg class="img-groupe" :src="pages2" />

                        <VCardText class="position-relative content">
                            <!-- User Avatar -->
                            <!-- Title, Subtitle & Action Button -->
                            <div class="d-flex justify-space-between flex-wrap">
                                <div class="me-2 mb-2">
                                    <VCardTitle class="pa-0 name-groupe-suggest">
                                        Robert Meyer
                                    </VCardTitle>
                                    <VCardSubtitle class="text-caption pa-0 description-groupe">
                                        London, UK
                                    </VCardSubtitle>
                                </div>
                                <VBtn class="send-request">Rejoindre</VBtn>
                            </div>

                            <!--  Mutual Friends -->
                            <div class="d-flex justify-space-between align-center">
                                <span class="font-weight-medium mutual-friends">+8 Membres</span>

                                <div class="v-avatar-group avatar-commun">
                                    <VAvatar class="one-avatar" :image="avatar2" size="40" />
                                    <VAvatar class="one-avatar" :image="avatar2" size="40" />
                                    <VAvatar class="one-avatar" :image="avatar2" size="40" />
                                </div>
                            </div>
                        </VCardText>
                    </VCard>
                </VCol>
                <VCol cols="12" md="6" lg="6">
                    <VCard class="suggest-groupe">
                        <VImg class="img-groupe" :src="pages2" />

                        <VCardText class="position-relative content">
                            <!-- User Avatar -->
                            <!-- Title, Subtitle & Action Button -->
                            <div class="d-flex justify-space-between flex-wrap">
                                <div class="me-2 mb-2">
                                    <VCardTitle class="pa-0 name-groupe-suggest">
                                        Robert Meyer
                                    </VCardTitle>
                                    <VCardSubtitle class="text-caption pa-0 description-groupe">
                                        London, UK
                                    </VCardSubtitle>
                                </div>
                                <VBtn class="send-request">Rejoindre</VBtn>
                            </div>

                            <!--  Mutual Friends -->
                            <div class="d-flex justify-space-between align-center">
                                <span class="font-weight-medium mutual-friends">+8 Membres</span>

                                <div class="v-avatar-group avatar-commun">
                                    <VAvatar class="one-avatar" :image="avatar2" size="40" />
                                    <VAvatar class="one-avatar" :image="avatar2" size="40" />
                                    <VAvatar class="one-avatar" :image="avatar2" size="40" />
                                </div>
                            </div>
                        </VCardText>
                    </VCard>
                </VCol>
                <VCol cols="12" md="6" lg="6">
                    <VCard class="suggest-groupe">
                        <VImg class="img-groupe" :src="pages2" />

                        <VCardText class="position-relative content">
                            <!-- User Avatar -->
                            <!-- Title, Subtitle & Action Button -->
                            <div class="d-flex justify-space-between flex-wrap">
                                <div class="me-2 mb-2">
                                    <VCardTitle class="pa-0 name-groupe-suggest">
                                        Robert Meyer
                                    </VCardTitle>
                                    <VCardSubtitle class="text-caption pa-0 description-groupe">
                                        London, UK
                                    </VCardSubtitle>
                                </div>
                                <VBtn class="send-request">Rejoindre</VBtn>
                            </div>

                            <!--  Mutual Friends -->
                            <div class="d-flex justify-space-between align-center">
                                <span class="font-weight-medium mutual-friends">+8 Membres</span>

                                <div class="v-avatar-group avatar-commun">
                                    <VAvatar class="one-avatar" :image="avatar2" size="40" />
                                    <VAvatar class="one-avatar" :image="avatar2" size="40" />
                                    <VAvatar class="one-avatar" :image="avatar2" size="40" />
                                </div>
                            </div>
                        </VCardText>
                    </VCard>
                </VCol>
            </VRow>
        </VCol>
    </VRow>
</template>
<script setup>
import avatar1 from '@images/avatars/avatar-1.png';
import avatar2 from '@images/avatars/avatar-2.png';
import pages2 from '@images/pages/2.png';
import eCommerce2 from '@images/eCommerce/2.png'
const isCardDetailsVisible = ref(false)
const loading = ref(false)

const dialogm1 = ref('')
const dialog = ref(false)

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
<style lang="scss" scoped>
// suggestion amis
.avatar-center {
    position: absolute;
    border: 3px solid rgb(var(--v-theme-surface));
    inset-block-start: -2rem;
    inset-inline-start: 1rem;
}

.member-pricing-bg {
    position: relative;
    background-color: rgba(var(--v-theme-on-surface), var(--v-hover-opacity));
}

.membership-pricing {
    sup {
        inset-block-start: 9px;
    }
}

.v-card-title.pa-0.name-suggest[data-v-f940dfa7] {
    font-size: 9px;
    font-weight: 600;
}

.v-card-subtitle.text-caption.pa-0.profession-suggest {
    font-size: 7px !important;
}

button.v-btn.v-btn--elevated.v-theme--light.bg-primary.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated.send-request {
    height: calc(var(--v-btn-height) - 20px);
    width: 67px;
    font-size: 10px;
}

button.v-btn.v-btn--elevated.v-theme--dark.bg-primary.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated.send-request {
    height: calc(var(--v-btn-height) - 20px);
    width: 67px;
    font-size: 10px;
}

.v-card-text.position-relative.content {
    padding: 0.5rem;
}

span.font-weight-medium.mutual-friends {
    font-size: 10px;
    line-height: 10px;
}

.v-avatar.v-theme--light.v-avatar--density-default.v-avatar--variant-flat.one-avatar {
    width: 30px !important;
    height: 30px !important;
}

.v-avatar.v-theme--dark.v-avatar--density-default.v-avatar--variant-flat.one-avatar {
    width: 30px !important;
    height: 30px !important;
}

// .v-card.v-theme--dark.v-card--density-default.v-card--variant-elevated.mt-3.pub-media-share {
//     background-color: #696cff;
// }

//pub statut share
.v-card.v-theme--dark.v-card--density-default.v-card--variant-elevated.mt-3.pub-share {
    background-color: #232333 !important;
}

// publication user
span.text-white.ms-2.avatar-name {
    font-size: 11px;
}

.v-card.v-theme--dark.v-card--density-default.v-card--variant-elevated.pub-status {
    background-color: #2b2c40 !important;
}

.d-flex.align-center.action-pub {
    margin-top: 8px;
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

.v-overlay__scrim {
    pointer-events: auto;
    background: rgb(var(--v-theme-on-surface));
    border-radius: inherit;
    bottom: 0;
    left: 0;
    opacity: 0.3 !important;
    position: fixed;
    right: 0;
    top: 0;
}
</style>
