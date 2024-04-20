import { Resume } from '~/src/entities/resume';

export default function MainPage() {
  return (
    <div className=" flex justify-center items-center flex-col">
      <div className=" mt-32"></div>
      <main className=" flex justify-center items-center flex-col">
        <Resume />
      </main>
    </div>
  );
}
