<script setup>
import { hexToRgb } from '@layouts/utils';
import { useTheme } from 'vuetify';

const { global } = useTheme()
</script>

<template>
  <VApp>

    <RouterView />

    <!-- <UpgradeToPro /> -->
  </VApp>
</template>
