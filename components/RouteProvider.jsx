'use client'

import PrivateRoute from "./PrivateRoute";

const RouteProvider = ( { children } ) => {

return (
<PrivateRoute>
{children}
</PrivateRoute>
)
}

export default RouteProvider

