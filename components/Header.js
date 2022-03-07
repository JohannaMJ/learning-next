import headerStyles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        Web dev with
        <span> Next</span>
      </h1>
      <p className={headerStyles.description}>
        {' '}
        Keep up to daye witht he latest web dev news
      </p>
    </div>
  );
};

export default Header;
