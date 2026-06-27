function Header() {
  return (
    <div className="header">
      <h1>📝 To-Do & Notes Dashboard</h1>
      <h3>{new Date().toLocaleDateString()}</h3>
      <p>Stay Organized • Stay Productive 🚀</p>
    </div>
  );
}

export default Header;