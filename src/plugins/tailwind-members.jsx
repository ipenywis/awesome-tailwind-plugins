export function WithoutMembers() {
  return (
    <div className="flex flex-col bg-red-400 has-[>form:valid]:bg-green-400">
      <span className="font-semibold">This is Parent Container</span>
      <form>
        <input type="checkbox" required /> ← Check this checkbox
      </form>
    </div>
  );
}

export function WithMembers() {
  return (
    <div className="bg-red-400 member-valid:bg-green-400">
      <span className="font-semibold">This is Parent Container</span>
      <form className="member">
        <input type="checkbox" required /> ← Check this checkbox
      </form>
    </div>
  );
}
