<template>
    <div>
        <!-- 👉 Robert Meyer -->
        <VCol cols="12" lg="12" sm="6" md="4">
            <VCard class="header-profile">
                <!-- <VImg class="photo-couverture" :src="pages2" /> -->

                <VCardText class="position-relative content">
                    <!-- User Avatar -->
                    <VAvatar size="75" class="avatar-center" :image="avatar1" />

                    <!-- Title, Subtitle & Action Button -->
                    <div class="d-flex justify-space-between flex-wrap pt-8">
                        <div class="me-2 mb-2">
                            <VCardTitle class="pa-0">
                                {{ store.getters.getOtherProfile?.name }}
                            </VCardTitle>
                            <VCardSubtitle class="text-caption pa-0">
                                London, UK
                            </VCardSubtitle>
                        </div>
                        <VBtn v-if="store.getters.getOtherProfile?.isFriend">Retirer amis </VBtn>
                        <VBtn v-else>Demande amis</VBtn>
                    </div>

                    <!--  Mutual Friends -->
                    <div class="d-flex justify-space-between align-center mt-4">
                        <span class="font-weight-medium">{{ store.getters.getOtherProfile?.amis_communs?.length }} mutual
                            friends</span>

                        <div class="v-avatar-group">
                            <VAvatar v-for="user in store.getters.getOtherProfile?.amis_communs" :key="user.id"
                                :image="avatar1" size="40" />
                        </div>
                    </div>
                </VCardText>
            </VCard>
        </VCol>
        <VCol md="6" lg="12" cols="12">
            <VCard>
                <VTabs v-model="navigationTab2" align-tabs="center">
                    <VTab v-for="item in tabItems" :key="item" :value="item">
                        {{ item }}
                    </VTab>
                </VTabs>

                <VDivider />

                <!-- tabs content -->
                <VWindow v-model="navigationTab2">
                    <VWindowItem v-for="item in tabItems" :key="item" :value="item">
                        <div v-if="item == 'Journal'">
                            <VCard :class="route.name == 'profile' ? 'profile' : ''"
                                v-for="actu in store.getters.getActuProfile" class="mt-3 pub-status">
                                <ContentPublication :isLoading="store.getters.getChargementActuProfile"
                                    v-if="actu.publication.type == 'simple_pub'" :showComms="true" :isShare="false"
                                    :user="actu.user" :time="actu.date" :publication="actu.publication" />
                                <div v-else
                                    class="d-flex justify-space-between flex-wrap flex-md-nowrap flex-column flex-md-row">
                                    <div>
                                        <ContentPublication :time="actu.date"
                                            :isLoading="store.getters.getChargementActuProfile" :showComms="true"
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
                            <!-- <VCard class="m-10 pub-status">
                                <div>
                                    <ContentPublication :isShare="false" type="statut" />
                                </div>
                            </VCard>

                            <VCard class="m-10 mt-3 pub-status">
                                <div class="d-flex justify-space-between flex-wrap flex-md-nowrap flex-column flex-md-row">
                                    <div>
                                        <ContentPublication :isShare="false" type="statutMedia" />
                                    </div>
                                    <VDivider :vertical="$vuetify.display.mdAndUp" />
                                    <div class="ma-auto pa-5">
                                        <VImg width="250" height="176" :src="eCommerce2" />
                                    </div>
                                </div>
                            </VCard>
                            <VCard class="m-10 mt-3 pub-status ">
                                <ContentPublication :isShare="true" type="shareStatut" />
                            </VCard>

                            <VCard class="m-10 mt-3 pub-status ">
                                <ContentPublication :isShare="true" type="sharePubGroupe" />
                            </VCard>

                            <VCard class="m-10 mt-3 pub-status ">
                                <ContentPublication :isShare="true" type="shareStatuMedia" />
                            </VCard> -->
                        </div>

                        <div class="text-center" v-if="item == 'Profile'">

                            <VCol cols="12">
                                <VCard title="Account Details">
                                    <VCardText>
                                        <!-- 👉 Form -->
                                        <VForm class="mt-6">
                                            <VRow>
                                                <!-- 👉 First Name -->
                                                <VCol md="6" cols="12">
                                                    <VTextField v-model="accountDataLocal.firstName" placeholder="John"
                                                        label="First Name" :disabled="true" />
                                                </VCol>

                                                <!-- 👉 Last Name -->
                                                <VCol md="6" cols="12">
                                                    <VTextField :disabled="true" v-model="accountDataLocal.lastName"
                                                        placeholder="Doe" label="Last Name" />
                                                </VCol>

                                                <!-- 👉 Email -->
                                                <VCol cols="12" md="6">
                                                    <VTextField :disabled="true" v-model="accountDataLocal.email"
                                                        label="E-mail" placeholder="johndoe@gmail.com" type="email" />
                                                </VCol>

                                                <!-- 👉 Organization -->
                                                <VCol cols="12" md="6">
                                                    <VTextField :disabled="true" v-model="accountDataLocal.org"
                                                        label="Organization" placeholder="ThemeSelection" />
                                                </VCol>

                                                <!-- 👉 Phone -->
                                                <VCol cols="12" md="6">
                                                    <VTextField :disabled="true" v-model="accountDataLocal.phone"
                                                        label="Phone Number" placeholder="+1 (917) 543-9876" />
                                                </VCol>

                                                <!-- 👉 Address -->
                                                <VCol cols="12" md="6">
                                                    <VTextField :disabled="true" v-model="accountDataLocal.address"
                                                        label="Address" placeholder="123 Main St, New York, NY 10001" />
                                                </VCol>

                                                <!-- 👉 State -->
                                                <VCol cols="12" md="6">
                                                    <VTextField :disabled="true" v-model="accountDataLocal.state"
                                                        label="State" placeholder="New York" />
                                                </VCol>

                                                <!-- 👉 Zip Code -->
                                                <VCol cols="12" md="6">
                                                    <VTextField :disabled="true" v-model="accountDataLocal.zip"
                                                        label="Zip Code" placeholder="10001" />
                                                </VCol>

                                                <!-- 👉 Country -->
                                                <VCol cols="12" md="6">
                                                    <VSelect :disabled="true" v-model="accountDataLocal.country"
                                                        label="Country"
                                                        :items="['USA', 'Canada', 'UK', 'India', 'Australia']"
                                                        placeholder="Select Country" />
                                                </VCol>

                                                <!-- 👉 Language -->
                                                <VCol cols="12" md="6">
                                                    <VSelect :disabled="true" v-model="accountDataLocal.language"
                                                        label="Language" placeholder="Select Language"
                                                        :items="['English', 'Spanish', 'Arabic', 'Hindi', 'Urdu']" />
                                                </VCol>

                                                <!-- 👉 Timezone -->
                                                <VCol cols="12" md="6">
                                                    <VSelect :disabled="true" v-model="accountDataLocal.timezone"
                                                        label="Timezone" placeholder="Select Timezone" :items="timezones"
                                                        :menu-props="{ maxHeight: 200 }" />
                                                </VCol>

                                                <!-- 👉 Currency -->
                                                <VCol cols="12" md="6">
                                                    <VSelect :disabled="true" v-model="accountDataLocal.currency"
                                                        label="Currency" placeholder="Select Currency" :items="currencies"
                                                        :menu-props="{ maxHeight: 200 }" />
                                                </VCol>
                                            </VRow>
                                        </VForm>
                                    </VCardText>
                                </VCard>
                            </VCol>
                        </div>

                        <div class="text-center" v-if="item == 'Amis'">

                            <VCol cols="12" lg="12" md="4" sm="6" order="3">
                                <VCard>
                                    <VCardText>
                                        <VList class="card-list">
                                            <VListItem class="list-amis-other" v-for="item in transactions"
                                                :key="item.paymentMethod">
                                                <template #prepend>
                                                    <VAvatar rounded variant="tonal" :color="item.color" :image="item.icon"
                                                        class="me-3" />
                                                    <div>
                                                        <div>John Doe</div>
                                                        <span>6 amis en commun</span>
                                                    </div>
                                                </template>

                                                <template #append>
                                                    <VListItemAction>
                                                        <VBtn>Ajouter</VBtn>
                                                    </VListItemAction>
                                                </template>
                                            </VListItem>
                                        </VList>
                                    </VCardText>
                                </VCard>
                            </VCol>
                        </div>
                        <div class="text-center" v-if="item == 'Photo'">

                            <VCol cols="12" lg="12" md="4" sm="6" order="3">
                                <VCard>
                                    <VCardText>
                                        <VList class="card-list">
                                            <VListItem v-for="item in transactions" :key="item.paymentMethod">
                                                <template #prepend>

                                                    <VListItemTitle>
                                                        {{ item.description }}
                                                    </VListItemTitle>
                                                </template>

                                                <template #append>
                                                    <VListItemAction>
                                                        <span class="me-1">{{ item.amount > 0 ? `+$${Math.abs(item.amount)}`
                                                            : `-$${Math.abs(item.amount)}` }}</span>
                                                        <span class="text-disabled">USD</span>
                                                    </VListItemAction>
                                                </template>
                                            </VListItem>
                                        </VList>
                                    </VCardText>
                                </VCard>
                            </VCol>
                            <div class="text-center">
                                <v-btn color="primary">
                                    Open Dialog
                                    <v-dialog v-model="dialog" activator="parent" width="auto">
                                        <v-card>
                                            <v-card-text>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua.
                                            </v-card-text>
                                            <v-card-actions>
                                                <v-btn color="primary" block @click="dialog = false">Close
                                                    Dialog</v-btn>
                                            </v-card-actions>
                                        </v-card>
                                    </v-dialog>
                                </v-btn>
                            </div>
                        </div>
                    </VWindowItem>
                </VWindow>
            </VCard>
        </VCol>
    </div>
