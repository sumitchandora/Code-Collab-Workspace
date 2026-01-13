<h1>CodeCollab – AI Assisted Real-Time Code Editor</h1>

<p>
CodeCollab is a web-based code editor that supports real-time collaboration and AI-assisted coding features. 
It allows multiple users to work together in the same workspace, edit code live, manage files, and communicate within the editor. 
The project focuses on combining real-time updates with basic AI assistance to improve developer productivity.
</p>

<h3>Problem Statement</h3>

<p>
While working on coding projects, developers often face issues such as:
</p>

<ul>
  <li>Difficulty in collaborating on the same codebase at the same time</li>
  <li>Delays in syncing code changes across team members</li>
  <li>Lack of instant code suggestions and error feedback</li>
  <li>Managing files and folders in shared environments</li>
</ul>

<p>
CodeCollab aims to solve these problems by providing a shared coding environment where changes are reflected instantly 
and users can get AI-based assistance while writing code.
</p>

<h3>Overview</h3>

<p>
CodeCollab is a real-time collaborative code editor designed to help developers work together efficiently within a shared coding workspace. 
The application allows multiple users to edit code simultaneously, manage files and folders, and communicate with each other without leaving the editor. 
All changes made by any user are synchronized instantly, ensuring that everyone always sees the latest version of the code.
</p>

<p>
The project uses Firebase Authentication to handle user sign-up and login, supporting both Google authentication and email-based OTP verification. 
Secure features such as password reset and account management are also included. Each authenticated user can access private or shared workspaces, 
making collaboration controlled and organized.
</p>

<p>
For real-time data handling, CodeCollab relies on Firebase Realtime Database and Firestore. These services store code content, 
file structures, chat messages, cursor positions, and workspace-related data. Snapshot listeners are used to detect changes in real time, 
allowing updates to be reflected immediately across all connected users. This removes the need for manual refreshes or saving 
and ensures smooth collaboration.
</p>

<p>
The code editing experience is powered by the Monaco Editor, which provides support for multiple programming languages along with 
syntax highlighting, code folding, and theme customization. Alongside the editor, a file explorer is implemented to manage files and folders. 
The file system supports nested folders using a recursive rendering approach, allowing users to create, rename, delete, and organize files easily, 
with all changes synced in real time.
</p>

<p>
CodeCollab also includes AI-assisted features through integration with the Google Gemini API. These features provide basic code suggestions, 
help identify syntax errors, suggest fixes, and generate simple documentation for functions. An integrated AI chat allows users to ask 
coding-related questions and receive assistance directly within the workspace.
</p>

<h3>Solution Architecture</h3>
<img src="https://github.com/user-attachments/assets/e7e09221-1131-4304-8717-411c59a69080" alt="Solution Architecture" />

<h2>Core Features</h2>

<h3>1. Authentication & Database</h3>
<ul>
  <li><strong>Firebase Authentication</strong>
    <ul>
      <li>Login using Google or Email with OTP</li>
      <li>Password reset and account management</li>
    </ul>
  </li>
  <li><strong>Firebase Realtime Database & Firestore</strong>
    <ul>
      <li>Stores code, files, chat messages, and workspace data</li>
      <li>Real-time synchronization using snapshot listeners</li>
    </ul>
  </li>
</ul>

<h3>2. AI Integration</h3>
<ul>
  <li><strong>Google Gemini API</strong>
    <ul>
      <li>Provides basic code suggestions and syntax help</li>
      <li>Generates simple documentation for functions</li>
      <li>Suggests fixes for common syntax errors</li>
    </ul>
  </li>
  <li><strong>AI Chat</strong>
    <ul>
      <li>Helps users with coding-related questions inside the editor</li>
    </ul>
  </li>
</ul>

<h3>3. Code Editor & UI</h3>
<ul>
  <li><strong>Monaco Editor</strong>
    <ul>
      <li>Supports multiple programming languages</li>
      <li>Syntax highlighting and theme customization</li>
    </ul>
  </li>
  <li><strong>File Explorer</strong>
    <ul>
      <li>Create, rename, and delete files and folders</li>
      <li>Supports nested folders using recursive rendering</li>
    </ul>
  </li>
</ul>

<h3>4. Collaboration Features</h3>
<ul>
  <li><strong>Real-Time Editing</strong> – Code updates appear instantly for all users</li>
  <li><strong>Live Cursor Tracking</strong> – Shows active collaborators inside the editor</li>
  <li><strong>Workspace Chat</strong> – Allows users to communicate while coding</li>
  <li><strong>Workspace Invitations</strong> – Users can invite others to join a workspace</li>
</ul>

<h2>Tech Stack</h2>

<table border="1" cellpadding="6">
  <tr>
    <th>Component</th>
    <th>Technology</th>
  </tr>
  <tr>
    <td>Frontend</td>
    <td>Next.js 15, Tailwind CSS, Shadcn UI</td>
  </tr>
  <tr>
    <td>Code Editor</td>
    <td>Monaco Editor</td>
  </tr>
  <tr>
    <td>Backend</td>
    <td>Firebase Realtime Database & Firestore</td>
  </tr>
  <tr>
    <td>Authentication</td>
    <td>Firebase Authentication</td>
  </tr>
  <tr>
    <td>AI Services</td>
    <td>Google Gemini API</td>
  </tr>
  <tr>
    <td>Language</td>
    <td>JavaScript</td>
  </tr>
</table>

<h2>Summary</h2>

<p>
CodeCollab is a simple and practical project that demonstrates real-time collaboration, file management, 
and basic AI assistance in a code editor. It focuses on understanding how collaborative coding tools work 
by implementing their core features in a clean and manageable way.
</p>

<h2>How to Clone and Run the Project Locally</h2>

<h3>Prerequisites</h3>
<ul>
  <li>Node.js (v18 or above)</li>
  <li>Git installed on your system</li>
  <li>A Firebase project (for Authentication & Database)</li>
</ul>

<h3>Steps to Run Locally</h3>

<ol>
  <li>
    <strong>Clone the repository</strong>
    <pre><code>git clone https://github.com/sumitchandora/Code-Collab-Workspace.git</code></pre>
  </li>

  <li>
    <strong>Navigate into the project directory</strong>
    <pre><code>cd Code-Collab-Workspace</code></pre>
  </li>

  <li>
    <strong>Install dependencies</strong>
    <pre><code>npm install</code></pre>
  </li>

  <li>
    <strong>Setup Firebase configuration</strong>
    <p>
      Create a Firebase project from the Firebase Console and enable:
    </p>
    <ul>
      <li>Firebase Authentication (Google & Email/OTP)</li>
      <li>Firestore Database / Realtime Database</li>
    </ul>
    <p>
      Add your Firebase config keys inside the project configuration file
      (for example: <code>firebase.js</code> or <code>.env</code> file).
    </p>
  </li>

  <li>
    <strong>Run the development server</strong>
    <pre><code>npm run dev</code></pre>
  </li>

  <li>
    <strong>Open in browser</strong>
    <p>
      Visit <code>http://localhost:3000</code> to view the application.
    </p>
  </li>
</ol>

<h3>Notes</h3>
<ul>
  <li>Ensure Firebase rules allow authenticated access.</li>
  <li>Multiple browser windows can be opened to test real-time collaboration.</li>
  <li>AI features require a valid Google Gemini API key.</li>
</ul>

