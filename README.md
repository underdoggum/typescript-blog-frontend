## Motivation
The central goal of this project is to leverage TypeScript to clean up code and debug on-the-fly. On the surface, this is your fairly typical MERN stack blog application, but this was my first serious deep dive into TypeScript, and now because of the speed I'm able to develop out this mid-level project, I'm a believer.\
\
TypeScript is a *massively* important tool when dealing with React applications of moderate to large scope. Whether working in a large group on the same project or just with a large project in general, having the ability to clearly define errors ahead of your build (syntax, type-casting, etc.) on compile-time and not during production-time is a blessing. This is my first serious foray into TypeScript, and although it adds significantly more lines of code, I'm really enjoying the the speed at which I can develop after initial set-up is complete. I'd imagine working with other devs, using TypeScript would mitigate countless needless errors since the majority of coding in sprints is individually focused.\
And after all, nobody wants to be stuck fixing menial bugs at 11pm the evening before a production run...



## Challenges
 - Problem: Using the [React Draft WYSIWYG](https://jpuri.github.io/react-draft-wysiwyg/#/docs?_k=jjqinp) library, fetching blogs within the top-level component ("Home") didn't edit correctly.
  Solution: Per the docs above, you must set the "editing state" within the blog getter function as a *state variable* for individual blogs
 - Problem: TypeScript can be annoying sometimes. In "blog.tsx", you cannot easily render a "blog" property unless TypeScript is absolutely sure that "blog" will not be null (as it was initialized as null in useState)
  Solution: Add a higher-level conditional if-statement to explicitly tell TypeScript to render that property if it is not null (otherwise, return "Loading...")
 - Problem: When accessing the show page, the initial blog content wasn't being set properly by the ```useEffect()``` function, showing the actual page, but "invalid" date/time and no content loaded
  Solution: Insert the blog's "_id" variable within useEffect's brackets to allow useEffect to run on every render with the correct id. Worth noting is that without any parameters inside the brackets, useEffect will *only* run once (similar to "componentDidMount")


## Known Bugs
 - On first home page load, if Heroku hasn't spun up (hasn't been used in the past)


## Lessons Learned
1. **Plan** your components/pages/utilities out first after deciding MVP functionality of your app
2. Decide what parts/components of your project you want TypeScript to strictly define within its abilities
  a. What props should a component have? Define this in a component's interface.
  b. 
3. Debugging logic has become *way* simpler because of more focused bug-fixing while you're currently coding
4. TypeScript is just a superset of JavaScript, so don't be afraid to code in regular ol' vanilla JS if necessary


## Ideas for the future
 - Implement user auth
 - Implement pictures on sidebars with modern tech news