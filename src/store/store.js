import { routeAPi } from '@/config/api';
import { getAllActualite } from '@/services/Actualite';
import { getFriendsSuggestion } from '@/services/Friends';
import { getProfile } from '@/services/User';
import { createStore } from 'vuex';

const store = createStore({
    state: {
        userEnLigne: '',
        actuality: {
            data: [],
            nextPage: routeAPi.getAcualite,
            isLoading: true
        },
        suggestionFriends: {
            data: [],
            nextPage: routeAPi.getSuggestionFriends,
            isLoading: true
        },
        otherProfile: {
            user_id: "",
            user: {},
            data: [],
            nextPage: routeAPi.getAcualite,
            isLoading: true
        }
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.userEnLigne = token
        },
        async SET_ACTU(state) {
            let response = await getAllActualite(state.actuality.nextPage);
            let donnee = await refactData(response)
            state.actuality.data = state.actuality.data.concat(donnee.data)
            state.actuality.nextPage = donnee.nextPage
            setTimeout(() => {
                state.actuality.isLoading = false
            }, 3000);
        },
        async SET_ACTU_PROFILE(state, data) {
            let response = await '';
            if (state.otherProfile.user_id == data.user_id) {
                console.log('get data')
                // response = await getAllActualite(state.otherProfile.nextPage);
            } else {
                state.otherProfile.isLoading = true;
                state.otherProfile.user_id = data.user_id
                state.otherProfile.data = []
                state.otherProfile.nextPage = routeAPi.getAcualite
                const profile = await getProfile(data.user_id);
                state.otherProfile.user = profile.data.user
                response = await getAllActualite(state.otherProfile.nextPage + `/${data.user_id}`);
                let donnee = await refactData(response)
                console.log('actu profile', donnee);
                state.otherProfile.data = state.otherProfile.data.concat(donnee.data)
                state.otherProfile.nextPage = donnee.nextPage
                setTimeout(() => {
                    state.otherProfile.isLoading = false
                }, 3000);
            }
        },

        SET_STATE(state, actu) {

        },
        async SET_SUGGEST_FRIENDS(state) {
            // state.suggestionFriends.isLoading = true
            const response = await getFriendsSuggestion(state.suggestionFriends.nextPage)
            state.suggestionFriends.data = await state.suggestionFriends.data.concat(response.data)
            setTimeout(() => {
                state.suggestionFriends.isLoading = false
            }, 3000);
            // state.suggestionFriends.isLoading = await false
        }
        // SET_CHARGE_ACTU(state, actu) {
        //     state.actuality.isLoading = !state.actuality.isLoading
        // }
    },
    actions: {
        // setUserEnLigne({ commit }, token) {
        //     commit('SET_TOKEN', token)
        // },
        setSuggestionFriends({ commit }) {
            commit('SET_SUGGEST_FRIENDS')
        },
        setInitialiseState({ commit }) {
            commit('SET_STATE');
        },
        setActuality({ commit }) {
            commit('SET_ACTU');
        },
        setActualityProfile({ commit }, data) {
            commit('SET_ACTU_PROFILE', data);
        },
    },
    getters: {
        getActu(state) {
            return state.actuality.data
        },
        getActuProfile(state) {
            return state.otherProfile.data
        },
        getOtherProfile(state) {
            return state.otherProfile.user
        },
        getChargementActu(state) {
            return state.actuality.isLoading
        },
        getChargementActuProfile(state) {
            return state.otherProfile.isLoading
        },
        getSuggestionFriends(state) {
            return state.suggestionFriends
        },
    },
})

// store.subscribeAction({
//     before: (action, state) => {
//         console.log(action)
//         if (action.type == 'init') {
//             console.log('testttt');
//             action.payload.dispatch('init');
//         }
//     },
// });


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
                date: element.actualable.publicable.sharable.time
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
                },
            }

            data.publication.share.groupe.id = element.actualable.publicable.id
            data.publication.share.groupe.name = element.actualable.publicable.name

            data.publication.share.user.id = element.actualable.user.id
            data.publication.share.user.nom = element.actualable.user.name
            data.publication.share.user.pdp = element.actualable.user.media
            data.publication.share.id_publication = element.actualable_id
            data.publication.share.description = element.actualable.description
            data.publication.share.media = element.actualable.media
            data.publication.share.date = element.actualable.time

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
            data.date = element.actualable.time

        donnee.data.push(data)
    });
    donnee.nextPage = response.data.next_page_url
    return donnee
}
export default store
