import { type ReactNode } from "react";
import { Provider } from "react-redux";
import { Store } from "../../../store/store";

const ReduxProvider = ({ children }: { children: ReactNode }) => {
  return <Provider store={Store}>{children}</Provider>;
};

export default ReduxProvider;
