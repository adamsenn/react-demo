// initialize cache
window.myCache = window.myCache || {}
const cache = window.myCache

async function getPostsAsync() {
  if (!cache.posts) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json()
    // need user names to match with posts
    const users = await getUsersAsync()
    // create a hash for fast lookups
    const usersById = {}
    for (const user of users) {
      usersById[user.id] = user
    }
    // update posts with user
    cache.posts = posts.map(p => {
      p.user = usersById[p.userId]
      return p
    })
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
