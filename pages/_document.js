import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

class Mydocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* was this working */}
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
           
              ym(72187387, "init", {
                   clickmap:true,
                   trackLinks:true,
                   accurateTrackBounce:true,
                   webvisor:true
              });
           </script>
           <noscript><div><img src="https://mc.yandex.ru/watch/72187387" style="position:absolute; left:-9999px;" alt="" /></div></noscript>`,
            }}
          />
          <meta name="google-site-verification" content="UUZectgnSbjlwfqkJjJG8yZmsqc5vfv74JSKisGsa4E" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>

      </Html>
    );
  }
}

export default Mydocument;
