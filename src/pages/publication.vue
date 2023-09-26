<script setup>
import ContentPublication from '@/components/ContentPublication.vue';
import ListComment from '@/components/ListComment.vue';

</script>

<template>
    <VCard>
        <VRow no-gutters>
            <VCol cols="12" sm="7" xl="8" class="publication-show"
                :class="$vuetify.display.smAndUp ? 'border-e' : 'border-b'">
                <VCard class="pub-status">
                    <ContentPublication :showComms="false" :isShare="true" type="shareStatuMedia" />
                </VCard>
            </VCol>

            <VCol class="publication-show" cols="12" sm="5" xl="4"
                :class="$vuetify.display.smAndUp ? 'border-e' : 'border-b'">
                <ListComment />
            </VCol>
        </VRow>
    </VCard>
</template>

<style lang="scss" scoped>
.v-col-sm-7.v-col-xl-8.v-col-12.publication-show.border-e {
    display: flex;
    height: 100vh;
    // justify-content: center;
    align-items: center;
}

span.ms-2.avatar-name {
    font-size: 11px;
}

.v-col-sm-5.v-col-xl-4.v-col-12.publication-show.border-e {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
}

.v-card.v-theme--light.pub-status span.ms-2.avatar-name {
    color: #8e9aa5;
}

.v-card.v-theme--light.v-card--density-default.v-card--variant-elevated.pub-status {
    background-color: #fff !important;
    box-shadow: none;
}

.v-card.v-theme--dark.v-card--density-default.v-card--variant-elevated.pub-status {
    background-color: #2b2c40 !important;
    box-shadow: none;
    width: 100%;
}

.v-card.v-theme--light.v-card--density-default.v-card--variant-elevated.pub-status {
    background-color: #fff !important;
    box-shadow: none;
    width: 100%;
}
</style>
