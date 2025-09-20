import Link from "next/link";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <input defaultValue="melisa" placeholder="username" /><br />
      <input type="password" defaultValue="123" /><br />
      <input defaultValue="Melisa" /><br />
      <input defaultValue="Devedzic" /><br />
      <input type="date" defaultValue="2005-01-01" /><br />
      <input type="email" defaultValue="melisa@example.com" /><br />
      <select defaultValue="STUDENT">
        <option value="STUDENT">Student</option>
        <option value="FACULTY">Faculty</option>
      </select><br />
      <Link href="/Account/Signin">Sign out</Link>
    </div>
  );
}
