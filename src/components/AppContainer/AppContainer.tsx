import React, { useState } from 'react';

import SearchBar from '../SearchBar/SearchBar';
import UserSection from '../UserSection/UserSection';

const AppContainer: React.FunctionComponent = () => {
  const [username, setUsername] = useState<null | string>(null);

  return (
    <>
      <SearchBar setUsername={setUsername} />
      <UserSection username={username} />
    </>
  );
};

export default AppContainer;
