import { Box, Container } from '@material-ui/core';

import Footer from 'components/organisms/footer/Footer';
import Header, { HeaderPropTypes } from 'components/organisms/header/Header';

import './DefaultLayout.scss';

export type DefaultLayoutNestedPropTypes = HeaderPropTypes;

export type DefaultLayoutPropTypes = DefaultLayoutNestedPropTypes & {
  children: React.ReactElement;
};

const DefaultLayout = ({ children, title }: DefaultLayoutPropTypes) => {
  return (
    <div className="app-content-wrapper">
      <Header title={title} />
      <Box component="main" py={4}>
        <Container className="main-content-wrapper" maxWidth="md">
          {children}
        </Container>
      </Box>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
