export default function FormInputMessage({ register, errors }: any) {
  return (
    <div className=" flex flex-col gap-1">
      <label>{`Message`}</label>
      <textarea
        {...register('message')}
        placeholder="Write your message..."
        className={`border px-2 py-2`}
      ></textarea>
    </div>
  );
}
