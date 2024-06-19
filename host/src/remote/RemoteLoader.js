import React, { useEffect, useState } from 'react';

const RemoteLoader = ({ remote, module }) => {
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    const loadRemoteComponent = async () => {
      try {
        const container = window[remote];
        if (!container) {
          throw new Error(`Container "${remote}" not found.`);
        }

        await container.init(container);
        const factory = await container.get(module);
        const module = factory();

        setComponent(module.default || module);
      } catch (error) {
        console.error('Error loading remote component:', error);
      }
    };

    loadRemoteComponent();
  }, [remote, module]);

  if (!Component) {
    return <div>Loading...</div>;
  }

  return <Component />;
};

export default RemoteLoader;
