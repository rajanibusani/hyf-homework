
//Ex 2 :Promise that resolves after set time
//creating a function that returns a promise
function delay(resolveAfter) {
    const timeLimit = resolveAfter * 1000;
    const promise = new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, timeLimit)
    })
    return promise
}

//using .then promise way
delay(3).then(() => {
    console.log("I am called asynchronously");
})
//using async await function

async function usingAsyncAwait() {
    try {
        await delay(5)
        console.log("I am called asynchronously using async and await function")
    } catch (error) {
        console.log(error)
    }
}
usingAsyncAwait();

//ex3

function setTimeoutPromise(time) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, time)
    })
}
setTimeoutPromise(3000).then(() => {
    console.log("Called after 3 seconds using setTimeoutPromise");
})
// getting current position using promise

function getCurrentLocation() {
    const locationPromise = new Promise((resolve, reject) => {

        navigator.geolocation.getCurrentPosition((position) => resolve(position), (error) => reject(error));
    })
    return locationPromise;
}


getCurrentLocation().then(position => {
    const latitude = position.coords.latitude.toFixed(3);
    const longitude = position.coords.longitude.toFixed(3);
    console.log(`Latitude : ${latitude}, Longitude : ${longitude}`);
}).catch(error => {
    console.log(error);
})


//ex4 : Fetching and waiting

const newPromise = new Promise(resolve => {
    setTimeout(() => {
        resolve()
    }, 3000)
})
    .then(() => {
        fetch('https://yesno.wtf/api')
            .then(response => response.json())
            .then(data => console.log("Using Promise .then way :", data.answer))
    })

async function usingAsync() {
    try {
        await newPromise;
        const fetchdata = await fetch('https://yesno.wtf/api')
        const jsonobject = await fetchdata.json()
        console.log("Using Promise async await function :", jsonobject.answer)
    } catch (error) {
        console.log(error)
    }

}
usingAsync();




