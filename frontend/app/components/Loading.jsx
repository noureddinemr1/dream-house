import { ClipLoader } from 'react-spinners';

export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <ClipLoader color={"#123abc"} loading={true} size={150} />
    </div>
  );
}
