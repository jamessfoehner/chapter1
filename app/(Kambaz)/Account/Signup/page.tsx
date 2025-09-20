import Link from "next/link";

export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <input placeholder="username" /><br />
      <input type="password" placeholder="password" /><br />
      <input type="password" placeholder="verify password" /><br />
      <Link href="/Account/Profile">Sign up</Link><br />
      <Link href="/Account/Signin">Sign in</Link>
    </div>
  );
}
