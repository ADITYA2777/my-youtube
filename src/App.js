import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchVideo from "./components/WatchVideo";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer/>,
      },
      {
        path: "watch",
        element:<WatchVideo/>
      },
    ],
  },
  
]);
function App() {

  return (
    <Provider store={store}>
      <div>
        <Head />
      <RouterProvider router={appRouter}/> 
        {/**
         * head
         * body
         *  sidebar
         *   menuitems
         * maincontainer
         *  button list
         *   videoContainer
         *     videocard
         */}
      </div>
    </Provider>
  );
}

export default App;
