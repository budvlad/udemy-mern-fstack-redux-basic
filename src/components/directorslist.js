import React from "react";

const DirectorsList = props => {
  const renderDirectors = directors =>
    directors
      ? directors.map(item => <div key={item.id}>{item.name}</div>)
      : null;
  return <div>{renderDirectors(props.info.directors)}</div>;
};

export default DirectorsList;
