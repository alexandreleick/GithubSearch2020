import React from 'react'
import { Layout, Text } from '@ui-kitten/components'
import { ScrollView } from 'react-native'
import { Issue } from '../../types/issues/issue.type'
import Markdown from 'react-native-markdown-display'

type IssueRendererProps = {
  issue: Issue
}

const IssueRenderer: React.FC<IssueRendererProps> = (props: IssueRendererProps) => {
  const { issue } = props

  return (
    <Layout level="2" style={{ flex: 1, marginVertical: 10 }}>
      <ScrollView style={{ backgroundColor: '#F4F4F4' }}>
        <Text category="h6" style={{ marginHorizontal: 15 }}>
          {issue.title}
        </Text>
        <Markdown style={{ body: { marginTop: 20, paddingHorizontal: 15 } }}>{issue.body}</Markdown>
      </ScrollView>
    </Layout>
  )
}

export default IssueRenderer