</template>
<script setup>
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar1 from '@images/avatars/avatar-1.png';
import pages2 from '@images/pages/2.png';
import eCommerce2 from '@images/eCommerce/2.png'
import AnalyticsTransactions from '@/views/dashboard/AnalyticsTransactions.vue';
import chartInfo from '@images/cards/chart-info.png'
import creditCardSuccess from '@images/cards/credit-card-success.png'
import creditCardWarning from '@images/cards/credit-card-warning.png'
import paypalError from '@images/cards/paypal-error.png'
import walletPrimary from '@images/cards/wallet-primary.png'
import { useRoute, useRouter } from 'vue-router'
import AccountSettingsAccount from '@/views/pages/account-settings/AccountSettingsAccount.vue'
import AccountSettingsNotification from '@/views/pages/account-settings/AccountSettingsNotification.vue'
import AccountSettingsSecurity from '@/views/pages/account-settings/AccountSettingsSecurity.vue'
import ContentPublication from '@/components/ContentPublication.vue';

import { useStore } from 'vuex';
import { onMounted, watch } from 'vue';

const store = useStore(); // Obtenez l'instance du store Vuex

const route = useRoute()
const activeTab = ref(route.params.tab)

const accountData = {
    avatarImg: avatar1,
    firstName: 'john',
    lastName: 'Doe',
    email: 'johnDoe@example.com',
    org: 'ThemeSelection',
    phone: '+1 (917) 543-9876',
    address: '123 Main St, New York, NY 10001',
    state: 'New York',
    zip: '10001',
    country: 'USA',
    language: 'English',
    timezone: '(GMT-11:00) International Date Line West',
    currency: 'USD',
}
const dialog = ref(false)
const refInputEl = ref()
const accountDataLocal = ref(structuredClone(accountData))
const isAccountDeactivated = ref(false)

