const fs = require('fs');
let code = fs.readFileSync('styles/place-web.css', 'utf8');

code = code.replace(/\.hero picture img \{[\s\S]*?aspect-ratio\:[\s\S]*?object-position\: center;\n    \}/m, `
    .hero, .hero picture {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .hero picture img {
        width: 100%;
        height: 100%;
        object-fit: fill;
    }`);

fs.writeFileSync('styles/place-web.css', code);
