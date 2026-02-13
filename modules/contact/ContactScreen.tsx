const ContactScreen = () => {
  return (
    <div className="relative min-h-screen w-full px-4 py-16">
      <div className="max-w-3xl mx-auto w-full">
        {/* Header Text */}
        <h1 className="text-5xl font-medium text-gray-800 mb-10 tracking-tight">
          Contact US
        </h1>

        <div className="space-y-6 text-gray-700 text-lg leading-relaxed mb-12">
          <p className="font-bold">
            NFC Group Indonesia mengutamakan kesuksesan bisnis Anda.
          </p>

          <p>
            Untuk pertanyaan lebih lanjut, Anda dapat mengunjungi situs web
            resmi kami atau menghubungi kami melalui telepon maupun email.
          </p>

          <p>
            Kami berkomitmen untuk mendukung pertumbuhan bisnis Anda dengan
            kualitas terbaik.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactScreen;
