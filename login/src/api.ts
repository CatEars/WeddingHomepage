
export const login = (secret: string): Promise<string> => {
    const token = '123';
    return Promise.resolve(`secret-token-${secret}-${token}`)
}