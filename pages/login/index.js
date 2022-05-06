import { useRouter } from 'next/router';
import { useState } from 'react'
import withoutAuth from '../../components/WithoutAuth';

export default withoutAuth(function Login() {
  const [formState, setFormState] = useState({});
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formState)
    });
    const data = await res.json();
    if (res.status === 200 && data.success) {
      localStorage.setItem('user', data.token);
      alert('Login successful');
      router.push('/');
    }
  }
  return (
    <>
      <h1>Login Page</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Your Email" value={formState.email ? formState.email : ''} onChange={(e) => setFormState({ ...formState, email: e.target.value })} /><br />
        <input type="password" placeholder="Enter Your Password" value={formState.password ? formState.password : ''} onChange={(e) => setFormState({ ...formState, password: e.target.value })} /><br />
        <input type="submit" />
      </form>
    </>
  );
})