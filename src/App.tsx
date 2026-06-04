import { CssBaseline } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import Router from "./Routes/Router";
import ReduxProvider from "./services/helper/provider/ReduxProvider";

const App = () => {
  return (
    <>
      <ReduxProvider>
        <CssBaseline />
        <Toaster position="top-right" richColors closeButton />
        <RouterProvider router={Router} />
      </ReduxProvider>
    </>
  );
};

export default App;
