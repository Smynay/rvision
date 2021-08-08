import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

export type HeaderPropTypes = { title?: string };

const Header = ({ title }: HeaderPropTypes) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">
          TaskBoard App {title && `- ${title}`}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
