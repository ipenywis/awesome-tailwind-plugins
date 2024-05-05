export function WithoutTailwindSignals() {
  return (
    <>
      <input type="checkbox" className="peer" /> 👈🏼 check/uncheck here
      <div className="hover:[&>div]:bg-green-800 peer-checked:[&>div]:bg-green-800">
        <div className="bg-red-800 p-1 text-white">or hover here</div>
      </div>
    </>
  );
}

export function WithTailwindSignals() {
  return (
    <>
      <input type="checkbox" className="peer" /> 👈🏼 check/uncheck here
      <div className="peer-checked:signal hover:signal">
        <div className="signal:bg-green-800 bg-red-800 p-1 text-white">
          or hover here
        </div>
      </div>
    </>
  );
}

export function TailwindAdvancedSignals() {
  return (
    <>
      <input type="checkbox" className="peer/checkable origin-bottom-left" /> 👈🏼
      check/uncheck here
      <div className="peer/hoverable bg-slate-700 text-white">
        ✨ hover/unhover here ✨
      </div>
      <button className="active:signal/custom peer-checked/checkable:signal peer-hover/hoverable:signal">
        <div
          className="
    text-white
    bg-red-800 after:content-['_👀']
    signal/custom:!bg-purple-800 signal:bg-green-800
    signal/custom:after:!content-['_🦄'] signal:after:content-['_😱']
  "
        >
          press me
        </div>
      </button>
    </>
  );
}
