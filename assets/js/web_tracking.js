document.write(
    `
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-82YN6Y6WFX"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-82YN6Y6WFX');
    </script>

    <script>
    'undefined'=== typeof _trfq || (window._trfq = []);'undefined'=== typeof _trfd &&
    (window._trfd=[]),_trfd.push(
    
    {'tccl.baseHost':'$BASEHOST'}, {'ap':'$AP'}, {'server':'$HOSTNAME'}, {'dcenter':'$DCENTER'}, {'id':'$ID'})
    // Monitoring performance to make your website faster. If you want to opt-out, please contact web hosting support.
    </script>
    <script src='https://img1.wsimg.com/traffic-assets/js/tccl.min.js'></script>
    <script src='https://img1.wsimg.com/traffic-assets/js/tccl-tti.min.js' onload='window.tti.calculateTTI()'></script>
    `
)