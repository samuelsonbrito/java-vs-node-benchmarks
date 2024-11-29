package br.com.descompila.apitest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TesteController {

    @GetMapping("/testeSimples")
    public String testeSimples(){
        return "Resposta do Spring Boot";
    }

    @GetMapping("/testeComplexo")
    public int heavyCalculation() {
        int sum = 0;
        for (int i = 0; i < 10_000_000; i++) {
            sum += i;
        }
        return sum;
    }
}
