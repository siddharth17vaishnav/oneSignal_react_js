import { useEffect } from "react";
import "./App.css";

function App() {
  window.OneSignal = window.OneSignal || [];
  const OneSignal = window.OneSignal;
  const runOneSignal = async () => {
    console.log("CALLED");
    await OneSignal.init({
      appId: "3543ba7b-51e2-4505-a0b7-6a4ba20d6541",
      allowLocalhostAsSecureOrigin: true,
      serviceWorkerParam: { scope: "/public/OneSignalSDKWorker.js" },
    });
    OneSignal.showNativePrompt();
  };
  // useEffect(() => {
  //   runOneSignal();
  // }, []);
  return (
    <div className="App" onClick={runOneSignal}>
      HELLO
    </div>
  );
}

export default App;
