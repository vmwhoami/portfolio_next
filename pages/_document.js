import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
import { YMInitializer } from 'react-yandex-metrika';
class Mydocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* was this working */}
          <script
            dangerouslySetInnerHTML={{
              __html: `<script type="text/javascript" >
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
           
              ym(77676457, "init", {
                   clickmap:true,
                   trackLinks:true,
                   accurateTrackBounce:true,
                   webvisor:true
              });
           </script>`
            }}
          />

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
