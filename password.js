const bcrypt = require('bcrypt');

const hash = "$2b$10$ruVMLbiXAtiL9R4Ol1rNFObT2do3zwYdhfdcVEvMmFPDhoVaMSfV.";
const password = "123456";

bcrypt.compare(password, hash, (err, result) => {
    if (result) {
        console.log("Password is correct!");
    } else {
        console.log("Password is incorrect!");
    }
});
