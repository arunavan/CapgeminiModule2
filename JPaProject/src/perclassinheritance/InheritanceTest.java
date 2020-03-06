package perclassinheritance;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
public class InheritanceTest {
	public static void main(String[] args) {
		EntityManagerFactory factory = Persistence.createEntityManagerFactory("JPA-PU");
		EntityManager em = factory.createEntityManager();
		em.getTransaction().begin();
		//create one employee
		Employee2 employee = new Employee2();
		employee.setEmployeeId(9);
		employee.setName("John");
		employee.setSalary(5000);
		em.persist(employee);
		
		//create one manager
		Manager2 manager = new Manager2();
	    manager.setEmployeeId(12);
		manager.setName("Trisha");
		manager.setSalary(8000);
		manager.setDepartmentName("Sales");
		em.persist(manager);
		
		
		
		em.getTransaction().commit();
		
		System.out.println("Added one employee and manager to database.");
		em.close();
		factory.close();
	}
}
