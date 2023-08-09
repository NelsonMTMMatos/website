import { useForm, SubmitHandler } from 'react-hook-form';

export default function FormEmailInput() {
  const hello = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={hello}>
      <div className=" flex flex-col gap-1">
        <label>{`Nome`}</label>
        <input
          placeholder="Write your name..."
          className=" w-80 border"
        ></input>
      </div>
    </form>
  );
}
