import validator from 'validator';

export default function FormInputEmail({ register, errors }: any) {
  return (
    <div className=" flex flex-col gap-1">
      <label>{`Email`}</label>
      <input
        {...register('email', {
          required: true,
          validate: (value: string) => validator.isEmail(value),
        })}
        type="email"
        placeholder="Write your email..."
        className={`border px-2 py-2 ${errors?.email && 'input-error'}`}
        id="email"
      ></input>
      {errors?.email?.type === 'required' && (
        <p className="error-message">The email is required.</p>
      )}
      {errors?.email?.type === 'validate' && (
        <p className="error-message">The email is invalid.</p>
      )}
    </div>
  );
}
