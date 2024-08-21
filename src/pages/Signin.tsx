import { User } from '@utils/userType';

function Login() {
  const users: User = JSON.parse(localStorage.getItem('users') || '{}');

  return (
    <div className="card card-bordered bg-base-100 shadow-2xl">
      <div className="w-40"></div>
      <div className="divider divider-horizontal"></div>
      <div className="w-50">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
    </div>
  );
}

export default Login;
