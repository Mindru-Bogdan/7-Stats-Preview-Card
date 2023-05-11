import Img from './Img';

import classes from './Card.module.css';

const Card = () => {
  return (
    <div className={classes.card}>
      <div>
        <h1>
          Get <p>insights</p> that help your business grow.
        </h1>
        <p className={classes.mainParagraph}>
          Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and
          overall efficiency.
        </p>
        <div>
          <div className={classes.stats}>
            <h2>10k+</h2> <p className={classes.statHeading}>COMPANIES</p>
          </div>
          <div className={classes.stats}>
            <h2>314</h2> <p className={classes.statHeading}>TEMPLATES</p>
          </div>
          <div className={classes.stats}>
            <h2>12M+</h2> <p className={classes.statHeading}>QUERIES</p>
          </div>
        </div>
        <Img />
      </div>
    </div>
  );
};

export default Card;
