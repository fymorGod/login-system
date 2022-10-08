import { Link, useNavigate} from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { useState } from "react";
import img from "../../assets/login.jpg";

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const { singIn } = UserAuth()
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            await singIn(email, password);
            navigate('/home')
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full" >
            <div className="hidden sm:block">
                <img className="w-full h-full object-cover" src={img} alt="image login" />
            </div>
        <div className="bg-gray-100 flex flex-col justify-center">
            <form className="max-w-[400px] w-full mx-auto bg-white p-4 shadow-sm" onSubmit={handleSignIn}>
                <h2 className="text-4xl font-bold text-center py-6">Brand</h2>
                <p className="text-gray-400 text-sm ">Login Page</p>
                <div className="flex flex-col py-2">
                    <label className=" py-2 font-medium">Email Address</label>
                    <input type="email" className="border p-2" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="flex flex-col py-2">
                    <label className=" py-2 font-medium">Password</label>
                    <input type="password" className="border p-2" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button className="border w-full my-5 py-2 bg-indigo-600 text-white hover:bg-indigo-500">Sign In</button>
                <div className="flex justify-between">
                    <p></p>
                    <p><Link to="/signup" className="underline">Create an account</Link></p>
                </div>
            </form>
        </div>
    </div>
    );
}