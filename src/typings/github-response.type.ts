export interface GithubResponse<T> {
  incomplete_results: boolean
  items: T
}
