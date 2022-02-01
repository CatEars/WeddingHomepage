
const url = window.location.origin

export const login = async (secret: string): Promise<string> => {
    const apiEndpoint = `${url}/login`
    const result = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            password: secret
        })
    })
    const asJson = await result.json()
    if (asJson.success) {
        return asJson.token
    } else {
        return Promise.reject()
    }
}