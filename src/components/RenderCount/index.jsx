import React, { useRef } from 'react';

const RenderCount = ({ form }) => {
  const renders = useRef(0);

  return (
    <span>
      {form ? 'Form render count:' : 'Render count:'} {++renders.current}
    </span>
  );
};

export default RenderCount;
