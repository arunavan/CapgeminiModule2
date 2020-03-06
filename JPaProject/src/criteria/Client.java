package criteria;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
public class Client {
	public static void main(String[] args) {
	Book1 book= new Book1();
	Book1 book1= new Book1();
	Book1 book2= new Book1();
	
	EntityManagerFactory emf= Persistence.createEntityManagerFactory("JPA-PU");
	EntityManager em= emf.createEntityManager();
	em.getTransaction().begin();
	book.setId(11);
	book.setAuthor("John");
	book.setTitle("java");
	book.setPrice(99.99);
	
	book1.setId(12);
	book1.setAuthor("John");
	book1.setTitle("oracle");
	book1.setPrice(79.99);
	
	book2.setId(13);
	book2.setAuthor("John");
	book2.setTitle("testing");
	book2.setPrice(59.99);
	//em.persist(book);
	//em.persist(book1);
	//em.persist(book2);
	
	em.getTransaction().commit();
	
	CriteriaBuilder cb= em.getCriteriaBuilder();
	CriteriaQuery<Book1> cq=cb.createQuery(Book1.class);  
	Root<Book1> stud=cq.from(Book1.class);
	// for displaying list of books in ascending order 
	// cq.orderBy(cb.asc(stud.get("title")));  
	
	//for sorting records in descending order of price
    //cq.orderBy(cb.desc(stud.get("price")));
    
	//book list where price is greater than 70
	cq.where(cb.greaterThan(stud.get("price"),70));
	
	CriteriaQuery<Book1> select = cq.select(stud);  
    TypedQuery<Book1> q = em.createQuery(select);  
    List<Book1> list = q.getResultList();
    for(Book1 b: list) {
     System.out.println(b.getTitle()+" "+b.getId()+" "+b.getPrice());
     }
     em.close();
	emf.close();
		}
	
}
