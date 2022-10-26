const posts = [
    {title: 'Post one', body: 'This is post one'},
    {title: 'Post two', body: 'This is post two'}
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output =+ `<li>${post.title}<\li>`;
        });
        document.body.innerHTML = output
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        post.push(post)

        const error = false
        if (!error) {
            resolve()
        }
        else{
            reject('Error: Something went wrong')
        }
    }, 2000);
    })
}

createPost({title: 'Post three', body: 'This is post three'})
.then(getPosts)
.catch(err => console.log(err));

// Async / Await / Fetch
async function init() {
    await createPost({title: 'Post three', body: 'This is post three'})

    getPosts();
}

init();

async function fetchUsers() {
    // fetch data should to be formatted so .then needs to be called twice
    const res = await fetch('https://jsonplaceholder.typicode.com/users') 
    
    const data = await res.json
    console.log(data)
}   

fetchUsers()


// Promise.all
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise ((resolve, reject) => {
    setTimeout(resolve, 200, 'Goodbye')
})
const promise4 = fetch('https://jsonplaceholder.typicode.com/users') 
.then(res => res.json)
// fetch data should to be formatted so .then needs to be called twice

Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values))