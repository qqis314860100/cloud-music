import React from 'react';
import { renderRoutes } from 'react-router-config';

function Recommend(props) {
  const { route } = props;
  return (
    <div>
      <div>Recommend</div>
      <div>{renderRoutes(route.routes)}</div>
    </div>
  );
}

export default React.memo(Recommend);
