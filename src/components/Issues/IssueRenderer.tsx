import React from 'react'
import { Layout, useTheme } from '@ui-kitten/components'
import { ScrollView, Text } from 'react-native'
import { Issue } from '../../types/issues/issue.type'
import Markdown from 'react-native-markdown-display'

type IssueRendererProps = {
  issue: Issue
}

const IssueRenderer: React.FC<IssueRendererProps> = (props: IssueRendererProps) => {
  const { issue } = props

  return (
    <Layout level="2" style={{ flex: 1, marginHorizontal: 15, marginVertical: 10 }}>
      <ScrollView>
        <Markdown style={{ body: { backgroundColor: '#F4F4F4' } }}>{issue.body}</Markdown>
      </ScrollView>
    </Layout>
  )
}

export default IssueRenderer
