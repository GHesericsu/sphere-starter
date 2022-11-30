import type { NextPage } from "next";
import Head from "next/head";
import { SubscriptionView } from "views/subscription";

const Subscription: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Subscription</title>
        <meta
          name="Subscription"
          content="Subscription"
        />
      </Head>
      <SubscriptionView />
    </div>
  );
};

export default Subscription;