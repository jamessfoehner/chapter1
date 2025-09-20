export default function Lab1() {
  return (
    <div id="wd-lab1">
      <h2>Lab 1</h2>
      <h3>HTML Examples</h3>

      {/* Headings */}
      <div id="wd-h-tag">
        <h4>Heading Tags</h4>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
      </div>

      {/* Paragraphs */}
      <div id="wd-p-tag">
        <h4>Paragraphs</h4>
        <p>This is the first paragraph.</p>
        <p>This is the second paragraph with some more text.</p>
        <p>This is the third paragraph.</p>
      </div>

      {/* Ordered List */}
      <div id="wd-list-ordered">
        <h4>Ordered List</h4>
        <ol>
          <li>Step 1</li>
          <li>Step 2</li>
          <li>Step 3</li>
        </ol>
      </div>

      {/* Unordered List */}
      <div id="wd-list-unordered">
        <h4>Unordered List</h4>
        <ul>
          <li>Item A</li>
          <li>Item B</li>
          <li>Item C</li>
        </ul>
      </div>

      {/* Table */}
      <div id="wd-tables">
        <h4>Table Example</h4>
        <table border={1} width="100%">
          <thead>
            <tr>
              <th>Quiz</th>
              <th>Topic</th>
              <th>Date</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Q1</td><td>HTML</td><td>2/3/21</td><td>85</td></tr>
            <tr><td>Q2</td><td>CSS</td><td>2/10/21</td><td>90</td></tr>
          </tbody>
        </table>
      </div>

      {/* Anchor */}
      <h4>Links</h4>
      <p>
        Visit <a href="https://www.lipsum.com" target="_blank">Lipsum</a> for dummy text. <br />
        My code repo: <a href="https://github.com/YOUR_GITHUB_REPO" id="wd-github" target="_blank">GitHub</a>
      </p>
    </div>
  );
}
