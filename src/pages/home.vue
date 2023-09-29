<template>
    <h1>Suggestion amis</h1>
    <VRow class="friend-suggest-virtual">
        <v-virtual-scroll height="auto" :items="['1']">
            <template v-slot:default="{ item }">
                <Suggest type="friends" />
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
            <VCard v-for="actu in actuality" class="mt-3 pub-status">
                <transition mode="out-in" enter-active-class="animate__animated animate__fadeInDown"
                    leave-active-class="animate__animated animate__fadeOut">
                    <ContentPublication :isLoading="isLoading" v-if="actu.publication.type == 'simple_pub'"
                        :showComms="true" :isShare="false" :user="actu.user" :publication="actu.publication" />
                    <div v-else class="d-flex justify-space-between flex-wrap flex-md-nowrap flex-column flex-md-row">
                        <div>
                            <ContentPublication :isLoading="isLoading" :showComms="true" :isShare="false" :user="actu.user"
                                :publication="actu.publication" :type="actu.publication.type" />
                        </div>
                        <VDivider :vertical="$vuetify.display.mdAndUp" />
                        <div class="ma-auto pa-5">
                            <VImg width="250" height="176" :src="eCommerce2" />
                            <VImg width="250" height="176" src="https://picsum.photos/250/176" />
                        </div>
                    </div>

                </transition>
            </VCard>

        </VCol>

        <VCol cols="12" md="6" lg="4">
            <h1 class="mb-3">Post Trends</h1>
            <VRow class="post-trends-virtual">
                <v-virtual-scroll :height="300" :items="['1']">
                    <template v-slot:default="{ item }">
                        <VCol v-for=" data  in  solidCardData2 " :key="data.icon" cols="12" md="6" lg="12">
                            <VCard class="pub-status">
                                <!-- <ContentPublication :showComms="false" :isShare="false" type="statut" /> -->
                            </VCard>
                        </VCol>
                    </template>
                </v-virtual-scroll>
            </VRow>
            <h1 class="mb-3 mt-10">Group suggestion</h1>
            <VRow class="group-suggest">
                <v-virtual-scroll width="100%" :height="400" :items="['1']">
                    <template v-slot:default="{ item }">
                        <VCol v-for="groupe in data" cols="12" md="6" lg="6" class="group-suggest">
                            <!-- <Suggest type="groupe" /> -->
                        </VCol>
                    </template>
                </v-virtual-scroll>
            </VRow>
        </VCol>
    </VRow>
</template>
<script setup>
import Suggest from '@/components/Suggest.vue'
import avatar1 from '@images/avatars/avatar-1.png';
import eCommerce2 from '@images/eCommerce/2.png'
import ContentPublication from '@/components/ContentPublication.vue'
import { getAllActualite } from '@/services/Actualite'
import { onMounted } from 'vue';
// import { useStore } from 'vuex';


// const store = useStore(); // Obtenez l'instance du store Vuex
// store.dispatch('init')


const isLoading = ref(false)
const actuality = ref([])

const scrollY = ref(0);
const nexPage = ref(false);

const data = [1, 2, 3, 4, 5, 6]
const chargeNewActu = ref(false)
const showSkeletonActu = ref(false)

