import { Box, Container, Typography } from '@material-ui/core';

const Footer = () => {
  return (
    <Box component="footer">
      <Container maxWidth="lg">
        <Typography variant="caption" component="p" align="center">
          TaskBoard App 2021
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
