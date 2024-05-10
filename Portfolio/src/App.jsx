import Layout from "./pages/Layout";
import { Toaster } from "react-hot-toast";
import Background from "./components/Background";

function App() {
  return (
    <>
      {/* 
        Toaster component from react-hot-toast for displaying toast notifications.
        Positioned at the top-center of the screen.
        Default styling and options configured for all toast notifications.
        Success notifications have a shorter duration and a green theme.
        Error notifications have a red background.
      */}
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
      {/* 
        Layout component contains the main content of the application.
        Background component renders a background element behind the main content.
      */}
      <Layout />
      <Background />
    </>
  );
}

export default App;
