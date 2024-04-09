fetch("http://localhost:3000/posts")
  .then((response) => response.json())
  .then((data) => {
    const postsDiv = document.getElementById("posts");
    data.forEach((post) => {
      const postDiv = document.createElement("div");
      postDiv.classList.add("card");
      postDiv.innerHTML = `<h2>${post.title}</h2><p>Views: ${post.views}</p>`;
      postsDiv.appendChild(postDiv);
    });
  });
