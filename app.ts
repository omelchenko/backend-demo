import { createPublisher, getPublisher, listPublishers } from './publishers';
import { createBook, getBook, listBooks } from './books';


class DemoApp {
  private readonly handlers = new Map();

  define(name: string, handler): void {
    this.handlers.set(name, handler);
  }
}

const app = new DemoApp();

app.define('createPublisher', createPublisher);
app.define('getPublisher', getPublisher);
app.define('listPublishers', listPublishers);

app.define(
  'createBook',
  // alsoMiddlewaresCanGoHere,
  createBook,
);
app.define('getBook', getBook);
app.define('listBooks', listBooks);

export default app;
