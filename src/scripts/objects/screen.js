import{user} from '/src/scripts/objects/user.js'

const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
       this.userProfile.innerHTML = `<div class="info">
                         <img src="${user.avatarUrl}" alt="foto de perfil do usuário" />
                         <div class ="data">
                           <h1>${user.name ?? 'Não possui nome cadastrado 😢'}</h1>
                           <p>${user.bio ?? 'Não possui bio cadastrada 😢'}</p>
                           <p>Seguidores ${user.followers ?? 'Não tem seguidores 🤦'}</p>
                           <p> Seguindo ${user.following ?? 'Não tem seguidores 🤦'}</p>
                         </div>
                        </div>`
                       
        
        let repositoriesItens = ''
            user.repositories.forEach(repo =>repositoriesItens += `
                                          <li class=>
                                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                                            <span class="icons">🍴${repo.forks}</span>
                                            <span class="icons">⭐${repo.stargazers_count}</span>
                                            <span class="icons">👀${repo.watchers}</span>
                                            <span class="icons">💻${repo.language ??' - '}</span>
                                          </li>`
            )
            
        if (user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class = "repositories section">
                                              <h2>Repositórios</h2>
                                              <ul>${repositoriesItens}</ul>
                                          </div>`
            }
    
   
            let eventsItem = ''
            user.events.forEach (event => eventsItem +=
             ` <li class="list"> 
                   <h3 class="events">${event.repo.name}</h3><h3 class="events-message"> - ${event.payload.description ?? ' Não possui descrição 😢' }</h3>
                </li>
               `
               )
              
    
            if(user.events.length > 0){
                this.userProfile.innerHTML +=
                `<div >
                  <h2>Últimos Eventos</h2>
                  <ul>${eventsItem}</ul>
                </div>`
            }
            
            
    },
    renderNotFound(){
    this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
  }
     
}

export{ screen }