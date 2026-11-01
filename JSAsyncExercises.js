//1
function delayedGreet(name, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Hello, ${name}!`);
        }, delay * 1000);
    });
}

delayedGreet("Alice", 2).then((greeting) => {
    console.log(greeting);
});
const { error } = require('console');
//2
const fs = require('fs');

function readFileContent(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

readFileContent("file.txt")
    .then(content => {
        console.log(content);
    })
    .catch(error => {
        console.error('Error reading file:', error);
    });

//3
function randomOperation() {
    return new Promise((req, res) => {
        const randomNum = Math.random();
        if (randomNum < 0.5) {
            res("Success");
        } else {
            req("Failure");
        }
    })
}
randomOperation().then((result) => {
    console.log(result);

}).catch(error => console.log(error));

//4
function raceTimers() {
    const timerA = new Promise((res) => {
        setTimeout(() => {
            res("Timer 1 finished");
        }, 1000);
    });
    const timerB = new Promise((res) => {
        setTimeout(() => {
            res("Timer 2 finished");
        }, 1000);
    });
    return Promise.race([timerA, timerB]);
}
raceTimers().then((result) => { console.log(result) });

//5
//6
function waitAll() {
    const timerA = new Promise((res) => {
        setTimeout(() => {
            res("First");
        }, 1000);
    });
    const timerB = new Promise((res) => {
        setTimeout(() => {
            res("second");
        }, 2000);
    });
    const timerC = new Promise((res) => {
        setTimeout(() => {
            res("third");
        }, 3000);
    });
    return Promise.all([timerA,timerB,timerC]);

}
waitAll().then(result=>{
    console.log(result);
}).catch(
error => console.log(error)
);

//7
//8
