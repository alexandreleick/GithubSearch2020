import React from 'react'
import { Icon } from '@ui-kitten/components'
import { textEmoji } from 'markdown-to-text-emoji'
import { useNavigation } from '@react-navigation/native'
import {
  LanguageContainer,
  LanguageName,
  RepositoryCardView,
  RepositoryDescription,
  RepositoryHead,
  RepositoryName,
  RepositoryNameContainer,
} from './RepositoryCard.styled'
import { Repository } from '../../../../types/repositories/repository.type'
import { GithubLanguagesColor } from '../../../../types/github-languages-color.type'
import Badge from '../../../Badge/Badge.component'
import * as languageColor from '../../../../utils/language-colors.json'

type RepositoryCardProps = {
  repo: Repository
}

const RepositoryCard: React.FC<RepositoryCardProps> = (props: RepositoryCardProps) => {
  const { repo } = props
  const { navigate } = useNavigation()

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
    <RepositoryCardView
      key={repo.node_id}
      onPress={() => navigate('RepoResult', { repoUrl: repo.url, title: repo.name })}
    >
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
    </RepositoryCardView>
  )
}

export default RepositoryCard
