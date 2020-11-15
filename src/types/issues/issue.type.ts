import { User } from '../user/user.type'
import { Label } from './label.type'

export type Issue = {
  url: string
  repository_url: string
  labels_url: string
  comments_url: string
  events_url: string
  html_url: string
  id: number
  node_id: string
  number: number
  title: string
  user: User
  labels: Label[]
  state: string
  locked: boolean
  assignee: User
  assignees: User[]
  milestone?: any
  comments: number
  created_at: Date
  updated_at: Date
  closed_at?: any
  author_association: string
  active_lock_reason?: any
  body: string
  performed_via_github_app?: any
}
