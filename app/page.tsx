export default function Home() {
  return (
    <main className="w-full h-screen p-5">
      <div className="w-full h-full flex items-center justify-center flex-col">
        <div className="w-full h-full">
          <textarea
            className="resize-none text-slate-950"
            rows={10}
            cols={50}
          />
        </div>
        <div className="w-full h-full"></div>
      </div>
    </main>
  );
}
