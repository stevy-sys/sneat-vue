<template>
    <v-list>
        <div class="text-center btn-charger">
            <a v-if="!loading" @click="chargeComms(true)" class="href">voir precedent</a>
            <v-progress-circular v-if="loading" :loading="loading" indeterminate color="primary"></v-progress-circular>
        </div>
        <div v-for=" item  in  items "
            class="v-list-item v-list-item--density-default v-list-item--two-line v-list-item--variant-text">
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
            <v-progress-circular v-if="loading" :loading="loading" indeterminate color="primary"></v-progress-circular>
        </div>
        <v-container>
            <v-form class="form-coms" @submit.prevent="addComment">
                <VTextField class="input-coms" label="Commentaire" required></VTextField>
                <v-btn class="submit-coms" type="submit" color="primary">Envoyer</v-btn>
            </v-form>
        </v-container>
    </v-list>
</template>

<script setup>
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

const chargeComms = (value) => {
    emit('EmitChargeComms', value)
}

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
</style>
