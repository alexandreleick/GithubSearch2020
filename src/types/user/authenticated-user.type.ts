export type AuthenticatedUser = {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  name: string
  company: string
  blog: string
  location: string
  email: string
  bio: string
  followers: number
  public_repos: number
  total_private_repos: number
  owned_private_repos: number

  // Urls
  repos_url: string
  followers_url: string
  following_url: string
}
