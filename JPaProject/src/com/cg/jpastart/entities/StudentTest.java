package com.cg.jpastart.entities;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class StudentTest {

	public static void main(String[] args) {
		
		EntityManagerFactory factory = Persistence.createEntityManagerFactory("JPA-PU");
		EntityManager em = factory.createEntityManager();
		em.getTransaction().begin();
		Student student1 = new Student();
		student1.setStudentId(1);
		student1.setName("John1");
		Student student2 = new Student();
		student2.setStudentId(3);
		student2.setName("John2");
		//em.persist(student1);  //insert query
		//em.persist(student2);
		//em.remove(student2); //delete
		
		Student ss=em.find(Student.class,9);
		System.out.println(ss);
		System.out.println("entity removed");
		em.getTransaction().commit();
	//	em.getTransaction().rollback();
		
		System.out.println("Added one student to database.");
		em.close();
	//<property name="hibernate.hbm2ddl.auto" value="create"/>	<!-- for auto create/update tables -->
			
		
		
		factory.close();
	}
}
