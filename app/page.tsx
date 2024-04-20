import { Resume } from '~/src/entities/resume';

export default function MainPage() {
  const file = '/resume.pdf';
  return (
    <div>
      <main className="">
        <Resume />
      </main>
    </div>
  );
}
