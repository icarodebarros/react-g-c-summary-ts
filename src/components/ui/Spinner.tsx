import { FC } from 'react';

import classes from './Spinner.module.css';

const Spinner: FC = () => {
  return (
    <div className={classes['spinner-container']}>
      <div className={classes['lds-facebook']}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
export default Spinner;
