export function PostData(userdata) {
    const loginUrl = "http://localhost:8848/api/login/";
    return new Promise((resolve, reject) => {
           fetch(loginUrl, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            body:JSON.stringify({email:userdata})
        })
            .then((response) => response.json())
            .then((responseJson) => {
                resolve(responseJson);
            })
            .catch((error) => {
                reject(error);
            });
    });
}