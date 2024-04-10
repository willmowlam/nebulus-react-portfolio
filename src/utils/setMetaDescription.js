import { useEffect } from 'react';

const setMetaDescription = (description) => {
  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const newMeta = document.createElement('meta');
      newMeta.setAttribute('name', 'description');
      newMeta.setAttribute('content', description);
      document.head.appendChild(newMeta);
    }
  }, [description]);
};

export default setMetaDescription;
