// setTimeout(() => {
//     console.log("2 secs");
// }, 2000);

// const names = ["adam", "rami", "heni"];
// const shortNames = names.filter((name) => {
//     return name.length <= 4;
// });

// const geocode = (adress, callback) => {
//     setTimeout(() => {
//         const data = {
//             lat: 0,
//             long: 0,
//         };
//         callback(data);
//     }, 2000);
// };
// geocode("qsfqsfqs", (data) => {
//     console.log(data);
// });

const add = (x, y, callback) => {
    setTimeout(() => {
        const z = x + y;
        callback(z);
    }, 2000);
};

add(1, 4, (sum) => {
    console.log(sum);
});
