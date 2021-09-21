import React from 'react';
import { Theme, useTheme } from 'src/Context/ThemeContex';

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();
  console.log(theme);

  return (
    <div>
      <button onClick={() => setTheme(Theme.Dark)}>
        switch to dark theme
      </button>
        my page
      </div>
  )
}

export default ToggleTheme;