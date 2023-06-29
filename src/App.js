import React from 'react';
import { Card, CardContent, Typography, Grid, Container } from '@mui/material';
import { styled } from '@mui/system';
import './App.css';




const AppContainer = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  animation: 'animatedBackground 3s infinite alternate',
  backgroundImage: 'linear-gradient(135deg, #00BFA5, #4DD0E1)',
  backgroundSize: '400% 400%',
  borderRadius: '0',
  overflow: 'hidden',
  zIndex: -1,
  '@keyframes animatedBackground': {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' },
  },
});





const Heading = styled(Typography)({
  color: '#ffffff',
  marginBottom: '16px',
  textAlign: 'center',
  fontFamily: 'Montserrat, sans-serif',
});

const Subheading = styled(Typography)({
  color: '#ffffff',
  marginBottom: '24px',
  textAlign: 'center',
  fontFamily: 'Roboto, sans-serif',
});

const DashboardCard = styled(Card)({
  background: 'linear-gradient(45deg, #00BFA5, #4DD0E1)',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  transition: 'box-shadow 0.3s ease',
  '&:hover': {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
});

const CardHeading = styled(Typography)({
  color: '#ffffff',
  marginBottom: '8px',
  fontFamily: 'Montserrat, sans-serif',
});

const CardText = styled(Typography)({
  color: '#ffffff',
  marginBottom: '4px',
  fontFamily: 'Roboto, sans-serif',
});

const Dashboard = () => {
  return (
    <Container maxWidth="lg">
      <Heading variant="h4" component="h2">
        Welcome to the NFT Admin Panel!
      </Heading>
      <Subheading variant="subtitle1" component="p">
        This is your space to manage the NFT website.
      </Subheading>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <DashboardCard>
            <CardContent>
              <CardHeading variant="h6" component="h3" gutterBottom>
                Analytics
              </CardHeading>
              <CardText variant="body2" component="p">
                Total NFTs: 100
              </CardText>
              <CardText variant="body2" component="p">
                Total Users: 50
              </CardText>
              <CardText variant="body2" component="p">
                Revenue: $5000
              </CardText>
            </CardContent>
          </DashboardCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <DashboardCard>
            <CardContent>
              <CardHeading variant="h6" component="h3" gutterBottom>
                Manage NFTs
              </CardHeading>
              <CardText variant="body2" component="p">
                Total NFTs: 100
              </CardText>
              <CardText variant="body2" component="p">
                Pending Approvals: 10
              </CardText>
            </CardContent>
          </DashboardCard>
        </Grid>
      </Grid>
    </Container>
  );
};

const App = () => {
  return (
    <AppContainer>
      <Dashboard />
    </AppContainer>
  );
};

export default App;





