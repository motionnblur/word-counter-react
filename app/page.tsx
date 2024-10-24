export default function Home() {
  return (
    <main className="w-full h-screen p-5">
      <div className="w-full h-full flex items-center flex-col">
        <textarea className="resize-none text-slate-950" rows={10} cols={50} />
        <textarea
          className="resize-none text-slate-950 mt-3"
          rows={1}
          cols={11}
          placeholder="  Paste a word"
        />
        <div className="w-14 h-7 bg-slate-50 rounded text-black cursor-pointer mt-4">
          Count
        </div>
        <div className="mt-8 text-3xl">0</div>
      </div>
    </main>
  );
}
