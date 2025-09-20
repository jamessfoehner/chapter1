import Link from "next/link";

export default function KambazNavigation() {
  return (
    <div id="wd-kambaz-navigation">
      <Link href="/Dashboard">Dashboard</Link><br />
      <Link href="/Account">Account</Link><br />
      <Link href="/Labs">Labs</Link><br />
      <a href="https://www.northeastern.edu/" target="_blank">Northeastern</a>
    </div>
  );
}
