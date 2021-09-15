class keybook {
    /* SessionStorage */
    static store(key, content) {
        switch(typeof content) {
            case "string":
                sessionStorage[key.toString()] = JSON.stringify(["string", content]);
                return content;
            case "boolean":
                if(content) sessionStorage[key.toString()] = JSON.stringify(["boolean", 1]);
                else sessionStorage[key.toString()] = JSON.stringify(["boolean", 0]);
                return content;
            case "number":
                sessionStorage[key.toString()] = JSON.stringify(["number", Number(content)]);
                return content;
            case "object":
                sessionStorage[key.toString()] = JSON.stringify(["object", JSON.stringify(content)]);
                return content;
            default:
                return "<Unknown variable type>"
        }
    }

    static get(key) {
        if(sessionStorage[key.toString()]) {
            try {
                let object = JSON.parse(sessionStorage[key.toString()]);
                switch(object[0]) {
                    case "string":
                        return object[1].toString();
                    case "boolean":
                        if (object[1]) return true;
                        else return false;
                    case "number":
                        return Number(object[1]);
                    case "object":
                        return JSON.parse(object[1]);
                }
            }
            catch {
                return "<Unknown Error>"
            }
        }
    }

    static persist(key, content) {
        switch(typeof content) {
            case "string":
                localStorage[key.toString()] = JSON.stringify(["string", content]);
                return content;
            case "boolean":
                if(content) localStorage[key.toString()] = JSON.stringify(["boolean", 1]);
                else localStorage[key.toString()] = JSON.stringify(["boolean", 0]);
                return content;
            case "number":
                localStorage[key.toString()] = JSON.stringify(["number", Number(content)]);
                return content;
            case "object":
                localStorage[key.toString()] = JSON.stringify(["object", JSON.stringify(content)]);
                return content;
            default:
                return "<Unknown variable type>"
        }
    }

    static fetch(key) {
        if(localStorage[key.toString()]) {
            try {
                let object = JSON.parse(localStorage[key.toString()]);

                switch(object[0]) {
                    case "string":
                        return object[1].toString();
                    case "boolean":
                        if (object[1]) return true;
                        else return false;
                    case "number":
                        return Number(object[1]);
                    case "object":
                        return JSON.parse(object[1]);
                }
            }
            catch {
                return "<Unknown Error>"
            }
        }
    }
}