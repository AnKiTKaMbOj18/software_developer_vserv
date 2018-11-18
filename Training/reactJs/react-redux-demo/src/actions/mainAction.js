

export default function incDecNum(e) {
    switch (e.target.name) {
        case "add":
            return {
                type: "ADD",
                payload: {val:1}
            }
            break;
        case "sub":
            return {
                type: "SUB",
                payload: {val:1}
            }
            break;
            default:
            return {
            }
    }
}

