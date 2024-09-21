import { Navbar } from 'widgets/Navbar'
import { AppRoutes } from './providers/routes/ui/AppRoutes'
import './styles/index.scss'

export const App = () => {
    return (
        <div className='App'>
                <Navbar />
                <div className='container'>
                    <AppRoutes />
                </div>
        </div>
    )
}