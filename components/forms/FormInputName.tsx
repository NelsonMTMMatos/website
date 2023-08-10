export default function FormInputName({ register, errors }: any) {
  return (
    <div className=" flex flex-col gap-1">
        <label>{`Name`}</label>
        <input
        {...register('name', {
            required: true,
        })}
        placeholder="Write your name..."
        className={`border px-2 py-2 ${errors?.name && 'input-error'}`}
        id="name"
        ></input>
        {errors?.name?.type === 'required' && (
        <p className="error-message">The name is required.</p>
        )}
    </div>
  );
}
