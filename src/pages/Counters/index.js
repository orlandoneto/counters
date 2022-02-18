import React from 'react';
import { useSelector } from 'react-redux';

import Counter from './components/Counter';
import Footer from './components/Footer';

import { Container, CounterScroll } from './styles';

const Counters = () => {
  const { items } = useSelector(state => state.counter);

  return (
    <>
      <Container>
        <CounterScroll>
          {items.map((item, index) => (
            <Counter key={index} index={index} item={item} />
          ))}
        </CounterScroll>

        <Footer />
      </Container>
    </>
  );
};

export default Counters;
