

const codeColors = {
    groceries: "#05a7a7",
    beauty: "#0805a7",
    fragrances: "#05a728",
    furniture: "#be781c",
}

const aMayuscula = (palabra) => {
    return palabra.charAt(0).toUpperCase() + palabra.slice(1)
}

export { codeColors, aMayuscula }