function textTransform(text: string) {
    try {
        return text.charAt(0) + text.slice(1).toLowerCase()
    } catch(e) {
        return text
    }
}
export {
    textTransform
}