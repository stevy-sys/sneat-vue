<template>
    <v-list>
        <!-- <div class="text-center btn-charger">
            <a v-if="!loading" @click="chargeComms(true)" class="href">voir precedent</a>
            <v-progress-circular v-if="loading" :loading="loading" indeterminate color="primary"></v-progress-circular>
        </div> -->
        <v-virtual-scroll class="scroll-container" @scroll="handleScroll" width="100%" :height="100" :items="['1']">
            <template v-slot:default="{ item }">
                <div v-for=" item  in  items "
                    class="v-list-item v-list-item--density-default v-list-item--two-line v-list-item--variant-text list-coms">
                    <div class="v-list-item__prepend">
                        <div class="v-avatar v-avatar--density-default v-avatar--size-default v-avatar--variant-flat">
                            <div class="v-responsive v-img" aria-label="">
                                <div class="v-responsive__sizer" style="padding-bottom: 100%;"></div>
                                <img class="v-img__img v-img__img--cover" :src="item.img" alt="" style="">
                            </div>
                            <span class="v-avatar__underlay"></span>
                        </div>
                    </div>
                    <div class="v-list-item__content" data-no-activator="">
                        <div class="v-list-item-title">
                            <RouterLink class="link-user" to="/profile">{{ item.user }}</RouterLink>
                        </div>
                        <div class="v-list-item-subtitle">
                            <div data-v-f940dfa7="">
                                {{ item.comment }}
                            </div>
                        </div>
                        <div class="v-list-item__footer" data-no-activator="">
                            <a class="mr-2 jaime-comms" href="#">jaime </a>
                            <v-dialog v-model="dialog" scrollable width="auto" :overlay-opacity="0.1">
                                <template v-slot:activator="{ props }">
                                    <span v-bind="props" style="cursor: pointer;" class="mr-2 modif-comms">modifer</span>
                                </template>
                                <ContentUpdateCommentaire />
                            </v-dialog>
                            <v-dialog v-model="dialog2" scrollable width="auto" :overlay-opacity="0.1">
                                <template v-slot:activator="{ props }">
                                    <span v-bind="props" style="cursor: pointer;" class="mr-2 modif-comms">suprimer</span>
                                </template>
                                <ContentDeleteCommentaire />
                            </v-dialog>
                        </div>
                    </div>

                </div>
            </template>
        </v-virtual-scroll>
        <!-- <div class="text-center btn-charger">
            <a v-if="!loading" @click="chargeComms(true)" class="href">voir suivant</a>
            <v-progress-circular v-if="loading" :loading="loading" indeterminate color="primary"></v-progress-circular>
        </div> -->
        <v-container>
            <v-form class="form-coms" @submit.prevent="addComment">
                <VTextField class="input-coms" label="Commentaire" required></VTextField>
                <v-btn class="submit-coms" type="submit" color="primary">Envoyer</v-btn>
            </v-form>
        </v-container>
    </v-list>
</template>

<script setup>
import ContentUpdateCommentaire from './Modal/ContentUpdateCommentaire.vue';
import ContentDeleteCommentaire from './Modal/ContentDeleteCommentaire.vue';
import { onMounted } from 'vue';

const emit = defineEmits(['EmitChargeComms'])
const dialogm1 = ref('');
const dialog = ref(false);
const dialog2 = ref(false);
defineProps({
    items: {
        type: Array,
        required: true,
    },
    loading: {
        type: Boolean
    }
})



const currentPage = ref(1); // Numéro de page actuel
const isLoading = ref(false); // Indicateur de chargement
let scrollContainer = null; // Référence à l'élément de défilement
let commentaires = ref([])

const addComment = () => {

}

const loadMoreData = () => {
    console.log('charge');
}
const handleScroll = () => {
    if (!isLoading.value && scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight) {
        loadMoreData();
    }
}

const chargeComms = (value) => {
    emit('EmitChargeComms', value)
}

onMounted(() => {
    // Référence à l'élément de défilement (peut nécessiter une modification selon votre structure HTML)
    scrollContainer = document.querySelector('.scroll-container');
});

</script>
<style lang="scss" scoped>
.form-coms-component form.v-form.form-coms {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.form-coms-component button.v-btn.v-btn--elevated.v-theme--dark.bg-primary.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated.submit-coms {
    border-radius: 36px;
    margin: 10px;

}

.form-coms-component button.v-btn.v-btn--elevated.v-theme--light.bg-primary.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated.submit-coms {
    border-radius: 36px;
    margin: 10px;
}



.v-list-item__footer {
    font-size: 10px;
}
</style>
