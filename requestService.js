class RequestService {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async makeGet(route) {
        const url = `${this.baseUrl}/${route}`;
        //return await 
    }

    async makePost(route, content) {
        const url = `${this.baseUrl}/${route}`;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Accept-Encoding': 'deflate, gzip',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(content)
            });
    
            if (!response.ok) {
                throw new Error(`Status: ${response.status}`);
                return {
                    type: 'error',
                    data: `${response.status}: ${response.text}`
                }
            }
    
            const data = await response.json();
    
            return {
                type: 'success',
                data: data
            };
        } catch (error) {
            return {
                type: 'error',
                data: error.message
            };
        }
    }
}