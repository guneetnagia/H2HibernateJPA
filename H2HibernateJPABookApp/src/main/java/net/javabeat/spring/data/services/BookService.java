package net.javabeat.spring.data.services;

import java.util.List;
import net.javabeat.spring.data.domain.Book;

public interface BookService {
	/*public long count();    //new
	public void delete(List<Book> book);  //new
	public void deleteAll();   //new
	public boolean exist(long id);   //new
*/	
	public List<Book> findAll();
	public void saveBook(Book book);
	public Book findOne(long id);
	public void delete(long id);
	public List<Book> findByName(String name);
	public List<Book> findByPrice(long price);
	public List<Book> findByNameAndAuthor(String name, String author);
	
}
