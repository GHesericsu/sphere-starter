import type { NextPage } from "next";
import Head from "next/head";
import { SubscriptionView } from "views/subscription";

const Product: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Product</title>
        <meta
          name="Product"
          content="Product"
        />
      </Head>
      Add Product here
    </div>
  );
};

export default Product;