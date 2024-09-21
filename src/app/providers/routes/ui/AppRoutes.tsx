import { Route, Routes } from "react-router-dom";
import { RouteConfig } from "shared/config/routeConfig/routeConfig";

export function AppRoutes() {
    return (
        <Routes>
            {Object.values(RouteConfig).map(({path, element}) => 
                <Route key={path} path={path} element={element} />
            )}
        </Routes>
    )
}