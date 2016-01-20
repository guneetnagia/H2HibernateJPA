package net.javabeat.spring.data.services;

import java.util.List;
import org.springframework.data.repository.Repository;
import net.javabeat.spring.data.domain.Book;

public interface BookOwnRepository extends Repository<Book, Long>{
	List<Book> findByName(String name);
	List<Book> findByPrice(long price);
	List<Book> findByNameAndAuthor(String name, String author);
}
