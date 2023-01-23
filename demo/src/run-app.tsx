import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { /* tree-shaking no-side-effects-when-called */App } from './app.js';

import { dummy } from './main/global-debug.js';

const dummy_ = dummy;  // <- needed


(function runApp() {
    // eslint-disable-next-line
    const container = document.getElementById('app');
    const root = createRoot(container!);
    // eslint-disable-next-line
    root.render(<App />);
})();
