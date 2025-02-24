console.log("Start");

setImmediate(() => {
    console.log("Executed in setImmediate");
});

console.log("End");

// Output:
// Start
// End
// Executed in setImmediate
