import SavedUsers from './pages/SavedUsers';
import HomePage from './pages/HomePage';
import './styles.css';
import { Navigate, Route, Routes } from "react-router-dom";

// main routes
var pages = [
  { name: "Random Users", path: "/", component: HomePage, icon: "" },
  { name: "Saved Users", path: "/saved", component: SavedUsers, icon: "" },
];

function App(props) {
  return (
    <div 
      style={{
        height: `${props.height}`,
        width: '100%',
        paddingTop:'40px'
      }}
    >
    <Routes>
      {pages.map((prop, key) => {
        var ElementPage = prop.component;
        return (
            <Route
                key={key}
                path={prop.path}
                element={
                    <ElementPage />
                }
            />
        );
      })}
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes >
    </div>
  );
}

export default App;
