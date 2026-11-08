
export default function Footer() {
  const tahun = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-utama p-6 text-center">
      <p>© {tahun} Mario Hyuuga. All Rights Reserved.</p>
    </footer>
  );
}
