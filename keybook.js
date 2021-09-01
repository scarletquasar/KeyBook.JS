var keybook = {
    localDictionary: [],
    sessionDictionary: [],

    localTimeout: async(name, time) => {
        await new Promise(resolve => setTimeout(resolve, time));
        keybook.localDelete(name);
    },

    sessionTimeout: async(name, time) => {
        await new Promise(resolve => setTimeout(resolve, time));
        keybook.sessionDelete(name);
    },

    localStore: (name, content, type, optionalTimeout) => {
        if(localStorage[name]) {
            console.error("Error: The item "+name+" already exists. Use 'localEdit' instead."); 
            return;
        }

        if (optionalTimeout) keybook.localTimeout(name, optionalTimeout);

        switch(type) {
            case "string":
                localStorage[name] = JSON.stringify(["string", content]);
                keybook.localDictionary.push(name);
                break;
            case "boolean":
                content ? localStorage[name] = JSON.stringify(["boolean", 1]) : localStorage[name] = JSON.stringify(["boolean", 0]);
                keybook.localDictionary.push(name);
                break;
            case "number":
                localStorage[name] = JSON.stringify(["number", content.toString()]);
                keybook.localDictionary.push(name);
                break;
            case "object":
                localStorage[name] = JSON.stringify(["object", JSON.stringify(content)]);
                keybook.localDictionary.push(name);
        }
    },

    localGet: (name, type) => {
        if(!localStorage[name]) {
            console.error("Error: The item "+name+" is not defined."); 
            return;
        }

        switch(type) {
            case "string":
                if (JSON.parse(localStorage[name])[0] == "string") {
                    return JSON.parse(localStorage[name])[1];
                }
                break;
            case "boolean":
                if (JSON.parse(localStorage[name])[0] == "boolean") {
                    var b = false;
                    JSON.parse(localStorage[name])[1] == "1" ? b = true : b = false;
                    return b;
                }
                break;
            case "number":
                if (JSON.parse(localStorage[name])[0] == "number") {
                    return Number(JSON.parse(localStorage[name])[1]);
                }
                break;
            case "object":
                if (JSON.parse(localStorage[name])[0] == "object") {
                    return JSON.parse(JSON.parse(localStorage[name])[1]);
                }
                break;
            default:
                console.error("Error: Incorrect property. Use 'localGetRaw' instead."); 
        }
    },

    localGetRaw: (name) => { return localStorage[name] },

    localEdit: (name, content, type) => {
        switch(type) {
            case "string":
                localStorage[name] = JSON.stringify(["string", content]);
                break;
            case "boolean":
                content ? localStorage[name] = JSON.stringify(["boolean", 1]) : localStorage[name] = JSON.stringify(["boolean", 0]);
                break;
            case "number":
                localStorage[name] = JSON.stringify(["number", content.toString()]);
                break;
            case "object":
                localStorage[name] = JSON.stringify(["object", JSON.stringify(content)]);
                break;
            default:
                console.error("Error: Incorrect property."); 
        }
    },

    sessionStore: (name, content, type, optionalTimeout) => {
        if(sessionStorage[name]) {
            console.error("Error: The item "+name+" already exists. Use 'sessionEdit' instead."); 
            return;
        }

        if (optionalTimeout) keybook.sessionTimeout(name, optionalTimeout);

        switch(type) {
            case "string":
                sessionStorage[name] = JSON.stringify(["string", content]);
                keybook.sessionDictionary.push(name);
                break;
            case "boolean":
                content ? sessionStorage[name] = JSON.stringify(["boolean", 1]) : sessionStorage[name] = JSON.stringify(["boolean", 0]);
                keybook.sessionDictionary.push(name);
                break;
            case "number":
                sessionStorage[name] = JSON.stringify(["number", content.toString()]);
                keybook.sessionDictionary.push(name);
                break;
            case "object":
                sessionStorage[name] = JSON.stringify(["object", JSON.stringify(content)]);
                keybook.sessionDictionary.push(name);
                break;
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
                if (JSON.parse(sessionStorage[name])[0] == "string") {
                    return JSON.parse(sessionStorage[name])[1];
                }
                break;
            case "boolean":
                if (JSON.parse(sessionStorage[name])[0] == "boolean") {
                    var b = false;
                    JSON.parse(sessionStorage[name])[1] == "1" ? b = true : b = false;
                    return b;
                }
                break;
            case "number":
                if (JSON.parse(sessionStorage[name])[0] == "number") {
                    return Number(JSON.parse(sessionStorage[name])[1]);
                }
                break;
            case "object":
                if (JSON.parse(sessionStorage[name])[0] == "object") {
                    return JSON.parse(JSON.parse(sessionStorage[name])[1]);
                }
                break;
            default:
                console.error("Error: Incorrect property. Use 'sessionGetRaw' instead."); 
        }
    },

    sessionGetRaw: (name) => { return sessionStorage[name] },

    sessionEdit: (name, content, type) => {
        switch(type) {
            case "string":
                sessionStorage[name] = JSON.stringify(["string", content]);
                break;
            case "boolean":
                content ? sessionStorage[name] = JSON.stringify(["boolean", 1]) : sessionStorage[name] = JSON.stringify(["boolean", 0]);
                break;
            case "number":
                sessionStorage[name] = JSON.stringify(["number", content.toString()]);
                break;
            case "object":
                sessionStorage[name] = JSON.stringify(["object", JSON.stringify(content)]);
                break;
            default:
                console.error("Error: Incorrect property."); 
        }
    },

    localClear: () => {
        keybook.localDictionary.forEach((i) => {
            keybook.localDelete(i);
        });
        keybook.localDictionary = [];
    },

    sessionClear: () => {
        keybook.sessionDictionary.forEach((i) => {
            keybook.sessionDelete(i);
        });
        keybook.sessionDictionary = [];
    },

    localDelete: (name) => {
        keybook.localEdit(name, null, "object");
    },

    sessionDelete: (name) => {
        keybook.sessionEdit(name, null, "object");
    }
}