pc.script.createLoadingScreen(function (app) {
    var showSplash = function () {
        // splash wrapper
        var wrapper = document.createElement('div');
        wrapper.id = 'application-splash-wrapper';
        document.body.appendChild(wrapper);

        // splash
        var splash = document.createElement('div');
        splash.id = 'application-splash';
        wrapper.appendChild(splash);
        splash.style.display = 'none';

        var lockup = document.createElement('div');
        lockup.classList.add("lockup");
        var closeenough = document.createElement('img');
        var hbo = document.createElement('img');
        // closeenough.src = 'https://ladder-world.s3.amazonaws.com/close-enough-presents.png';
        closeenough.src = '/images/close-enough-presents.png';
        closeenough.classList.add('close-enough');
        // hbo.src = 'https://ladder-world.s3.amazonaws.com/max-originals-logo.png';
        // hbo.src = '/images/max-originals-logo.png';
        // hbo.classList.add('hbo');
    
        
        lockup.appendChild(closeenough);
        // lockup.appendChild(hbo);
        
        
        var logo = document.createElement('img');
        
        // https://dev.closeenough.data.hbo.com
        // logo.src = 'https://ladder-world.s3.amazonaws.com/ladderworldLogo.png';
        logo.src = '/images/ladderworldLogo.png';
        logo.classList.add("logo");
        
        splash.appendChild(lockup);
        splash.appendChild(logo);
        
        var characters = document.createElement('img');
        
        // https://dev.closeenough.data.hbo.com
        // characters.src = "https://ladder-world.s3.amazonaws.com/Characters.png";
        characters.src = '/images/Characters.png';
        characters.classList.add("characters");
        splash.appendChild(characters);
        
        logo.onload = function () {
            splash.style.display = 'block';
        };

        var container = document.createElement('div');
        container.id = 'progress-bar-container';
        splash.appendChild(container);

        var bar = document.createElement('div');
        bar.id = 'progress-bar';
        container.appendChild(bar);

    };

    var hideSplash = function () {
        var splash = document.getElementById('application-splash-wrapper');
        splash.parentElement.removeChild(splash);
    };

    var setProgress = function (value) {
        var bar = document.getElementById('progress-bar');
        if(bar) {
            value = Math.min(1, Math.max(0, value));
            bar.style.width = value * 100 + '%';
        }
    };

    var createCss = function () {
        var css = [
            'body {',
            '    background-color: #283538;',
            '}',

            '#application-splash-wrapper {',
            '    position: absolute;',
            '    top: 0;',
            '    left: 0;',
            '    height: 100%;',
            '    width: 100%;',
            '    background-color: rgba(7, 10, 33, 0.9);',
            '}',
            '#application-splash {',
            '    position: absolute;',
            '    top: calc(50% - 28px);',
            '    width: 290px;',
            '    left: calc(50% - 132px);',
            '}',

            '#application-splash .logo {',
            '    width: 100%;',
            '}',
            '#progress-bar-container {',
            '    margin: 20px auto 0 auto;',
            '    height: 2px;',
            '    width: 100%;',
            '    background-color: rgba(253, 253, 255, 0.1);',
            '}',
            '.characters {',
            '    position: fixed;',
            '    bottom: 0;',
            '    left: 0;',
            '    width: 700px;',
            '    margin-left: calc(50% - 350px)',
            '}',
            '#progress-bar {',
            '    width: 0%;',
            '    height: 100%;',
            '    background-color: #ff00d6;',
            '}',
            '@media (max-width: 480px) {',
            '    #application-splash {',
            '        width: 170px;',
            '        left: calc(50% - 85px);',
            '    }',
            '   .characters {',
            '       width: 500px;',
            '       margin-left: calc(50% - 250px)',
            '    }',
            '}',
            '.lockup {',
            '   margin-bottom: 16px;',
            '}',
            '.close-enough {',
            '   width: 100%;',
            '   margin-right: 20px;',
            '}'
        ].join("\n");

        var style = document.createElement('style');
        style.type = 'text/css';
        if (style.styleSheet) {
          style.styleSheet.cssText = css;
        } else {
          style.appendChild(document.createTextNode(css));
        }

        document.head.appendChild(style);
    };


    createCss();

    showSplash();
        
    app.on('preload:end', function () {
        app.off('preload:progress');
    });
    app.on('preload:progress', setProgress);
    app.on('start', hideSplash);
});