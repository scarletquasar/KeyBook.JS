var keybook = {
    localTimeout: async(name, time) => {
        await new Promise(resolve => setTimeout(resolve, time));
        this.localStore(name, null);
    },

    sessionTimeout: async(name, time) => {
        await new Promise(resolve => setTimeout(resolve, time));
        this.sessionStore(name, null);
    },

    /* storex.localStore("Test", "string"); */
    localStore: (name, content, type, optionalTimeout) => {
        if(!localStorage[name]) {
            console.error("Error: The item "+name+" already exists. Use 'localEdit' instead."); 
            return;
        }

        if (optionalTimeout) this.localTimeout(name, optionalTimeout);

        switch(type) {
            case "string":
                localStorage[name] = ["string", content];
                break;
            case "boolean":
                content ? localStorage[name] = ["boolean", 1] : localStorage[name] = ["boolean", 0];
                break;
            case "number":
                localStorage[name] = ["number", content.toString()];
                break;
            case "object":
                localStorage[name] = ["object", JSON.stringify(content)];
        }
    },

    localGet: (name, type) => {
        if(!localStorage[name]) {
            console.error("Error: The item "+name+" is not defined."); 
            return;
        }

        switch(type) {
            case "string":
                if (localStorage[name][0] == "string") {
                    return localStorage[name][1];
                }
                break;
            case "boolean":
                if (localStorage[name][0] == "boolean") {
                    var b = false;
                    localStorage[name][1] == "1" ? b = true : b = false;
                    return b;
                }
                break;
            case "number":
                if (localStorage[name][0] == "number") {
                    return Number(localStorage[name][1]);
                }
                break;
            case "object":
                if (localStorage[name][0] == "object") {
                    return JSON.parse(localStorage[name][1]);
                }
                break;
            default:
                console.error("Error: Incorrect property. Use 'localGetRaw' instead."); 
        }
    },

    localGetRaw: (name) => { return localStorage[name] },

    localEdit: (name, content, type, optionalTimeout) => {
        switch(type) {
            case "string":
                localStorage[name] = ["string", content];
                break;
            case "boolean":
                content ? localStorage[name] = ["boolean", 1] : localStorage[name] = ["boolean", 0];
                break;
            case "number":
                localStorage[name] = ["number", content.toString()];
                break;
            case "object":
                localStorage[name] = ["object", JSON.stringify(content)];
            default:
                console.error("Error: Incorrect property."); 
        }
    },

    sessionStore: (name, content, type, optionalTimeout) => {
        if(!sessionStorage[name]) {
            console.error("Error: The item "+name+" already exists. Use 'sessionEdit' instead."); 
            return;
        }

        if (optionalTimeout) this.sessionTimeout(name, optionalTimeout);

        switch(type) {
            case "string":
                sessionStorage[name] = ["string", content];
                break;
            case "boolean":
                content ? sessionStorage[name] = ["boolean", 1] : sessionStorage[name] = ["boolean", 0];
                break;
            case "number":
                sessionStorage[name] = ["number", content.toString()];
                break;
            case "object":
                sessionStorage[name] = ["object", JSON.stringify(content)];
            default:
                console.error("Error: Incorrect property."); 
        }
    },

    sessionGet: (name, type) => {
        if(!sessionStorage[name]) {
            console.error("Error: The item "+name+" is not defined."); 
            return;
        }

        switch(type) {
            case "string":
                if (sessionStorage[name][0] == "string") {
                    return sessionStorage[name][1];
                }
                break;
            case "boolean":
                if (sessionStorage[name][0] == "boolean") {
                    var b = false;
                    sessionStorage[name][1] == "1" ? b = true : b = false;
                    return b;
                }
                break;
            case "number":
                if (sessionStorage[name][0] == "number") {
                    return Number(sessionStorage[name][1]);
                }
                break;
            case "object":
                if (sessionStorage[name][0] == "object") {
                    return JSON.parse(sessionStorage[name][1]);
                }
                break;
            default:
                console.error("Error: Incorrect property. Use 'sessionGetRaw' instead."); 
        }
    },

    sessionGetRaw: (name) => { return sessionStorage[name] },

    sessionEdit: (name, content, type, optionalTimeout) => {
        switch(type) {
            case "string":
                sessionStorage[name] = ["string", content];
                break;
            case "boolean":
                content ? sessionStorage[name] = ["boolean", 1] : sessionStorage[name] = ["boolean", 0];
                break;
            case "number":
                sessionStorage[name] = ["number", content.toString()];
                break;
            case "object":
                sessionStorage[name] = ["object", JSON.stringify(content)];
            default:
                console.error("Error: Incorrect property."); 
        }
    }
}