<template>
    <v-list>
        <!-- <div class="text-center btn-charger">
            <a v-if="!loading" @click="chargeComms(true)" class="href">voir precedent</a>
            <v-progress-circular v-if="loading" :loading="loading" indeterminate color="primary"></v-progress-circular>
        </div> -->
        <v-virtual-scroll class="scroll-container" @scroll="handleScroll" width="100%" :height="100" :items="['1']">
            <template v-slot:default="{ item }">
                <OneComment v-for=" (item, key)  in  items " :user="item.user" :id="key" :img="item.img"
                    :comment="item.comment" />
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
import { onMounted } from 'vue';
import OneComment from './OneComment.vue';

const emit = defineEmits(['EmitChargeComms'])
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
