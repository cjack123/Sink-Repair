import { getRequests } from "./dataAccess.js"


const convertRequestToListElement = (request) => {
    return `
    <li>
        ${request.description}
        <button class="request__delete" id="request--${request.id}">
            Delete
        </button>
    </li>
`
}



export const Requests = () => {
    const requests = getRequests()

    let html = `
        <ul>
            ${
                requests.map(convertRequestToListElement)
            }
        </ul>
    `

    return html
}
