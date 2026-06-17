// =============================================================
// Exercise 1 – Single Responsibility Principle (SRP)
//
// YOUR TASK:
//   Refactor it so each class has only ONE reason to change.
//   Wire them together so the output at the bottom still works.
//
// Run:  npm run exercise-1
// =============================================================

class BlogPost {
  public title: string;
  public content: string;
  public author: string;

  constructor(title: string, content: string, author: string) {
    this.title = title;
    this.content = content;
    this.author = author;
  }

}

class BlogSaveToDB {
  saveToDatabase(title: string) {
    console.log(`Saving "${title}" to the database...`);
  }
}

class BlogRenderAsHtml {
  renderAsHtml(title: string, author: string, content:string ): string {
    return `<h1>${title}</h1><p>By ${author}</p><p>${content}</p>`;
  }
}

class BlogNotifySubscribers {
  notifySubscribers(title: string) {
    console.log(`Sending email notification for new post: "${title}"`);
  }
}

const post = new BlogPost("SOLID Rocks", "Here is why...", "Alice");
const saveToDatabase = new BlogSaveToDB();
const renderAsHtml = new BlogRenderAsHtml();
const notifySubscribers = new BlogNotifySubscribers();

saveToDatabase.saveToDatabase(post.title);
console.log(renderAsHtml.renderAsHtml(post.title, post.author, post.content));
notifySubscribers.notifySubscribers(post.title);