const resetForm = () => {
    accountDataLocal.value = structuredClone(accountData)
}

const changeAvatar = file => {
    const fileReader = new FileReader()
    const { files } = file.target
    if (files && files.length) {
        fileReader.readAsDataURL(files[0])
        fileReader.onload = () => {
            if (typeof fileReader.result === 'string')
                accountDataLocal.value.avatarImg = fileReader.result
        }
    }
}

// reset avatar image
const resetAvatar = () => {
    accountDataLocal.value.avatarImg = accountData.avatarImg
}

const timezones = [
    '(GMT-11:00) International Date Line West',
    '(GMT-11:00) Midway Island',
    '(GMT-10:00) Hawaii',
    '(GMT-09:00) Alaska',
    '(GMT-08:00) Pacific Time (US & Canada)',
    '(GMT-08:00) Tijuana',
    '(GMT-07:00) Arizona',
    '(GMT-07:00) Chihuahua',
    '(GMT-07:00) La Paz',
    '(GMT-07:00) Mazatlan',
    '(GMT-07:00) Mountain Time (US & Canada)',
    '(GMT-06:00) Central America',
    '(GMT-06:00) Central Time (US & Canada)',
    '(GMT-06:00) Guadalajara',
    '(GMT-06:00) Mexico City',
    '(GMT-06:00) Monterrey',
    '(GMT-06:00) Saskatchewan',
    '(GMT-05:00) Bogota',
    '(GMT-05:00) Eastern Time (US & Canada)',
    '(GMT-05:00) Indiana (East)',
    '(GMT-05:00) Lima',
    '(GMT-05:00) Quito',
    '(GMT-04:00) Atlantic Time (Canada)',
    '(GMT-04:00) Caracas',
    '(GMT-04:00) La Paz',
    '(GMT-04:00) Santiago',
    '(GMT-03:30) Newfoundland',
    '(GMT-03:00) Brasilia',
    '(GMT-03:00) Buenos Aires',
    '(GMT-03:00) Georgetown',
    '(GMT-03:00) Greenland',
    '(GMT-02:00) Mid-Atlantic',
    '(GMT-01:00) Azores',
    '(GMT-01:00) Cape Verde Is.',
    '(GMT+00:00) Casablanca',
    '(GMT+00:00) Dublin',
    '(GMT+00:00) Edinburgh',
    '(GMT+00:00) Lisbon',
    '(GMT+00:00) London',
]