const refactData = (response) => {
    let donnee = [];
    response.data.data.forEach(element => {
        let data = {
            user: {
                id: "",
                nom: "dfsdf",
                pdp: ""
            },
            publication: {
                type: "",
                id: "",
                description: "",
                media: [],
                share: null,
                countcommentaire: "",
                countReaction: "",
                commentaire: [
                    {
                        user: {
                            id: "",
                            nom: "",
                            pdp: ""
                        },
                        description: "",
                        countReaction: ""
                    }
                ]
            },
            date: ""
        }

        data.user.id = element.actualable.user.id
        data.user.nom = element.actualable.user.name
        data.user.pdp = element.actualable.user.media

        data.publication.actionType = "statut"
        data.publication.id = element.actualable.id
        data.publication.description = element.actualable.description
        data.publication.media = element.actualable.media

        if (data.publication.media.length == 0) {
            data.publication.type = 'simple_pub'
        } else {
            data.publication.type = 'media_pub'
        }

        if (element.actualable.publicable_type == "App\\Models\\Shares") {
            data.publication.share = {
                type: "statut",
                actionType: "statut",
                user: {
                    id: element.actualable.publicable.sharable.user.id,
                    nom: element.actualable.publicable.sharable.user.name,
                    pdp: element.actualable.publicable.sharable.user.media
                },
                id_publication: element.actualable.publicable.sharable.id,
                description: element.actualable.publicable.sharable.description,
                countReaction: element.actualable.publicable.sharable.countReaction,
                media: element.actualable.publicable.sharable.media,
            }
            data.publication.actionType = "share_statut"
            if (data.publication.share.media.length == 0) {
                data.publication.share.type = 'simple_pub'
            } else {
                data.publication.share.type = 'media_pub'
                data.publication.share.actionType = "statutMedia"
                data.publication.actionType = "shareStatuMedia"
            }

        }

        if (element.actualable.publicable_type == 'App\\Models\\Group') {
            data.publication.description = null;
            data.publication.media = [];
            data.publication.share = {
                type: "statut",
                actionType: "sharePubGroupe",
                user: {
                    id: element.actualable.user.id,
                    nom: element.actualable.user.name,
                    pdp: element.actualable.user.media
                },
                id_publication: element.actualable_id,
                description: element.actualable.description,
                countReaction: element.actualable.countReaction,
                media: element.actualable.media,
                groupe: {
                    name: element.actualable.publicable.name,
                    id: element.actualable.publicable.id
                }
            }

            data.publication.share.groupe.id = element.actualable.publicable.id
            data.publication.share.groupe.name = element.actualable.publicable.name

            data.publication.share.user.id = element.actualable.user.id
            data.publication.share.user.nom = element.actualable.user.name
            data.publication.share.user.pdp = element.actualable.user.media
            data.publication.share.id_publication = element.actualable_id
            data.publication.share.description = element.actualable.description
            data.publication.share.media = element.actualable.media

            data.publication.actionType = "actu_group"

            if (data.publication.share.media.length == 0) {
                data.publication.share.type = 'simple_pub'
            } else {
                data.publication.share.type = 'simple_pub'
                data.publication.actionType = "sharePubMediaGroupe"
                data.publication.share.actionType = 'sharePubGroupe'
            }
            data.publication.share.countReaction = element.actualable.countReaction
        }

        data.publication.countcommentaire = element.actualable.countCommentaire
        data.publication.countReaction = element.actualable.countReaction
        data.publication.commentaire = element.actualable.commentaires,
            data.date = element.created_at

        donnee.push(data)
    });
    return donnee
}

onMounted(async () => {
    window.addEventListener('scroll', handleScroll);
    isLoading.value = true
    const response = await getAllActualite();
    nexPage.value = response.data.data.next_page_url
    let donnee = refactData(response)
    actuality.value = donnee
    setTimeout(() => {
        isLoading.value = false
    }, 4000);
})


async function handleScroll() {
    scrollY.value = await window.scrollY;
    const endOfPage = await document.documentElement.scrollHeight - window.innerHeight - 100;
    if ((scrollY.value >= endOfPage) && (chargeNewActu.value == false)) {
        chargeNewActu.value = true
        showSkeletonActu.value = await true
        const response = await getAllActualite(nexPage.value);
        nexPage.value = await response.data.data.next_page_url
        let donnee = refactData(response)
        donnee.forEach(element => {
            actuality.value.push(element)
        })
        setTimeout(() => {
            chargeNewActu.value = false
            showSkeletonActu.value = false
        }, 4000);
    }
}

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


//publication media

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



.v-card.v-theme--light.v-card--density-default.v-card--variant-elevated.pub-status {
    background-color: #fff !important;
}

.v-card.v-theme--dark.v-card--density-default.v-card--variant-elevated.pub-status {
    background-color: #2b2c40 !important;
}




.v-col.other-pub {
    margin: 0 !important;
    padding: 0 !important;
}

.other-pub .v-chip-group .v-chip {
    margin: 0 !important;
}



//virtual scroll
.group-suggest .v-virtual-scroll__item {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.friend-suggest-virtual .v-virtual-scroll__item {
    display: flex;
}



.v-col-md-6.v-col-lg-6.v-col-12.group-suggest {
    margin: 0;
    padding: 0;
}
</style>
