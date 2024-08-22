import { UserProfile } from '@/types/user';
import { MouseEvent } from 'react';

function Login(username: UserProfile['username']) {
  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <div className="w-56">
      <label className="form-control w-full max-w-xs">
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="input input-bordered w-full max-w-xs"
        />
        <div className="label">
          <span className="label-text-alt m-2">check here</span>
        </div>
      </label>
      <div className="min-w-full">
        <button className="btn btn-active float-right" onClick={handleSubmit}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
