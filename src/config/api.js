import { routeBasic } from "."

export const routeAPi = {
    //authentification
    login: routeBasic + '/connexion',
    register: routeBasic + '/register',
    deconnect: routeBasic + '/deconnect',

    //
    getAcualite: routeBasic + '/actualite',

    //chat
    conversation: routeBasic + '/all-conversation',
    allDiscussion: routeBasic + '/all-discussion',
    sendMessage: routeBasic + '/send-message',


    //user
    myProfil: routeBasic + '/user/',
    allUsers: routeBasic + '/all-user',



    //friends
    getSuggestionFriends: routeBasic + "/friends/suggestion"
}
