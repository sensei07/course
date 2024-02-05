import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getUserAuthData } from 'entities/User';
// import { getRouteForbidden, getRouteMain } from 'shared/const/router';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface RequireAuthProps {
    children: JSX.Element;
    // roles?: UserRole[];
}

export const RequireAuth = ({ children }: RequireAuthProps) => {
    const auth = useSelector(getUserAuthData);

    const location = useLocation();
    // const userRoles = useSelector(getUserRoles);

    // const hasRequiredRoles = useMemo(() => {
    //     if (!roles) {
    //         return true;
    //     }
    //
    //     return roles.some((requiredRole) => {
    //         const hasRole = userRoles?.includes(requiredRole);
    //         return hasRole;
    //     });
    // }, [roles, userRoles]);

    if (!auth) {
        return (
            <Navigate to={RoutePath.main} state={{ from: location }} replace />
        );
    }

    // if (!hasRequiredRoles) {
    //     return (
    //         <Navigate
    //             to={getRouteForbidden()}
    //             state={{ from: location }}
    //             replace
    //         />
    //     );
    // }

    return children;
};
