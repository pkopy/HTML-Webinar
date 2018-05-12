fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => {insertPost(json)});



const insertPost = (posts) => {
  posts.forEach((post) => {
    postContainer.insertAdjacentHTML(
      'beforeend',
      `<section>
      <h2>${post.title}</h2>
      <div>
        <img src="images/mercedes.png" alt="mercedes">
        <p >
          ${post.body}
          <a href="mercedes.html" class="see-more">Kliknij i zobacz więcej</a>
        </p>
      </div>

      </section>`
  )
    
  });
}

const postContainer = document.querySelector('main');
console.log(postContainer);

