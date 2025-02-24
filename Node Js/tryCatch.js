
function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Divide by 0 is not possible");
        }
        return a / b;
    } catch (err) {
        console.log('Error:', err.message);
        } finally {
        console.log('Thank you');
    }
}


divide(5, 0)
