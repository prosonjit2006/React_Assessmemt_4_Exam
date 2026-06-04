import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";

import Router from "./Routes/Router";
import ReduxProvider from "./services/helper/provider/ReduxProvider";

const App = () => {
  return (
    <ReduxProvider>
      <Toaster position="top-right" richColors closeButton />
      <RouterProvider router={Router} />
    </ReduxProvider>
  );
};

export default App;
