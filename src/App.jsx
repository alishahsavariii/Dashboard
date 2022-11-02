import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Sidebar from './components/Sidebar'
import Tables from "./components/Tables";
import { Stack } from "@mui/material";

import { useTranslation } from "react-i18next";





function App() {
    const { t, i18n } = useTranslation();
     const changeLanguageHandler = (e) => {
       const languageValue = e.target.value;
       i18n.changeLanguage(languageValue);
     };
  return (
    <>
   

      <Navbar />
      <Stack>
        <Sidebar />
        <Feed />
      </Stack>
    </>
  );
}
export default App;
