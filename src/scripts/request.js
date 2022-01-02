import { getRequests } from "./dataAccess.js"
import { getPlumbers } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "plumbers") {
            const [requestId, plumberId] = event.target.value.split("--")

            /*
                This object should have 3 properties
                   1. requestId
                   2. plumberId
                   3. date_created
            */
            const completion = { }

            /*
                Invoke the function that performs the POST request
                to the `completions` resource for your API. Send the
                completion object as a parameter.
             */

        }
    }
)


const convertRequestToListElement = (request) => {
    const plumbers = getPlumbers()
    return `
    <li>
        ${request.description}
        <button class="request__delete" id="request--${request.id}">
            Delete
        </button>
        <select class="plumbers" id="plumbers">
            <option value="id">choose</option>
            ${
                plumbers.map(
                    plumber => {
                        return `<option value="${request.id}--${plumber.id}">${plumber.name}</option>`
                    }
                ).join("")
            }
        </select>
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

// export const Plumbers = () => {
//     const plumbers = getPlumbers()

//     let html = `
//         <ul>
//             ${
//                 plumbers.map(convertRequestToListElement)
//             }
//         </ul>
//     `

//     return html
// }



