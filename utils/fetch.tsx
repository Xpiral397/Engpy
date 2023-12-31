export const fetcher = (url: string, data: object) => {
    fetch(window.location.origin + url, {
        method: data ? 'POST' : 'GET',
        credentials: "include",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(data)
    }).then((fetched) => {
        return fetched.json()
    })
}