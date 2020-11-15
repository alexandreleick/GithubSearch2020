import React, { useState } from 'react'
import { Repository } from '../../../types/repositories/repository.type'
import { useWindowDimensions } from 'react-native'
import { RepositoryDetailsView } from './RepositoryDetails.styled'
import { Icon, IconProps, Tab, TabView } from '@ui-kitten/components'
import RepositoryContributors from '../RepositoryContributors/RepositoryContributors.component'
import RepositoryIssues from '../RepositoryIssues/RepositoryIssues.component'

type RepositoryDetailsProps = {
  repo: Repository
}

const RepositoryDetails: React.FC<RepositoryDetailsProps> = (props: RepositoryDetailsProps) => {
  const { repo } = props
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const { height } = useWindowDimensions()

  const FollowersIcon = (props: IconProps) => <Icon {...props} name="people-outline" />

  return (
    <RepositoryDetailsView style={{ borderTopColor: '#F4F4F4', borderTopWidth: 1, height: height / 2 + 100 }}>
      <TabView selectedIndex={selectedIndex} onSelect={(index) => setSelectedIndex(index)}>
        <Tab title="Contributors" icon={FollowersIcon}>
          <RepositoryContributors repo={repo} />
        </Tab>
        <Tab title="Issues" icon={FollowersIcon}>
          <RepositoryIssues repo={repo} />
        </Tab>
      </TabView>
    </RepositoryDetailsView>
  )
}

export default RepositoryDetails
