<template>
    <h1>Suggestion amis</h1>
    <VRow class="friend-suggest-virtual">
        <v-virtual-scroll height="auto" :items="['1']">
            <template v-slot:default="{ item }">
                <Suggest v-for="user in store.getters.getSuggestionFriends.data"
                    :isLoading="store.getters.getSuggestionFriends.isLoading" :user="user" type="friends" />
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
            <VCard v-for="actu in store.getters.getActu" class="mt-3 pub-status">
                <ContentPublication :isLoading="store.getters.getChargementActu"
                    v-if="actu.publication.type == 'simple_pub'" :showComms="true" :isShare="false" :user="actu.user"
                    :time="actu.date" :publication="actu.publication" />
                <div v-else class="d-flex justify-space-between flex-wrap flex-md-nowrap flex-column flex-md-row">
                    <div>
                        <ContentPublication :time="actu.date" :isLoading="store.getters.getChargementActu" :showComms="true"
                            :isShare="false" :user="actu.user" :publication="actu.publication"
                            :type="actu.publication.type" />
                    </div>
                    <VDivider :vertical="$vuetify.display.mdAndUp" />
                    <div class="ma-auto pa-5">
                        <VImg width="250" height="176" :src="eCommerce2" />
                        <!-- <VImg width="250" height="176" src="https://picsum.photos/250/176" /> -->
                    </div>
                </div>
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
import { useStore } from 'vuex';


const store = useStore(); // Obtenez l'instance du store Vuex



const scrollY = ref(0);

const data = [1, 2, 3, 4, 5, 6]
const chargeNewActu = ref(false)
const showSkeletonActu = ref(false)


onMounted(async () => {
    window.addEventListener('scroll', handleScroll);
})


async function handleScroll() {
    scrollY.value = await window.scrollY;
    const endOfPage = await document.documentElement.scrollHeight - window.innerHeight - 100;
    if ((scrollY.value >= endOfPage) && (chargeNewActu.value == false)) {
        chargeNewActu.value = true
        showSkeletonActu.value = await true
        store.dispatch('setActuality')
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
