package com.example.liontracker.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import com.example.liontracker.model.Lion;
import com.example.liontracker.service.LionService;

@Controller
@RequestMapping("/lions")
public class LionController {

    private final LionService lionService;

    public LionController(LionService lionService) {
        this.lionService = lionService;
    }

    @GetMapping("/all")
    public String getAllLions(Model model) {
        model.addAttribute("lionList", lionService.getAllLions());
        return "lion-list";
    }

    @GetMapping("/{id}")
    public String getLionById(@PathVariable Long id, Model model) {
        Lion lion = lionService.getLionById(id).orElse(null);
        model.addAttribute("lion", lion);
        return "lion-details";
    }

    @GetMapping("/create")
    public String createLionForm(Model model) {
        model.addAttribute("lion", new Lion());
        return "lion-create";
    }

    @PostMapping("/create")
    public String createLion(@ModelAttribute Lion lion) {
        lionService.saveLion(lion);
        return "redirect:/lions/all";
    }

    @GetMapping("/update/{id}")
    public String updateLionForm(@PathVariable Long id, Model model) {
        Lion lion = lionService.getLionById(id).orElse(null);
        model.addAttribute("lion", lion);
        return "lion-update";
    }

    @PostMapping("/update")
    public String updateLion(@ModelAttribute Lion lion) {
        lionService.saveLion(lion);
        return "redirect:/lions/all";
    }

    @GetMapping("/delete/{id}")
    public String deleteLion(@PathVariable Long id) {
        lionService.deleteLion(id);
        return "redirect:/lions/all";
    }
}
