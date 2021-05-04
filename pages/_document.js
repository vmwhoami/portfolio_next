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
          <YMInitializer
            accounts={[77676457]}
            options={{
              clickmap: true,
              trackLinks: true,
              accurateTrackBounce: true,
              webvisor: true,
            }}
            version="2"
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
