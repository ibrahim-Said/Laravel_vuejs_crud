export function getAllFormation() {
    return new Promise((res, rej) => {
        axios.get('http://localhost:8000/api/auth/formation')
            .then(response => {
                res(response);
            })
            .catch(error => {
                rej(error);
            });
    });
}
export function edit(mydata) {
    return new Promise((res, rej) => {
        axios.post('http://localhost:8000/api/auth/editformation', mydata).then(response => {
            res(response)
        }).catch(error => {
            rej(error)
        })
    })
}
export function add(data) {
    return new Promise((res, rej) => {
        axios.post('http://localhost:8000/api/auth/addformation', data).then(response => {
            res(response)
        }).catch(error => {
            rej(error)
        })
    })
}
export function deleteFormation(data) {
    return new Promise((res, rej) => {
        axios.delete('http://localhost:8000/api/auth/deleteFormation/' + data.id)
            .then(response => {
                res(response);
            })
            .catch(error => {
                rej(error);
            });
    });
}
export function updateCompleted(data) {
    return new Promise((res, rej) => {
        axios.post('http://localhost:8000/api/auth/toggelCompleted/' + data.id, data)
            .then(response => {
                res(response);
            })
            .catch(error => {
                rej('id incorrecte !');
            });
    })
}