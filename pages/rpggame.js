import React from 'react';

import dynamic from 'next/dynamic'

const PixiApp = dynamic(() => import("../components/RPGame/loadingassetts/PixiApp"), { ssr: false });

export default function rpggame() {
      
  return (
    <div >
        
        
      <PixiApp />
    
    </div>
  );
}
