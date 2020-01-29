const cache = window.myCache || {}

async function getPostsAsync() {
  if (!cache.posts) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    cache.posts = await response.json()
  }
  return cache.posts
}

async function getUsersAsync() {
  if (!cache.users) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    cache.users = await response.json()
  }
  return cache.users
}

export { getPostsAsync, getUsersAsync }
