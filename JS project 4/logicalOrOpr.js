//Comparisons with the Logical Or Operator//

const testLogicalOr = (val) => {
    if (val < 10 || val > 20) {
        return "Outside";
    }
    return "Inside";
}
testLogicalOr(15);