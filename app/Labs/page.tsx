import Link from "next/link";

export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Labs</h1>
      <p><b>James Foehner</b> – CS4550</p>

      <h3>Assignments</h3>
      <ul>
        <li><Link href="/Labs/Lab1">Lab 1: HTML Examples</Link></li>
        <li><Link href="/Labs/Lab2">Lab 2: CSS Basics</Link></li>
        <li><Link href="/Labs/Lab3">Lab 3: JavaScript Fundamentals</Link></li>
      </ul>

      <h3>Applications</h3>
      <ul>
        <li><Link href="/">Kambaz Application</Link></li>
      </ul>

      <h3>Source Code</h3>
      <ul>
        <li><a href="https://github.com/jamessfoehner/chapter1" target="_blank">GitHub Repository</a></li>
      </ul>
    </div>
  );
}
