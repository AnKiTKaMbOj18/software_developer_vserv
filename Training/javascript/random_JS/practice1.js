//asynchronous javascript using setTimeout, callback,promises,async await javascript methods for 
//asynchronous programming using javascript.as javascript is single threaded 

const posts = [
    { title: "post1", body: "post 1 body" },
    { title: "post2", body: "post 2 body" },
];

function getPost() {
    setTimeout(() => {
        var output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.body}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

//1.using callback function for asynchronous 

// function createPost(post, callback) {
//     setTimeout(() => {
//         posts.push(post);
//         callback();
//     }, 3000);
// }


// createPost({ title: "post 3", body: "post 3 body" }, getPost);

//2.using promise for async

// function createPost(post) {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             posts.push(post);

//             const error=true;

//             if(!error){
//                 resolve();
//             }else{
//                 reject("error: something went wrong!");
//             }

//         }, 2000);
//     });
// }


// createPost({ title: "post 3", body: "post 3 body" })
// .then(getPost)
// .catch(err=>console.log(err));

//3.using async await funcion of javascript

function createPost(post) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            posts.push(post);

            const error=false;

            if(!error){
                resolve();
            }else{
                reject("error: something went wrong!");
            }

        }, 2000);
    });
}

async function init(){
    await createPost({ title: "post 3", body: "post 3 body" });
    getPost();
}

init();

