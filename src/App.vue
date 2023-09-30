<script setup>
import { hexToRgb } from '@layouts/utils';
import { onMounted } from 'vue';
import { useTheme } from 'vuetify';
import { useStore } from 'vuex';
import { getAllActualite } from '@/services/Actualite'

const { global } = useTheme()

const store = useStore(); // Obtenez l'instance du store Vuex

const refactData = (response) => {
  let donnee = { data: [], nextPage: "" };
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

    donnee.data.push(data)
  });
  donnee.nextPage = response.data.next_page_url
  return donnee
}

onMounted(async () => {
  console.log('in app');
  await store.dispatch('setActuality')
  await store.dispatch('setSuggestionFriends')
})
</script>

<template>
  <VApp :style="`--v-global-theme-primary: ${hexToRgb(global.current.value.colors.primary)}`">

    <RouterView />

    <!-- <UpgradeToPro /> -->
  </VApp>
</template>
