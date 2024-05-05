export function WithoutMixins() {
  return (
    <form className="flex flex-col">
      <h2 className="mb-5 font-semibold text-xl">Login</h2>
      <p className="text-left text-xs text-red-500">
        Please enter a valid username
      </p>
      <input placeholder="username" className="mb-2 p-4 rounded-lg" />
      <input placeholder="passwored" className="mb-2 p-4 rounded-lg" />
      <span className="text-left text-xs text-gray-500">
        Please fill out the form
      </span>
      <button type="submit" className="mt-5 rounded-lg">
        Submit
      </button>
    </form>
  );
}

export function WithMixins() {
  return (
    <form className="flex flex-col mixin/input:mb-2 mixin/input:rounded-lg mixin/input:p-2 mixin/info:text-left mixin/info:text-xs">
      <h2 className="mb-5 font-semibold text-xl">Login</h2>
      <p className="mixin/info text-red-500">Please enter a valid username</p>
      <input placeholder="username" className="mixin/input" />
      <input placeholder="passwored" className="mixin/input" />
      <span className="mixin/info text-gray-500">Please fill out the form</span>
      <button type="submit" className="mt-5 rounded-lg">
        Submit
      </button>
    </form>
  );
}
