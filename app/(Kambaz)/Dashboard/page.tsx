import Link from "next/link";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1>Dashboard</h1>
      <p>Courses:</p>
      <ul>
        <li><Link href="/Courses/1">CS1234 React JS</Link></li>
        <li><Link href="/Courses/2">CS2345 Next.js</Link></li>
        <li><Link href="/Courses/3">CS3456 Databases</Link></li>
        <li><Link href="/Courses/4">CS4567 Algorithms</Link></li>
        <li><Link href="/Courses/5">CS5678 Systems</Link></li>
        <li><Link href="/Courses/6">CS6789 Data Science</Link></li>
        <li><Link href="/Courses/7">CS7890 AI</Link></li>
      </ul>
    </div>
  );
}
