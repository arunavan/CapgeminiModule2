package joined;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
public class InheritanceTest {
	public static void main(String[] args) {
		EntityManagerFactory factory = Persistence.createEntityManagerFactory("JPA-PU");
		EntityManager em = factory.createEntityManager();
		em.getTransaction().begin();
		
		CreditAccount account = new CreditAccount();
		account.setId(10l);
        account.setBalance(10000.0);
        account.setInterestRate(10.0);
        account.setOwner("Ramesh");
        account.setCreditLimit(10000.0);
        em.persist(account);
        
        DebitAccount debitAccount = new DebitAccount();
        debitAccount.setId(20l);
        debitAccount.setBalance(10000.0);
        debitAccount.setInterestRate(10.0);
        debitAccount.setOwner("Ramesh");
        debitAccount.setOverdraftFee(100.0);
        em.persist(debitAccount);
		
		em.getTransaction().commit();
		
		System.out.println("Added");
		em.close();
		factory.close();
	}
}
