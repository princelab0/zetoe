import Spinner from "@/components/ui/Spinner";
export default function AuthButton({
  loading,
  buttonText,
}: {
  loading: boolean;
  buttonText: string;
}) {
  return (
    <button
      disabled={loading}
      type='submit'
      className='px-5 py-2 text-base font-medium text-white bg-blue-500 hover:bg-blue-500/80 rounded-lg focus:outline-none focus:ring-1 dark:focus:ring-[hsl(200,3%,25%)]'
    >
      {loading ? <Spinner /> : buttonText}
    </button>
  );
}
