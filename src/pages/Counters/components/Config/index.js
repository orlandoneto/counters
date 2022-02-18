import React from 'react';
import { useSelector } from 'react-redux';

import ConfigItem from '../ConfigItem';
import CounterFooter from '../CounterFooter';

import { Container, CounterScroll } from './styles';

const Config = () => {
  const { items } = useSelector(state => state.counter);

  return (
    <>
      <Container>
        <CounterScroll>
          {items.map((item, index) => (
            <ConfigItem key={index} index={index} item={item} />
          ))}
        </CounterScroll>

        <CounterFooter total={items.length} />
      </Container>
    </>
  );
};
export default Config;
