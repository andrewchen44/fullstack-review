import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.

    {props.repos.map( (repo) => {
      return <div>{repo.url}</div>
    })}
  </div>
)

export default RepoList;