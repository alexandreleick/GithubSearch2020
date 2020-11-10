import React, { useEffect, useState } from 'react'

type RepoRendererProps = {
  repo?: Repo
  fetchRepoUrl?: string
}

const RepoRenderer: React.FC<RepoRendererProps> = (props: RepoRendererProps) => {
  const { repo: propsRepo, fetchRepoUrl } = props
  const [repo, setRepo] = useState<Repo | undefined>(propsRepo)
  const [loading, setLoading] = useState<boolean>(!!fetchRepoUrl)

  useEffect(() => {
    if (fetchRepoUrl) {
      dispatchGetRepo(fetchRepoUrl)
        .then((data) => {
          setRepo(data.data)
        })
        .finally(() => setLoading(false))
    }
  })
}
