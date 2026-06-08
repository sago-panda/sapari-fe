// import React from 'react';
import { Btn } from '../components/atoms';

export default function MainPage() {
  return (
    <div>
      <div>
        <div>vanilla extract text</div>
        <Btn color='primary' size='medium' radius='medium'>
          Primary Button
        </Btn>
        <Btn color='primaryEmpty' size='medium' radius='medium'>
          Primary Empty Button
        </Btn>
        <Btn color='empty' size='medium' radius='medium'>
          Empty Button
        </Btn>
        <Btn color='primary' size='full' radius='round'>
          Full Button
        </Btn>
      </div>
    </div>
  );
}
