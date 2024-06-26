// const fn = () => {
//     return new Promise((resolve, reject) => {
//         resolve("I am resolved");
//         // Uncomment the next line to see how the catch block works
//         reject("Something went wrong");
//     });
// };

// // Call the function and handle the promise
// fn()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.error(err);
//     });





// let isWin = false;
let isWin = true;

const cricket = () => {
    return new Promise((resolve, reject) => {
        if (isWin) {
            resolve("gareebo jeet gayi bado bady ");
        } else {
            reject("gareebo ghar jao ");
        }
    });
};

// Call the function and handle the promise
cricket()
    .then((res) => {
        console.log(res);
        console.log("player of the match");
        return "ARK"
    })
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.error(err);
    });
