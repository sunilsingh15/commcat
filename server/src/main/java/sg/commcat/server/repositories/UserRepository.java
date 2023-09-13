package sg.commcat.server.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import sg.commcat.server.enums.UserRole;
import sg.commcat.server.models.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findFirstByUsername(String username);

    User findByRole(UserRole admin);

}
