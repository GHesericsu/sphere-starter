import { FC } from "react";
import Subscription from '../../components/Subscription'

export const SubscriptionView: FC = ({ }) => {

  return (
    <div className="md:max-w-[70%] mx-auto p-4">
      <div className="flex-col">
        <h1>Create a Subscription</h1>
        <Subscription/>
      </div>
    </div>
  );
};
