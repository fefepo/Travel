import React, { useState, useEffect } from 'react';  
import { useNavigate, Link } from 'react-router-dom';  
import NavBar from '../pages/NavBar';  
import './MainPage.css';   

const MainPage = () => {   
  const [searchQuery, setSearchQuery] = useState('');   
  const navigate = useNavigate();      

  // 목적지 맵 업데이트   
  const destinations = {     
    paris: '/destination/paris',     
    tokyo: '/destination/tokyo',     
    'new york': '/destination/new york',   
  };    

  // 페이지 로드 시 인증 관련 데이터 지우기 (로그아웃)
  useEffect(() => {     
    // sessionStorage, localStorage, 또는 저장한 토큰을 지웁니다.
    localStorage.removeItem('authToken'); // 또는 sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('authToken'); // 데이터가 저장되지 않도록 함      

  }, []); // 빈 의존성 배열을 사용하여 컴포넌트가 처음 렌더링될 때만 실행됩니다.    

  const handleSearch = () => {     
    const lowerCaseQuery = searchQuery.toLowerCase().trim();     
    if (destinations[lowerCaseQuery]) {       
      navigate(destinations[lowerCaseQuery]);       
      setSearchQuery('');     
    } else {       
      alert('목적지를 찾을 수 없습니다!');     
    }   
  };    

  const handleKeyDown = (e) => {     
    if (e.key === 'Enter') {       
      e.preventDefault();       
      handleSearch();     
    }   
  };    

  return (     
    <div className="main-container">       
      <header className="header">         
        <NavBar />         
        <h1>Travel Recommendation</h1>         
        <p>Discover your next adventure</p>       
      </header>        

      <main className="main-content">         
        <section className="search-section">           
          <input             
            type="text"             
            id="search-bar"             
            placeholder="Search for destinations..."             
            value={searchQuery}             
            onChange={(e) => setSearchQuery(e.target.value)}             
            onKeyDown={handleKeyDown}           
          />           
          <button onClick={handleSearch}>Search</button>         
        </section>          

        <section className="destinations">           
          <div className="destination" id="destination1">             
            <h3>               
              <Link to="/destination/paris">Paris</Link>             
            </h3>             
            <p>Explore the city of love!</p>           
          </div>           
          <div className="destination" id="destination2">             
            <h3>               
              <Link to="/destination/tokyo">Tokyo</Link>             
            </h3>             
            <p>Experience the blend of tradition and modernity.</p>           
          </div>           
          <div className="destination" id="destination3">             
            <h3>               
              <Link to="/destination/new york">New York</Link>             
            </h3>             
            <p>The city that never sleeps.</p>           
          </div>         
        </section>       
      </main>        

      <footer className="footer">         
        <p>© 2024 Travel Recommendation</p>       
      </footer>     
    </div>   
  );   
};  

export default MainPage;
