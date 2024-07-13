import { Provider } from "react-redux";
import Body from "./Components/Body";
import Head from "./Components/Head";
import store from "./Utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Components/Main";
import WatchPage from "./Components/watchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <Head />
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
