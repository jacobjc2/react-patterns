import React from "react";

const CharacterList = ({
  loading,
  error,
  characters,
}) => {
  if (loading && !error) return <div>Loading...</div>;
  if (!loading && error)
    return <div>An error occurred - unable to load characters</div>;
  if (!characters) return null;

  return (
    <ul>
      {characters.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default CharacterList;