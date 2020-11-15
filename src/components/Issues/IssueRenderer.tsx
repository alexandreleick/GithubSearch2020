import React from 'react'
import { Layout } from '@ui-kitten/components'
import { Text } from 'react-native'
import { Issue } from '../../types/issues/issue.type'

type IssueRendererProps = {
  issue: Issue
}

const IssueRenderer: React.FC<IssueRendererProps> = (props: IssueRendererProps) => {
  const { issue } = props

  return (
    <Layout level="2" style={{ flex: 1 }}>
      <Text>{issue.body}</Text>
    </Layout>
  )
}

export default IssueRenderer
