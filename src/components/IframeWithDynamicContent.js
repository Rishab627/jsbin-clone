import React, { useRef, useEffect } from 'react';
import { Outlet } from 'react-router';

const IframeWithDynamicContent = ({ htmlContent }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      const doc = iframe.contentDocument || iframe.contentWindow.document;
      doc.open();
      doc.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            /* Add any styles you want */
          </style>
        </head>
        <body>
          ${htmlContent}
        </body>
        </html>
      `);
      doc.close();
    }
  }, [htmlContent]);

  return (
    <div>
       <iframe
      ref={iframeRef}
      style={{ width: '100%', height: '100%', border: 'none' }}
      title="Dynamic Content"
    />

    <Outlet/>
    </div>
   
  );
};

export default IframeWithDynamicContent;
