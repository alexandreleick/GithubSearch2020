import React, { useEffect, useState } from 'react'
import useFindProfileRepositories from '../../../hooks/user/useFindProfileRepositories.hook'
import { Repository } from '../../../types/repositories/repository.type'
import { Spinner } from '@ui-kitten/components'
import { ProfileRepositoriesTab } from './ProfileRepositories.styled'
import { User } from '../../../types/user/user.type'
import { FlatList, useWindowDimensions } from 'react-native'
import RepositoryCard from '../shared/RepositoryCard/RepositoryCard.component'
import { useSelector } from 'react-redux'
import { selectUser } from '../../../redux/user/selectors'

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
  const loggedUser: User = useSelector(selectUser)

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

  return (
    <ProfileRepositoriesTab>
      {loading ? (
        <Spinner status="primary" />
      ) : (
        <FlatList
          style={{ height: height / 2 - 70, marginBottom: 80 }}
          data={dataSource}
          renderItem={({ item }) => (
            <RepositoryCard
              repo={item.repo}
              routeName={loggedUser?.login != user.login ? 'SearchRepo' : 'ProfileRepo'}
            />
          )}
          numColumns={1}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </ProfileRepositoriesTab>
  )
}

export default ProfileRepositories
