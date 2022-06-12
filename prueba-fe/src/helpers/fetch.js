

export const fetchPostHelper = async (data={}) => {
    return await fetch('http://localhost:8080/', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({data})
    }).then(data => data.json())
}


