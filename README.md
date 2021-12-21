## Motivation
On the surface, this is your fairly typical MERN stack blog application. The "meat" of the project was to focus on leveraging TypeScript to clean up code and debug on-the-fly.\
TypeScript is a *massively* important tool when dealing with React applications of moderate to large scope. Whether working in a large group on the same project or just with a large project in general, having the ability to clearly define errors ahead of your build (syntax, type-casting, etc.) on compile-time and not during production-time is a blessing. This is my first serious foray into TypeScript, and although it adds significantly more lines of code, I'm really enjoying the the speed at which I can develop after initial set-up is complete.\
After all, nobody wants to be stuck fixing menial bugs at 11pm the evening before a production run...



## Challenges
 - Problem: Using the [React Draft WYSIWYG](https://jpuri.github.io/react-draft-wysiwyg/#/docs?_k=jjqinp) library, fetching blogs within the top-level component ("Home") didn't edit correctly.
  Solution: Per the docs above, set the "editing state" within the blog getter function as a *state variable* for individual blogs