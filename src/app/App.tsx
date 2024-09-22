import { Navbar } from 'widgets/Navbar'
import { AppRoutes } from './providers/routes/ui/AppRoutes'
import './styles/index.scss'
import { Footer } from 'widgets/Footer'

export const App = () => {
    return (
        <div className='App'>
                <Navbar />
                <div>
                    <AppRoutes />
                </div>
                <Footer />
        </div>
    )
}