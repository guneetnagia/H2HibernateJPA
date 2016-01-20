package net.javabeat.spring.data.services;

import org.springframework.data.repository.CrudRepository;

import net.javabeat.spring.data.domain.Book;

public interface BookRepository extends CrudRepository<Book, Long>{

}
