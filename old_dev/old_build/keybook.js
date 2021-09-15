/* Core */
class keybook {
    static jstr = JSON.stringify;
    static jprs = JSON.parse;
    static error_alreadyExists = (name) => { return "Error: The item "+name+" already exists." };
    static error_notFound = (name) => { return "Error: The item "+name+" do not exists." }
    static error_notCorrectType = "The called item does not match its current type.";
    static error_incorrectProperty = (type) => { return "Error: The property "+type+" is invalid."}

    /* SessionStorage Operations */
    static sessionStore(name, content, type) {
        sessionStorage[name] != null ? ()=>{console.error(error_alreadyExists(name)); type="cancel"} : ()=>{}
        switch(type) {
            case "string":
                sessionStorage[name] = keybook.jstr(["string", content]);
                break;
            case "boolean":
                content ? sessionStorage[name] = keybook.jstr(["boolean", 1]) : sessionStorage[name] = keybook.jstr(["boolean", 0]);
                break;
            case "number":
                sessionStorage[name] = keybook.jstr(["number", content.toString()]);
                break;
            case "object":
                sessionStorage[name] = keybook.jstr(["object", content]);
                break;
            case "cancel":
                return;
            default:
                console.error(error_incorrectProperty(type)); 
        }
    }

    static sessionGet(name, type) {
        sessionStorage[name] != null ? ()=>{console.error(error_notFound(name)); type="cancel"} : ()=>{}
        let parsed = keybook.jprs(sessionStorage[name]);
        switch(type) {
            case "string":
                if(parsed[0] == "string") return parsed[1];
                else console.error(error_notCorrectType);
                break;
            case "boolean":
                var b;
                if(parsed[0] == "boolean") parsed[1] == "1" ? b = true : b = false;
                else { console.error(error_notCorrectType); break; }
                return b;
            case "number":
                if(parsed[0] == "number") return Number(parsed[1]);
                else console.error(error_notCorrectType);
                break;
            case "object":
                if(parsed[0] == "object") return keybook.jprs(parsed[1]);
                else console.error(error_notCorrectType);
                break;
            case "cancel":
                return;
            default:
                console.error(error_incorrectProperty(type));
        }
    }

    static sessionDelete(name) {
        sessionStorage[name] = undefined;
    }

    static sessionEdit(name, content, type) {
        this.sessionDelete(name);
        this.sessionStore(name, content, type);
    }

    /* LocalStorage Operations */

    static localStore(name, content, type) {
        localStorage[name] != null ? ()=>{console.error(error_alreadyExists(name)); type="cancel"} : ()=>{}
        switch(type) {
            case "string":
                localStorage[name] = keybook.jstr(["string", content]);
                break;
            case "boolean":
                content ? localStorage[name] = keybook.jstr(["boolean", 1]) : localStorage[name] = keybook.jstr(["boolean", 0]);
                break;
            case "number":
                localStorage[name] = keybook.jstr(["number", content.toString()]);
                break;
            case "object":
                localStorage[name] = keybook.jstr(["object", content]);
                break;
            case "cancel":
                return;
            default:
                console.error(error_incorrectProperty(type)); 
        }
    }

    static localGet(name, type) {
        localStorage[name] != null ? ()=>{console.error(error_notFound(name)); type="cancel"} : ()=>{}
        let parsed = keybook.jprs(localStorage[name]);
        switch(type) {
            case "string":
                if(parsed[0] == "string") return parsed[1];
                else console.error(error_notCorrectType);
                break;
            case "boolean":
                var b;
                if(parsed[0] == "boolean") parsed[1] == "1" ? b = true : b = false;
                else { console.error(error_notCorrectType); break; }
                return b;
            case "number":
                if(parsed[0] == "number") return Number(parsed[1]);
                else console.error(error_notCorrectType);
                break;
            case "object":
                if(parsed[0] == "object") return keybook.jprs(parsed[1]);
                else console.error(error_notCorrectType);
                break;
            case "cancel":
                return;
            default:
                console.error(error_incorrectProperty(type));
        }
    }

    static localDelete(name) {
        localStorage[name] = undefined;
    }

    static localEdit(name, content, type) {
        this.localDelete(name);
        this.localStore(name, content, type);
    }
}