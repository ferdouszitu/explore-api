function Loadpost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data))
}
/*step
1. get the container where you want to add the new elements
2. create child element
3. set innerText or HTML
4. appendChid 
 */
function displayPosts(posts) {
    const postContainer = document.getElementById('post-container');
    for (const post of posts) {
        const postDiv = document.createElement('div');
        console.log(post);
        postDiv.classList.add('post');
        postDiv.innerHTML = `
      <h4> user- ${post.id} </h4>
      <h5> Title: ${post.title} </h5>
      <p> Post Description : ${post.body}</p>
      `
        postContainer.appendChild(postDiv);
    }
}
Loadpost()

