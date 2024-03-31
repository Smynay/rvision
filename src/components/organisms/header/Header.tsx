import { AppBar, Toolbar, Typography } from '@material-ui/core';

export type HeaderPropTypes = { title?: string };

const Header = ({ title }: HeaderPropTypes) => {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* TODO: Add sidebar */}
        {/* <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton> */}
        <Typography variant="h6">
          TaskBoard App {title && `- ${title}`}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
