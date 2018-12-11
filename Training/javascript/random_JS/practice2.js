//javascript fetch api how it works and is connnected with practice2.html to see output in console.

const promise1 = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());

promise1.then(values => console.log(values.map((x) => x.name)));

//using Async / Await / with Fetch Api  

async function fetchUserData() {

    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    console.log("users data ", data[0]);

}

fetchUserData();
