import Link from "next/link";

export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h3>Sign in</h3>
      <input placeholder="username" /><br />
      <input type="password" placeholder="password" /><br />
      <Link href="/Dashboard">Sign in</Link><br />
      <Link href="/Account/Signup">Sign up</Link>
    </div>
  );
}
