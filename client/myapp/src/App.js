import React from 'react';
import { Outlet, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Home, Login, Profile, Register, ResetPassword } from './pages';
import { useSelector } from 'react-redux';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by error boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong. Please try again later.</div>;
    }

    return this.props.children;
  }
}

function Layout() {
  const {user} = useSelector((state)=>state.user); // Assuming you'll set this dynamically
  const location = useLocation();

  return user?.token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

function App() {
  const {theme}=useSelector((state)=>state.theme);
  console.log(theme);
  return (
    
      <div data-theme={theme} className='w-full min-h-[100vh]'>
        {/* <h1 className="bg-red-500">App pages </h1> */}
        <ErrorBoundary>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/profile/:id?" element={<Profile />} />
            </Route>

            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Routes>
        </ErrorBoundary>
      </div>
   
  );
}

export default App;
