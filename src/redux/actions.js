import {
    addData
} from "./types"

export const addDataHandle = (payload) => {
    let data = []
    if (localStorage.getItem('devs')) {
        data = JSON.parse(localStorage.getItem('devs'))
    }
    data.push(payload)
    localStorage.setItem('devs', JSON.stringify(data))

    return {
        type: addData,
        payload: data
    }
}


export const deleteDataHandle = (id) => {
    let data = localStorage.getItem('devs') ? JSON.parse(localStorage.getItem('devs')) : ''
    data.splice(id, 1)
    localStorage.setItem('devs', JSON.stringify(data))
    return {
        type: addData,
        payload: data
    }
}


export const editDataHandle = (payload, id) => {
    let data = localStorage.getItem('devs') ? JSON.parse(localStorage.getItem('devs')) : ''
    let index = data.findIndex(index => index.id === id)
    data[index] = {
        ...data[index],
        ...payload
    }
    localStorage.setItem('devs', JSON.stringify(data))
    return {
        type: addData,
        payload: data
    }
}