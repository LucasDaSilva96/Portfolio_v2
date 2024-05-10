import Layout from "./pages/Layout";
import { Toaster } from "react-hot-toast";
import Background from "./components/Background";

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#2196f3",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
          error: {
            style: {
              background: "red",
            },
          },
        }}
      />
      <Layout />
      <Background />
    </>
  );
}

export default App;
