# React Blog

This is a simple React blog application that allows you to fetch and display blog posts written in Markdown format. The application uses several popular libraries for enhanced functionality, such as `react-markdown`, `react-query`, and more.

<br>

## Technologies Used

- **React**: The JavaScript library for building user interfaces.
- **react-markdown**: A React component to render Markdown content.
  - **remark-gfm**: A plugin for `react-markdown` that supports GitHub-flavored Markdown, including tables, strikethroughs, and task lists.
  - **rehype-highlight**: A plugin for `react-markdown` that provides syntax highlighting for code blocks.
- **react-query**: A library for data fetching and caching, with built-in support for **stale time** and **refetching**.

<br>

## Features

- **Markdown rendering**: Posts are written in Markdown and rendered dynamically.
- **Syntax Highlighting**: Code blocks are automatically highlighted using `rehype-highlight`.
- **Optimized Data Fetching**: Fetches and caches blog posts using `react-query` with a configurable **stale time**.
- **Routing**: Supports dynamic routing for each post using `react-router`.

<br>

## Installation

To get started, clone the repository and install the dependencies:

```
git clone https://github.com/sothearo-kay/react-blog.git
cd react-blog
pnpm install
```

> Alternatively, you can click the `Use this template` button on the GitHub page to create a new repository based on this template.

<br>

## Usage

- The app fetches blog posts written in Markdown format from `/blog/{slug}.md` where `{slug}` is a unique identifier for each post.
- Markdown files should be stored in a public directory or fetched from a server that supports static file serving.
