import React, { useEffect, useState } from 'react'
import useFindProfileRepositories from '../../../hooks/user/useFindProfileRepositories.hook'
import { Repository } from '../../../types/repositories/repository.type'
import { Icon, Spinner } from '@ui-kitten/components'
import { textEmoji } from 'markdown-to-text-emoji'
import {
  LanguageContainer,
  LanguageName,
  ProfileRepositoriesTab,
  RepositoryCard,
  RepositoryDescription,
  RepositoryHead,
  RepositoryName,
  RepositoryNameContainer,
} from './ProfileRepositories.styled'
import * as languageColor from '../../../utils/language-colors.json'
import Badge from '../../Badge/Badge.component'
import { GithubLanguagesColor } from '../../../types/github-languages-color.type'
import { User } from '../../../types/user/user.type'
import { FlatList, useWindowDimensions, View } from 'react-native'
import { FollowerAvatar, FollowerCard } from '../ProfileFollowers/ProfileFollowers.styled'
import { FollowerFollowing } from '../../../types/user/follower-following.type'

type DataSourceProps = {
  id: number
  repo: Repository
}

type ProfileRepositoriesProps = {
  user: User
}

const ProfileRepositories: React.FC<ProfileRepositoriesProps> = (props: ProfileRepositoriesProps) => {
  const { user } = props
  const { data, loading, error } = useFindProfileRepositories(user)
  const [dataSource, setDataSource] = useState<DataSourceProps[]>([])
  const { height } = useWindowDimensions()

  useEffect(() => {
    if (!data) return
    setDataSource(
      data.map((repo: Repository, index: number) => {
        return {
          repo,
          id: index,
        } as DataSourceProps
      }),
    )
  }, [data])

  // Get color of the github language
  const getLanguageColor = (language: string) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const languageTs: GithubLanguagesColor = languageColor
    if (languageTs[language]) {
      return languageTs[language]['color'] || 'grey'
    }

    return 'grey'
  }

  return (
    <ProfileRepositoriesTab>
      {loading ? (
        <Spinner status="primary" />
      ) : (
        <FlatList
          style={{ height: height / 2 - 70, marginBottom: 80 }}
          data={dataSource}
          renderItem={({ item }) => (
            <RepositoryCard key={item.repo.node_id}>
              <RepositoryHead>
                <RepositoryNameContainer>
                  {item.repo.private && <Icon name="lock-outline" />}
                  <RepositoryName>{item.repo.name}</RepositoryName>
                </RepositoryNameContainer>
                <RepositoryDescription>{textEmoji(item.repo.description || '')}</RepositoryDescription>
              </RepositoryHead>
              <LanguageContainer>
                <Badge color={getLanguageColor(item.repo.language)} />
                <LanguageName>{item.repo.language}</LanguageName>
              </LanguageContainer>
            </RepositoryCard>
          )}
          numColumns={1}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </ProfileRepositoriesTab>
  )
}

export default ProfileRepositories
