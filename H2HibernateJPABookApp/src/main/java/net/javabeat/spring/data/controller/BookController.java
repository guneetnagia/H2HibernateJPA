package net.javabeat.spring.data.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javabeat.spring.data.domain.Book;
import net.javabeat.spring.data.services.BookService;

@RestController
@RequestMapping("/books")
public class BookController {
	
	@Autowired
	private BookService bookService;

	public BookService getBookService() {
		return bookService;
	}

	public void setBookService(BookService bookService) {
		this.bookService = bookService;
	}
	
	@RequestMapping("/add/{name}/{author}/{price}")
	public Book addBook(@PathVariable String name,@PathVariable String author, @PathVariable long price){
		Book book = new Book();
		book.setName(name);
		book.setAuthor(author);
		book.setPrice(price);
		bookService.saveBook(book);
		return book;
	}
	
	@RequestMapping("/delete/{id}")
	public void deleteBook(@PathVariable long id){
		Book book = new Book();
		book.setId(id);
		bookService.delete(id);
	}
	
	@RequestMapping("/search/{name}")
	public List<Book> getBookName(@PathVariable String name){
		List<Book> book = bookService.findByName(name);
		return book;
	}
	
	@RequestMapping("/search/{price}")
	public List<Book> getBookPrice(@PathVariable long price)
	{
		List<Book> book = bookService.findByPrice(price);
		return book;
	}
	
	@RequestMapping("/search/{name}/{auhor}")
	public List<Book> getBookNameAuthor(@PathVariable String name,@PathVariable String author){
		List<Book> book = bookService.findByNameAndAuthor(name, author);
		return book;
	}
	
	@RequestMapping("/search/{id}")
	public Book getBook(@PathVariable long id){
		Book book = bookService.findOne(id);
		return book;
	}
	
	@RequestMapping("/search")
	public List<Book> getAllBook(){
		List<Book> book = bookService.findAll();
		return book;
	}
	
}
