import React, { useEffect, useState } from 'react'
import { Layout, Spinner } from '@ui-kitten/components'
import ProfileHeader from '../Profile/ProfileHeader/ProfileHeader.component'
import ProfileDetails from '../Profile/ProfileDetails/ProfileDetails.component'
import { Repository } from '../../types/repositories/repository.type'
import useGetRepo from '../../hooks/repositories/useGetRepo.hook'
import RepositoryDetails from './RepositoryDetails/RepositoryDetails.component'
import RepositoryHeader from './RepositoryHeader/RepositoryHeader.component'
import { ScrollView } from 'react-native'

type RepoRendererProps = {
  repo?: Repository
  fetchRepoUrl?: string
}

const RepoRenderer: React.FC<RepoRendererProps> = (props: RepoRendererProps) => {
  const { repo: propsRepo, fetchRepoUrl } = props
  const [repo, setRepo] = useState<Repository | undefined>(propsRepo)
  const [loading, setLoading] = useState<boolean>(!!fetchRepoUrl)
  const { dispatchGetRepo } = useGetRepo()

  useEffect(() => {
    if (fetchRepoUrl) {
      dispatchGetRepo(fetchRepoUrl)
        .then((data) => {
          setRepo(data.data)
        })
        .finally(() => setLoading(false))
    }
  }, [fetchRepoUrl])

  return (() => {
    if (!repo || loading) {
      return (
        <Layout level="2" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Spinner status="primary" />
        </Layout>
      )
    }

    return (
      <Layout level="2" style={{ flex: 1 }}>
        <ScrollView>
          <RepositoryHeader repo={repo} />
          <RepositoryDetails repo={repo} />
        </ScrollView>
      </Layout>
    )
  })()
}

export default RepoRenderer
