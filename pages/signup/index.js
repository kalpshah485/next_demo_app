import { useRouter } from "next/router";
import { useState } from "react";
import withoutAuth from "../../components/WithoutAuth";

export default withoutAuth(function Signup() {
  const [formState, setFormState] = useState({});
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formState)
    });
    const data = await res.json();
    if (res.status === 201 && data) {
      router.push('/login');
      alert('Signup successful');
    }
  }
  return (
    <>
      <h1>Signup Page</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Your Name" value={formState.name ? formState.name : ''} onChange={(e) => setFormState({ ...formState, name: e.target.value })} /><br />
        <input type="email" placeholder="Enter Your Email" value={formState.email ? formState.email : ''} onChange={(e) => setFormState({ ...formState, email: e.target.value })} /><br />
        <input type="tel" placeholder="Enter Your Phone" value={formState.phone ? formState.phone : ''} onChange={(e) => setFormState({ ...formState, phone: e.target.value })} /><br />
        <input type="password" placeholder="Enter Your Password" value={formState.password ? formState.password : ''} onChange={(e) => setFormState({ ...formState, password: e.target.value })} /><br />
        <input type="submit" />
      </form>
    </>
  );
})