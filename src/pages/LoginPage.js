import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSuccessMessage('즐거운 여행되세요!'); // Display success message
      setTimeout(() => navigate('/'), 2000); // Redirect to home page after 2 seconds
    } catch (error) {
      if (error.code === 'auth/wrong-password') {
        setError('잘못된 비밀번호입니다. 다시 시도해주세요.');
      } else if (error.code === 'auth/user-not-found') {
        setError('해당 이메일로 등록된 계정이 없습니다.');
      } else {
        setError('로그인 실패. 자격 증명을 확인하세요.');
      }
    }
  };

  return (
    <div className="login-page">
      <h2>로그인</h2>

      {/* Show success message in the center of the screen */}
      {successMessage && (
        <div className="success-message">
          <p>{successMessage}</p>
        </div>
      )}

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="error">{error}</p>}
        <button type="submit" disabled={!email || !password}>
          로그인
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
