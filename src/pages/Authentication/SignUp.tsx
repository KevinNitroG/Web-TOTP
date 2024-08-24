import { authenticate } from '@/pages/Authentication/utils';
import { AppDispatch } from '@/state/store';
import { userStateSignIn } from '@/state/user/type';
import { signIn } from '@/state/user/userSlice';
import type { UserProfile } from '@/types/user';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppDispatch } from '@state/hook';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { twJoin } from 'tailwind-merge';
import { z } from 'zod';

const schema = z.object({
  username: z.string().min(1, 'Username is required').trim(),
  password: z.string().min(1, 'Password is required').trim(),
  avatar: z.string(),
});

type FormFields = z.infer<typeof schema>;

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors, isSubmitting },
  } = useForm<FormFields>({ resolver: zodResolver(schema) });

  const dispatch: AppDispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FormFields> = (data: FormFields): void => {
    try {
      const user: userStateSignIn = authenticate({
        encrypedProfile: profile,
        password: data.password,
      });
      dispatch(signIn(user));
    } catch (error) {
      if (error instanceof Error) {
        toast(error.message, { type: 'error' });
      }
      console.error(error);
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
        <div className="my-2 flex min-w-full justify-end">
          <button
            type="submit"
            className={twJoin(
              'btn',
              (!isValid || isSubmitting) && 'btn-disabled',
            )}
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
