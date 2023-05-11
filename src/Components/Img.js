import ImageDesktop from '../../src/image-header-desktop.jpg';
import ImageMobile from '../../src/image-header-mobile.jpg';

import classes from './Img.module.css';

const Img = () => {
  return (
    <div>
      <img className={classes.backgroundDesktop} src={ImageDesktop}></img>
      <div className={classes.backgroundImg}></div>
      <img className={classes.backgroundMobile} src={ImageMobile}></img>
    </div>
  );
};

export default Img;
