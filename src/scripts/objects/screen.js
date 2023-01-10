import { user } from "./user.js";

const screen = {
  userProfile: document.querySelector(".profile-data"),
  renderUser(user) {
    this.userProfile.innerHTML = `<div class="info">
                                   <img src="${
                                     user.avatarUrl
                                   }" alt="foto de perfil do usuário" />
                                   <div class='data'>
                                     <h1>${
                                       user.name ??
                                       "Não possui nome cadastrado 😢"
                                     }</h1>
                                     <p>${
                                       user.bio ??
                                       "Não possui bio cadastrada 😢"
                                     }</p>
                                     <p>Seguidores ${
                                       user.followers ?? "Não tem seguidores 🤦"
                                     }</p>
                                     <p> Seguindo ${
                                       user.following ?? "Não tem seguidores 🤦"
                                     }</p>
                                   </div>
                                  </div>`;

    this.renderRepositories(user.repositories);
    this.renderEvents(user.events);
  },

  renderRepositories(repositories) {
    let repositoriesItens = "";
    repositories.forEach((repo) => {
      repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${
        repo.name
      }
                                        <div class="containerIcon">
                                          <span class="icons">🍴${
                                            repo.forks
                                          }</span>
                                          <span class="icons">⭐${
                                            repo.stargazers_count
                                          }</span>
                                          <span class="icons">👀${
                                            repo.watchers
                                          }</span>
                                          <span class="icons">💻${
                                            repo.language ?? " - "
                                          }</span>
                                        </div>
                                    </a>

                              </li>`;
    });

    if (repositories.length > 0) {
      this.userProfile.innerHTML += `<div class = "repositories section">
                                        <h2>Repositórios</h2>
                                        <ul>${repositoriesItens}</ul>
                                     </div>`;
    }
  },

  renderEvents(event) {
    let ListEvents = event.filter(
      (event) => event.type === "PushEvent" || event.type === "CreateEvent"
    );
    let eventsItem = "";

    ListEvents.forEach((event) => {
      eventsItem += ` <li class="list"> 
                          <h3 class="events">${event.repo.name}</h3>
                          <h3 class="events-message"> - ${
                            event.payload.commits?.[0].message ??
                            " Não possui descrição 😢"
                          }</h3>
                        </li>`;
    });

    if (user.events.length > 0) {
      this.userProfile.innerHTML += `<div >
                                       <h2>Últimos Eventos</h2>
                                       <ul>${eventsItem}</ul>
                                     </div>`;
    }
  },

  renderNotFound() {
    this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>";
  },
};

export { screen };
