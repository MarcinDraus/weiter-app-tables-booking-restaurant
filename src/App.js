

import { Container } from 'react-bootstrap';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/views/Footer/Footer';
import Header from './components/views/Header/Header';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import PageTable from './components/pages/PageTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTables } from './Redux/tablesRerdux';

const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchTables());
	}, [dispatch]);

  return (
    <Container>
    <div>
    <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pagetable/:tableId" element={<PageTable />} /> 
          <Route path="*" element={<NotFound />} />
      </Routes>
    <Footer />
    </div>
    </Container>
  );
}

export default App;
