import React from 'react'
import useFindProfileRepositories from '../../../../../hooks/user/useFindProfileRepositories.hook'
import { Repository } from '../../../../../types/repositories/repository.type'
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
import * as languageColor from '../../../../../utils/language-colors.json'
import Badge from '../../../../../components/Badge/Badge.component'
import { GithubLanguagesColor } from '../../../../../types/github-languages-color.type'
import { User } from '../../../../../types/user/user.type'

type ProfileRepositoriesProps = {
  user: User
}

const ProfileRepositories: React.FC<ProfileRepositoriesProps> = (props: ProfileRepositoriesProps) => {
  const { user } = props
  const { data, loading, error } = useFindProfileRepositories(user)

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
        data.map((repo: Repository) => (
          <RepositoryCard key={repo.node_id}>
            <RepositoryHead>
              <RepositoryNameContainer>
                {repo.private && <Icon name="lock-outline" />}
                <RepositoryName>{repo.name}</RepositoryName>
              </RepositoryNameContainer>
              <RepositoryDescription>{textEmoji(repo.description || '')}</RepositoryDescription>
            </RepositoryHead>
            <LanguageContainer>
              <Badge color={getLanguageColor(repo.language)} />
              <LanguageName>{repo.language}</LanguageName>
            </LanguageContainer>
          </RepositoryCard>
        ))
      )}
    </ProfileRepositoriesTab>
  )
}

export default ProfileRepositories
