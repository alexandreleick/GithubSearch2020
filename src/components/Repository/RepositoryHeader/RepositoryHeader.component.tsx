import { Repository } from '../../../types/repositories/repository.type'
import React from 'react'
import { Text } from 'react-native'
import { RepositoryCard, RepoName, RepoPart, LeftRepoPart, StatDescription, StatValue, Stat, StatisticsPart } from './RepositoryHeader.styled'
import { Avatar } from '@ui-kitten/components'

type RepositoryHeaderProps = {
  repo: Repository
}

const RepositoryHeader: React.FC<RepositoryHeaderProps> = (props: RepositoryHeaderProps) => {
  const { repo } = props

  const isPrivate = (is_private: boolean) => {
    if (!is_private) return 'This repository is public'
    return 'This repository is private'
  }

  const isFork = (is_fork: boolean) => {
    if (!is_fork) return 'This is not a Fork'
    return 'This is a Fork'
  }

    return (
        <RepositoryCard>
            <RepoPart>
                <LeftRepoPart>
                    <RepoName>{repo.name}</RepoName>
                </LeftRepoPart>
            </RepoPart>
            <StatisticsPart>
                <Stat>
                    <StatDescription>Fork</StatDescription>
                    <StatValue>{isFork(repo.private)}</StatValue>
                </Stat>
            </StatisticsPart>
            <StatisticsPart>
                <Stat>
                    <StatDescription>Private / Public</StatDescription>
                    <StatValue>{isPrivate(repo.private)}</StatValue>
                </Stat>
            </StatisticsPart>
            <StatisticsPart>
                <Stat>
                    <StatDescription>Size</StatDescription>
                    <StatValue>{repo.size} MB</StatValue>
                </Stat>
            </StatisticsPart>
            <StatisticsPart>
                <Stat>
                    <StatDescription>Branch</StatDescription>
                    <StatValue>{repo.default_branch}</StatValue>
                </Stat>
            </StatisticsPart>
            <Stat style={{ marginTop: 10 }}>
                <StatDescription>Description</StatDescription>
                <StatValue>{repo.description}</StatValue>
            </Stat>
        </RepositoryCard>
    )
}

export default RepositoryHeader
