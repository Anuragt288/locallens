
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Footer from './pages/Footer';
import Service from './pages/Services';
import Contact from './pages/Contact';
//import Slider from './pages/Slider';
//import Checkl from './pages/Checkl';

import Dashboard from './pages/owner/Dashboard';
import Members from './pages/owner/Members';
import ManageAccount from './pages/owner/ManageAccount';
import ManageMess from './pages/owner/ManageMess';
import Profile from './pages/owner/Profile';
import OwnerLayout from './layouts/OwnerLayout';
import FoodMenu from './pages/owner/FoodMenu';
import UserLayout from './layouts/UserLayout';
import SearchPg from './pages/user/SearchPg';
import SearchMess from './pages/user/SearchMess';
import UserProfile from './pages/user/UserProfile';
import UserDashboard from './pages/user/UserDashboard';
import PaymentPage from './pages/user/PaymentPage';

const App = () => (
  <div>
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/features" element={<Features />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/services" element={<Service/>} />
      <Route path="/contact" element={<Contact/>} />
      {/* <Route path="/checkl" element={<Checkl/>} /> */}

      <Route path="/owner/*" element={<OwnerLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="members" element={<Members />} />
        <Route path="manage-account" element={<ManageAccount />} />
        <Route path="manage-mess" element={<ManageMess/>} />
        <Route path="foodmenu" element={<FoodMenu />} />
        <Route path="profile" element={<Profile />} />
        </Route>

      <Route path="/user/*" element={<UserLayout />}>
        <Route path="dashboard" element={<UserDashboard />} />
        <Route path="searchpg" element={<SearchPg />} />
        <Route path="searchmess" element={<SearchMess />} />
        <Route path="profile" element={<UserProfile />} />
        <Route path="payment" element={<PaymentPage />} />
      </Route>
    </Routes>
    {/* <Slider /> */}
    {/* <Contact /> */}
    <Footer />
  </div>
);

export default App;