const currencies = [
    'USD',
    'EUR',
    'GBP',
    'AUD',
    'BRL',
    'CAD',
    'CNY',
    'CZK',
    'DKK',
    'HKD',
    'HUF',
    'INR',
]
// tabs
const tabs = [
    {
        title: 'Account',
        icon: 'bx-user',
        tab: 'account',
    },
    {
        title: 'Security',
        icon: 'bx-lock-open',
        tab: 'security',
    },
    {
        title: 'Notifications',
        icon: 'bx-bell',
        tab: 'notification',
    },
]

const transactions = [
    {
        amount: +82.6,
        paymentMethod: 'Paypal',
        description: 'Send money',
        icon: paypalError,
        color: 'error',
    },
    {
        paymentMethod: 'Wallet',
        amount: +270.69,
        description: 'Mac\'D',
        icon: walletPrimary,
        color: 'primary',
    },
    {
        amount: +637.91,
        paymentMethod: 'Transfer',
        description: 'Refund',
        icon: chartInfo,
        color: 'info',
    },
    {
        paymentMethod: 'Credit Card',
        amount: -838.71,
        description: 'Ordered Food',
        icon: creditCardSuccess,
        color: 'success',
    },
    {
        paymentMethod: 'Wallet',
        amount: +203.33,
        description: 'Starbucks',
        icon: walletPrimary,
        color: 'primary',
    },
    {
        paymentMethod: 'Mastercard',
        amount: -92.45,
        description: 'Ordered Food',
        icon: creditCardWarning,
        color: 'warning',
    },
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
const avatars = [
    avatar1,
    avatar2,
    avatar3,
    avatar4,
]
const navigationTab2 = ref('ITEM ONE')

const tabItems = [
    'Journal',
    'Profile',
    'Photo',
    'Amis'
]


watch(() => route.params.id, (newId, oldId) => {
    console.log('change')
    const data = {
        user_id: newId
    }
    store.dispatch('setActualityProfile', data)
})
onMounted(() => {
    const data = {
        user_id: route.params.id
    }
    store.dispatch('setActualityProfile', data)

})
// const tabContent = 'Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards...'
</script>
<style lang="scss" scoped>
.card-list {
    --v-card-list-gap: 1.6rem;
}

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

.v-card.v-theme--light.v-card--density-default.v-card--variant-elevated.header-profile {
    padding: 46px;
}

.v-card.v-theme--dark.v-card--density-default.v-card--variant-elevated.header-profile {
    padding: 46px;
}

.v-window-item.v-window-item--active.text-center {
    padding: 20px;
}


// amis liste

.v-list-item.v-theme--dark.v-list-item--density-default.v-list-item--one-line.v-list-item--variant-text.list-amis-other {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.v-card.v-theme--dark.v-card--density-default.v-card--variant-elevated.mt-3.pub-share {
    background-color: #2b2c40 !important;
}

.v-card.v-theme--light.v-card--density-default.v-card--variant-elevated.mt-3.pub-share {
    background-color: #f5f5f9 !important;
}

.v-card.v-theme--light.v-card--density-default.v-card--variant-elevated.pub-status {
    background-color: #fff !important;
}

.v-card.v-theme--dark.v-card--density-default.v-card--variant-elevated.pub-status {
    background-color: #232333 !important;
}

.v-list-item.v-theme--light.v-list-item--density-default.v-list-item--one-line.v-list-item--variant-text.list-amis-other {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

//Journal
.v-card.v-theme--dark.v-card--density-default.v-card--variant-elevated.m-10.pub-status {
    margin: 30px;
}

.v-card.v-theme--light.v-card--density-default.v-card--variant-elevated.m-10.pub-status {
    margin: 30px;
}


.v-card.v-theme--light.v-card--density-default.v-card--variant-elevated.profile.mt-3.pub-status {
    margin: 20px;
}

.v-card.v-theme--dark.v-card--density-default.v-card--variant-elevated.profile.mt-3.pub-status {
    margin: 20px;
}
</style>
