import Document, {
  DocumentContext,
  Head,
  Main,
  NextScript,
  Html,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

interface MyAppProps {
  styleTags: React.ReactElement[];
}

export default class MyDocument extends Document<MyAppProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();

    function handleCollectStyles(App: any) {
      return (props: any) => {
        return sheet.collectStyles(<App {...props} />);
      };
    }

    const page = ctx.renderPage((App) => handleCollectStyles(App));
    const styleTags = sheet.getStyleElement();
    const initialProps = await Document.getInitialProps(ctx);

    return { ...page, styleTags, ...initialProps };
  }

  render() {
    return (
      <Html>
        <title>OpenDispute.ai</title>
        <Head>{this.props.styleTags}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
