import { FC, PropsWithChildren } from 'react';

import MainNavigation from './MainNavigation';

import classes from './Layout.module.css';

const Layout: FC<PropsWithChildren> = (props) => {
  return (
    <div className={classes.layout}>
      <MainNavigation />
      <main className={classes.main}>
        {props.children}
      </main>
    </div>
  );
};
export default Layout;
