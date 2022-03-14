import {
    Routes, Route,
    Navigate
} from 'react-router-dom';
import Amazona from '../components/Amazona';


export const DashboardRoutes = () => {
    return (
        <>
        <div>
            <Routes>
                <Route path="/amazona/:codeproduct" element={<Amazona />} />
                <Route path='*' element={<Navigate to="/" />} />
            </Routes>

        </div>
        </>
    )
}


