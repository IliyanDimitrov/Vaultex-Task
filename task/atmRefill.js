/* 
    Author: Iliyan Dimitrov
    Date: 08/11/20

    The program will need to verify if the ATM cash refill customer orders are valid based on criteria.

    Each cassette can take up to 2000 notes and is always filled to the max.
    Valid notes - £5, £10, £20, £50
    Max 4 cassettes per order, if no cassette number is given default num = 4;

    Format:
            ['cassettes', 4],
            ['5', 10000],
            ['10', 10000],
            ['20', 10000],
            ['50', 10000]
*/

const validateOrder = order => {

    let cassetteQty = 0;
    let checkFillCapacity = [];

    //Check if we have cassette qty and assign it to a variable 
    if (order[0][0] === 'cassettes' && order[0][1] > 0) {

        cassetteQty = order[0][1];

        //takes out the first element from the array
        order.shift();

    } else if (order[0][1] <= 0) {

        checkFillCapacity = ['error', 'Invalid Cassettes Number or Invalid bank note.'];

    } else {
        cassetteQty = 4;
    }

    //Check if all cassette orders are valid and fill up to capacity
    checkFillCapacity = order.map(el => {
        return cassetteQty <= 4 && el[0] % 5 === 0 ?
            el[1] / el[0] === 2000 ?
                ['valid', 'Order valid, sent for packing'] :
                ['error', `Insufficient amount of ${el[0]} notes`] :
                ['error', 'Invalid Cassettes Number or Invalid bank note.']
    });

    //Gather all order validity messages in one container
    const orderValidityMessages = [...new Set(checkFillCapacity)];

    //In case of error return the error message
        for (let el of orderValidityMessages) {
            if (el[0] === 'error') {
                return el;
            }
        }

    return orderValidityMessages.flat();
}

module.exports = {
    validateOrder
};