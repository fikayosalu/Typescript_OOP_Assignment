class Library {
	static books: string[] = [];
	name: string;
	protected static totalBooks: number = Library.books.length;

	constructor(name: string) {
		this.name = name;
	}

	addToArchive(book: string) {
		Library.books.push(book);
		console.log(`${book} has been added to the Library`);
	}

	get allBooks() {
		return Library.books;
	}
}

class User extends Library {
	id: number;
	private age: number;
	private favoriteGenre: string | null;
	static id: number = 0;

	constructor(name: string, age: number, favoriteGenre?: string, id?: number) {
		super(name);
		this.age = age;
		this.id = id !== undefined ? id : ++User.id;
		this.favoriteGenre = favoriteGenre !== undefined ? favoriteGenre : null;

		console.log(
			`Welcome to the library ${this.name} we have for to read. All we ask is that you please be quiet`
		);
	}

	lendBook(book: string): void {
		if (Library.books.includes(book)) {
			Library.books = Library.books.filter((item) => {
				return item !== book;
			});
			console.log(`${this.name} borrowed ${book}, to be returned next week`);
		} else {
			console.log(`We currently don't have "${book}" please check back later`);
		}
	}

	returnBook(book: string): void {
		Library.books.push(book);
		console.log(`Thank you ${this.name} for returning "${book}"`);
	}
}

const lib1 = new Library("Memorial Library");

const user1 = new User("Toby", 25);
const user3 = new User("Daniel", 25);
const user4 = new User("David", 25);

console.log(user1, user3, user4);

user1.returnBook("Native Son");
let books: string[] = lib1.allBooks;
console.log(books);
user1.lendBook("Half of A Yellow Sun");
lib1.addToArchive("Half of A Yellow Sun");
console.log(lib1.allBooks);
user1.lendBook("Half of A Yellow Sun");
console.log(lib1.allBooks);
