const create = async (ad) => {
    try {
        let response = await fetch('/ad/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'applciation/json'
            },
            body: JSON.stringify(ad)
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}
const list = async (signal) => {
    try {
        let response = await fetch('/ad/', {
            method: 'GET',
            signal: signal,
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

export {
    create,
    list
}