import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Hulu Clone</title>
        <meta
          name="description"
          content="This is a clone of Hulu created using NextJS and Tailwind"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Hello World</h1>

      {/* Header */}
      <Header />
      {/* Navigation */}

      {/* Results */}
    </div>
  );
  ß;
}
