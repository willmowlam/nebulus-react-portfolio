import { useEffect } from 'react';

const setDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

export default setDocumentTitle;