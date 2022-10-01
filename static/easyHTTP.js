/**  
*
* Easy HTTP
* Library for making HTTP requests
*
* @version 2.0.0
* @author Jeremy Munsell
* 
*
**/

class EasyHTTP {
    //Make HTTP Get Request
    async get(url) {
        const response = await fetch(url);
        const resData = await response.json();
        return resData
    }

    async post(url,data,headers) {

        const response = await fetch(url,{
            method: "POST",
            mode: "cors",
            headers: headers,
            body: data
        });

        const resData = await response.json();
        return resData

    }

    async put(url,data) {
        const response = await fetch(url, {
                method: "PUT",
                headers: {"Content-type":"application/json"},
                body: JSON.stringify(data)
            });

            const resData = await response.json();
            return resData;
        }


    async delete(url) {
        const response = await fetch(url, {
                method: "DELETE",
                headers: {"Content-type":"application/json"},
            })
        const resData = await 'Resource Deleted';
        return resData
        }

}