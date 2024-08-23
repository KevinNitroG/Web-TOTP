import { authenticate } from '@/pages/Authentication/utils';
import { userStateSignIn } from '@/state/user/type';
import { signIn } from '@/state/user/userSlice';
import type { UserProfile } from '@/types/user';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppDispatch } from '@state/hook';
import { SubmitHandler, useForm } from 'react-hook-form';
import { twJoin } from 'tailwind-merge';
import { z } from 'zod';

const schema = z.object({
  password: z.string().min(1, 'Password is required').trim(),
});

type FormFields = z.infer<typeof schema>;

function Login(username: UserProfile['username']) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { isValid, errors, isSubmitting },
  } = useForm<FormFields>({ resolver: zodResolver(schema) });

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    try {
      const user: userStateSignIn = authenticate({
        username: username,
        password: data.password,
      });
      dispatch(signIn(user));
    } catch (error) {
      if (error instanceof Error) {
        setError('root', {
          message: error.message,
        });
      } else {
        console.error(error);
      }
    }
  };

  return (
    <div className="w-56">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <label className="form-control w-full max-w-xs">
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full max-w-xs"
            aria-invalid={errors.password ? 'true' : 'false'}
            {...register('password')}
          />
          {errors.password && (
            <div className="label">
              <span className="label-text-alt m-2 text-error">
                {errors.password.message}
              </span>
            </div>
          )}{' '}
        </label>
        {errors.root && (
          <span className="p-2 pt-4 text-error">{errors.root.message}</span>
        )}
        <div className="my-2 flex min-w-full justify-end">
          <button
            type="submit"
            className={twJoin(
              'btn',
              (!isValid || isSubmitting) && 'btn-disabled',
            )}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
