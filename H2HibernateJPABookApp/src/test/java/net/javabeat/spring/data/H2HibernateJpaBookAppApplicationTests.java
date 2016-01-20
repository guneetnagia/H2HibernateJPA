package net.javabeat.spring.data;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = H2HibernateJpaBookAppApplication.class)
@WebAppConfiguration
public class H2HibernateJpaBookAppApplicationTests {

	@Test
	public void contextLoads() {
	}

}
