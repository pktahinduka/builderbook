/* eslint-disable */

import PropTypes from 'prop-types';
import Link from 'next/link';

import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Hidden from '@material-ui/core/Hidden';

import MenuDrop from './MenuDrop';

import { styleToolbar } from './SharedStyles';

const optionsMenu = [
  {
    text: 'Got question?',
    href: 'https://github.com/builderbook/builderbook/issues',
  },
  {
    text: 'Profile',
    href: '/logout',
  },
  {
    text: 'Log out',
    href: '/logout',
  },
];

function Header({ user }) {
  return (
    <div>
      <Toolbar style={styleToolbar}>
        <Grid item sm={10} xs={9} style={{ textAlign: 'left' }}>
          {user ? (
            <div>
              <Hidden smDown>
                <Link prefetch href="/">
                  <a style={{ marginRight: '20px' }}>Settings</a>
                </Link>
              </Hidden>
            </div>
          ) : (
            <Link prefetch hfer="/">
              <Avatar
                source="https://storage.googleapis.com/builderbook/logo.svg"
                alt="builder book logo"
                style={{ margin: '0px auto 0px 20px' }}
              />
            </Link>
          )}
        </Grid>
        <Grid item sm={1} xs={3} style={{ textAlign: 'right' }}>
          {user ? (
            <div style={{ whiteSpace: 'nowrap' }}>
              {user.avatarUrl ? (
                <MenuDrop options={optionsMenu} src={user.avatarUrl} alt={user.displayName} />
              ) : null}
            </div>
          ) : (
            <Link prefetch href="/login">
              <a style={{ margin: '0px auto 0px 20px' }}>Login</a>
            </Link>
          )}
        </Grid>
      </Toolbar>
    </div>
  );
}

Header.propTypes = {
  user: PropTypes.shape({
    avatarUrl: PropTypes.String,
    displayName: PropTypes.String,
  }),
};

Header.defaultProps = {
  user: null,
};

export default Header;
