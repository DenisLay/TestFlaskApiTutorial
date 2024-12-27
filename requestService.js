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
            await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(content)
            });
    
            if (!response.ok) {
                return {
                    type: 'error',
                    data: `Status: ${response.status}`
                };
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