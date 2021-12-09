import { getMetals, setMetal } from "./database.js"

const metals = getMetals()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value))
            // window.alert(`User chose metal ${event.target.value}`)
        }
    }    
)

export const Metals = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    const listMetal = metals.map((metal) => {
        return  `<li>
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
    })


    // Join all of the strings in the array into a single string
    html += listMetal.join("")

    html += "</ul>"
    return html
}
