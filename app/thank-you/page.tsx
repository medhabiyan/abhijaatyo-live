import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 font-sans">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center border-t-8 border-green-500">
        
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>

        <h1 className="text-3xl font-extrabold text-gray-800 mb-2">অর্ডার সফল হয়েছে! 🎉</h1>
        <p className="text-gray-600 mb-8 text-lg">
          ধন্যবাদ! আপনার অর্ডারটি আমরা সফলভাবে গ্রহণ করেছি। আমাদের একজন প্রতিনিধি খুব দ্রুত আপনার সাথে যোগাযোগ করবেন।
        </p>

        <Link href="/" className="inline-block bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-8 rounded-lg transition-colors">
          আবার কেনাকাটা করুন
        </Link>
      </div>
    </div>
  );
}