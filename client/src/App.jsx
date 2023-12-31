import "./App.css";
import { Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import Layout from "./Layout";
import RegisterPage from "./pages/RegisterPage";
import axios from "axios";
import { UserContextProvider } from "./UserContext";
import ProfilePage from "./pages/ProfilePage";
import PlacesPage from "./pages/PlacesPage";
import PlacesFormPage from "./pages/PlacesFormPage";
import PlacePage from "./pages/PlacePage";

axios.defaults.baseURL = "http://127.0.0.1:4000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<IndexPage></IndexPage>} />
          <Route path="/login" element={<LoginPage></LoginPage>} />
          <Route path="/register" element={<RegisterPage></RegisterPage>} />
          <Route path="/account" element={<ProfilePage></ProfilePage>} />
          <Route path="/account/places" element={<PlacesPage></PlacesPage>} />
          <Route
            path="/account/places/new"
            element={<PlacesFormPage></PlacesFormPage>}
          />
          <Route
            path="/account/places/:id"
            element={<PlacesFormPage></PlacesFormPage>}
          />
          <Route path="/place/:id" element={<PlacePage></PlacePage>} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
