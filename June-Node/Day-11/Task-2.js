async function fetchUsersAndPosts(urls) {
  const promised = urls.map(async (url) => {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed API");
    }

    return response.json();
  });

  const result = await Promise.all(promised);

  const users = result[0].map((user) => {
    const userPosts = result[1].filter(
      (post) => post.userId === user.id
    );

    return {
      user: user.username,
      totalPosts: userPosts.length
    };
  });

  return users;
}

fetchUsersAndPosts([
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts"
])
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });