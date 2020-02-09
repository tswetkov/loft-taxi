import React from 'react';
import { makeStyles, Button } from '@material-ui/core';
import { WithBackground } from 'components/layout/WithBackground/WithBackground';
import { CardWrapper } from 'components/layout/CardWrapper/CardWrapper';
import { FrontSideCard } from 'components/Card/FrontSideCard';
import { BackSideCard } from 'components/Card/BackSideCard';

const useStyles = makeStyles({
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '60px 75px 70px',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
    marginTop: '160px',
  },
  typography: {
    textAlign: 'center',
    marginBottom: '50px',
  },
  title: {
    fontSize: '36px',
    fontWeight: 700,
    color: '#323232',
    margin: 0,
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '16px',
    fontWeight: 400,
    color: '#505050',
  },
  cardsWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: '50px',
    width: '794px',
  },
});

export const ProfilePage: React.FC = () => {
  const styles = useStyles();

  return (
    <section data-testid="profile-page">
      <WithBackground>
        <div className={styles.content}>
          <div className={styles.typography}>
            <h2 className={styles.title}>Профиль</h2>
            <span className={styles.subtitle}>Способ оплаты</span>
          </div>

          <div className={styles.cardsWrapper}>
            <CardWrapper>
              <FrontSideCard />
            </CardWrapper>
            <CardWrapper>
              <BackSideCard />
            </CardWrapper>
          </div>
          <Button color="primary" variant="contained">
            Сохранить
          </Button>
        </div>
      </WithBackground>
    </section>
  );
};
