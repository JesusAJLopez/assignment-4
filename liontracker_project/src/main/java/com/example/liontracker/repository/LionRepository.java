package com.example.liontracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.liontracker.model.Lion;

public interface LionRepository extends JpaRepository<Lion, Long> {
}
