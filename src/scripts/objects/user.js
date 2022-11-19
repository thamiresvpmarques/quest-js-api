const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    followers: '',
    following:'',

    repositories:[],
    createEvents: [],
    pushEvent: [],
    forks:[],
    stargazers_count:[],
    watchers:[],   
    language:'',

    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
    },
    setRepositories(repositories){
        this.repositories = repositories
        this.forks = repositories.forks
        this.stargazers_count = repositories.stargazers_count
        this.watchers = repositories.watchers
        this.language = repositories.language

    },
    setEvents(events){
        this.events = events
        this.createEvents = events.createEvents
        this.pushEvent = events.pushEvent
        

    },

}
export {user}

