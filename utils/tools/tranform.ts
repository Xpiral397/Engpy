export function resolvePath(link: string) {
    const rootDir = 'docs/content/'
    let setFlags: boolean = false
    if(link.includes(rootDir)) {
        setFlags = true
    }
    link = link.replace(window.location.href, "")
    if(setFlags) {
        link = rootDir + link
    }
    return link.replaceAll(' ', "").replaceAll('//', '/')
}