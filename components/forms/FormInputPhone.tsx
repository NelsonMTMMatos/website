import validator from 'validator';

export default function FormInputPhone({ register, errors }: any) {
  return (
    <div className=" flex flex-col gap-1">
      <label>{`Phone`}</label>
      <input
        {...register('phone', {
          required: true,
          validate: (value: string) => validator.isNumeric(value),
        })}
        placeholder="Write your phone number..."
        className={`border px-2 py-2 ${errors?.phone && 'input-error'}`}
        id="phone"
      ></input>
      {errors?.phone?.type === 'required' && (
        <p className="error-message">The phone number is required.</p>
      )}
      {errors?.phone?.type === 'validate' && (
        <p className="error-message">
          The phone number has non numeric characters.
        </p>
      )}
    </div>
  );
}
