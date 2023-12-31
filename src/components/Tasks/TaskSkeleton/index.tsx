import React from 'react';
import ContentLoader from 'react-content-loader';

function TaskSkeleton() {
  return (
    <ContentLoader height="220" width="250" viewBox="0 0 300 230">
      <rect x="15" y="15" rx="4" ry="4" width="300" height="25" />
      <rect x="15" y="50" rx="2" ry="2" width="300" height="150" />
      <rect x="15" y="230" rx="2" ry="2" width="170" height="20" />
      <rect x="60" y="230" rx="2" ry="2" width="170" height="20" />
    </ContentLoader>
  );
}

export default TaskSkeleton;
