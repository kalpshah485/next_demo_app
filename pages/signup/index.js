import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";
import withoutAuth from "../../components/WithoutAuth";

export default withoutAuth(function Signup() {
  const [formState, setFormState] = useState({});
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formState)
      });
      const data = await res.json();
      if (res.status === 201 && data.success) {
        toast.success('Signup Successful.');
        router.push('/login');
      } else if (res.status === 409 && !data.success) {
        toast.error(data.error);
      } else {
        toast.error("Signup Failed due to server error.");
      }
    } catch (err) {
      console.log(err.message);
    }
  }
  return (
    <>
      <h1 className="margin-5">Signup Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="inputWithoutButton">
          <input type="text" placeholder="Enter Your Name" value={formState.name ? formState.name : ''} onChange={(e) => setFormState({ ...formState, name: e.target.value })} /><br />
        </div>
        <div className="inputWithoutButton">
          <input type="email" placeholder="Enter Your Email" value={formState.email ? formState.email : ''} onChange={(e) => setFormState({ ...formState, email: e.target.value })} /><br />
        </div>
        <div className="inputWithoutButton">
          <input type="tel" placeholder="Enter Your Phone" value={formState.phone ? formState.phone : ''} onChange={(e) => setFormState({ ...formState, phone: e.target.value })} /><br />
        </div>
        <div className="inputWithoutButton">
          <input type="password" placeholder="Enter Your Password" value={formState.password ? formState.password : ''} onChange={(e) => setFormState({ ...formState, password: e.target.value })} /><br />
        </div>
        <input className="margin-5" type="submit" />
      </form>
    </>
  );
})