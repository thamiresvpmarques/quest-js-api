import { baseUrl, evenNumbers} from '/src/scripts/variables.js'

async function getEvents(userName){
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${evenNumbers}`)
    return await response.json()
}

export {getEvents}
