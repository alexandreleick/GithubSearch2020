import React from 'react'
import IssueRenderer from '../../components/Issues/IssueRenderer'
import { useRoute } from '@react-navigation/native'

const IssueScreen: React.FC = () => {
  const { params } = useRoute()

  return <IssueRenderer issue={params['issue']} />
}

export default IssueScreen
