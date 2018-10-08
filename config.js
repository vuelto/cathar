exports.app = {
    port: "7575", 
    id: "b583e875-9028-4d8c-bfc0-988bd7c9ed38"
};

exports.schema = {
    user: {
        create: {
            title: "create user", 
            description: "create user request", 
            type: "object", 
            properties: {
                email: {
                    description: "email address", 
                    type: "string"
                }, 
                password1: {
                    description: "password",
                    type: "string"
                }, 
                password2: {
                    description: "confirm password", 
                    type: "string"
                }
            }, 
            required: ["email", "password1", "password2"]
        },
        password: {
            title: "update password", 
            description: "update user password",
            type: "object",
            properties: {
                email: {
                    description: "email address", 
                    type: "string"
                }, 
                password: {
                    description: "current password", 
                    type: "string"
                },
                password1: {
                    description: "password",
                    type: "string"
                }, 
                password2: {
                    description: "confirm password", 
                    type: "string"
                }
            }, 
            required: ["email", "password", "password1", "password2"]
        }
    }, 
    cath: {
        create: {
            title: "create cath", 
            description: "create a cath", 
            type: "object", 
            properties: {
                xpath: {
                    description: "element xpath", 
                    type: "string"
                }, 
                text: {
                    description: "replacement text", 
                    type: "string"
                }, 
                url: {
                    description: "page url", 
                    type: "string"
                }
            }, 
            required: ["xpath", "text", "url"]
        }
    }
};
