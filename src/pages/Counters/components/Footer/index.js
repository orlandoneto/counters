import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, Button, ButtonLabel } from './styles';

const Footer = () => {
  const navigate = useNavigation();

  return (
    <>
      <Container style={Platform.OS !== 'ios' ? { elevation: 1, shadowColor: 'rgba(0, 0, 0, 0.1)' } : ''}>
        <Button accessibilityLabel={'btn-seguir-entrega'} onPress={() => navigate.navigate('Config')}>
          <ButtonLabel>Config</ButtonLabel>
        </Button>
      </Container>
    </>
  );
};

export default Footer;
