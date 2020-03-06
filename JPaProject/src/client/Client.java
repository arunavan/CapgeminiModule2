package client;

import entities.Book;
import service.BookService;
import service.BookServiceImpl;

public class Client {

	public static void main(String[] args) {

		BookService service = new BookServiceImpl();
		
		
		System.out.println("************Listing total number of books*************");
		System.out.println("Total books:"+service.getBookCount());
		
		System.out.println("************Listing book with id 105*************");
		System.out.println("Boo with ID 106:"+service.getBookById(104));
		
		System.out.println("************Listing All books*************");
		for(Book book:service.getAllBooks()) {
			System.out.println(book);
		}
		
		
		
		System.out.println("************Listing book written by Peter*************");
		for(Book book:service.getAuthorBooks("Peter") ) {
			System.out.println(book);
		}
		
		System.out.println("************Listing book on java ************");
		for(Book book:service.getBookByTitle("Java")) {
			System.out.println(book);
		}
		
		
		
		System.out.println("************Listing All books between 500 and 600*************");
		for(Book book:service.getBooksInPriceRange(500, 1000) ) {
			System.out.println(book);
		}
		
		
		
		

	}
}
