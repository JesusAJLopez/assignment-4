package com.example.liontracker.service;

import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import com.example.liontracker.model.Lion;
import com.example.liontracker.repository.LionRepository;

@Service
public class LionService {
    private final LionRepository lionRepository;

    public LionService(LionRepository lionRepository) {
        this.lionRepository = lionRepository;
    }

    public List<Lion> getAllLions() {
        return lionRepository.findAll();
    }

    public Optional<Lion> getLionById(Long id) {
        return lionRepository.findById(id);
    }

    public Lion saveLion(Lion lion) {
        return lionRepository.save(lion);
    }

    public void deleteLion(Long id) {
        lionRepository.deleteById(id);
    }
}
